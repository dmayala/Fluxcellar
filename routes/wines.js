import Promise from 'bluebird';
import fs from 'fs';
import multer from 'multer';

import WineModel from '../models/wine';

Promise.promisifyAll(fs);

export async function findById(req, res) {
  let id = req.params.id;
  console.log(`Retrieving wine: ${id}`);
  try {
    let item = await WineModel.findById(id);
    if (item) {
      res.send(item);
    } else {
      throw new Error('Item not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
}

export async function findAll(req, res) {
  let items = await WineModel.findAll();
  res.send(items);
}

export async function addWine(req, res) {
  try {
    let wine = req.body;
    let file = req.files.file;
    if (file) {
      wine.picture = file.name;
    }
    if (!Object.keys(wine).length) {
      throw new Error('Empty wine'); 
    }
    console.log(`Adding wine: ${JSON.stringify(wine)}`);
    let result = await WineModel.add(wine);
    console.log(`Success: ${JSON.stringify(result)}`);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
}

export async function updateWine(req, res) {
  let id = req.params.id;
  let wine = req.body;
  let file = req.files.file;
  if (file) {
    wine.picture = file.name;
  }
  delete wine._id;
  console.log(`Updating wine: ${id}`);
  console.log(JSON.stringify(wine));
  try {
    let result = await WineModel.update(id, wine);
    console.log(`${result.result.nModified} documents(s) updated`);
    res.send(wine);
  } catch (err) {
    console.log(`Error updating wine: ${err}`);
    res.send({ 'error': 'An error has occurred' });
  }
}

export async function deleteWine(req, res) {
  let id = req.params.id;
  console.log(`Deleting wine: ${id}`);
  try {
    let result = await WineModel.delete(id);
    console.log(`${result.result.ok} document(s) deleted`);
    res.send(req.body);
  } catch (err) {
    res.send({ 'error': `An error has occurred - ${err}` });
  }
}

