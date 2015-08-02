import React from 'react';
const cx = React.addons.classSet;

export class Form extends React.Component {
  state = this.getState();

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  getState() {
    return {
      title: '',
      wine: {},
      isDragActive: false,
      previewImage: '',
      shouldHide: true
    };
  }

  componentWillMount() {
    if (this.context.router.getCurrentParams().id) {
      this.props.flux.getActions('wines').loadWine(this.props.params.id);
    }
  }

  componentDidMount() {
    this.props.flux
              .getStore('wines')
              .listen(this._onChange);
  }

  componentWillUnmount() {
    this.props.flux
              .getStore('wines')
              .unlisten(this._onChange);
  }

  onDragLeave = (e) => {
    this.setState({
      isDragActive: false
    });
  }

  onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";

    this.setState({
      isDragActive: true
    });
  }

  onDrop = (e) => {
    e.preventDefault();

    this.setState({
      isDragActive: false
    });

    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    
    let file = files[0];
    this.setState({ file: file, previewImage: URL.createObjectURL(file) });
  }

  _onChange = () => {
    this.setState(this.getState());
  }

  _onTextChange = (e) => {
    let wine = Object.assign({}, this.state.wine);
    wine[e.target.name] = e.target.value; 
    this.setState({ wine: wine });
  }

  _onSave = (e) => {
    e.preventDefault();
    this.setState({ shouldHide: false });
  }

  _onDelete = (e) => {
    e.preventDefault();
    this.props.flux.getActions('wines').removeWine(this.state.wine._id);
    this.context.router.transitionTo('wines');
  }

  render() {
    let wine = this.state.wine;
    return (
      <div className="container">
        <div className="row">
          <form className="col-sm-12">
            <fieldset>
              <legend>{ this.state.title }</legend>
              <br />
              
              <div className="row">
                <div className="col-sm-8 col-md-8">
                  <div className="form-group">
                    <label htmlFor="wineId" className="control-label">Id:</label>
                    <div className="controls">
                      <input id="wineId" name="id" type="text" value={ wine._id }
                      disabled="true" className="form-control" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="control-label">Name:</label>

                    <div className="controls">
                      <input type="text" id="name" name="name" value={ wine.name }
                      onChange={this._onTextChange}
                      className="form-control" />
                      <span className="help-block"></span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="grapes" className="control-label">Grapes:</label>

                    <div className="controls">
                      <input type="text" id="grapes" name="grapes" value={ wine.grapes }
                      onChange={this._onTextChange}
                      className="form-control" />
                      <span className="help-block"></span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="country" className="control-label">Country:</label>

                    <div className="controls">
                      <input type="text" id="country" name="country" value={ wine.country }
                      onChange={this._onTextChange}
                      className="form-control" />
                      <span className="help-block"></span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="region" className="control-label">Region:</label>

                    <div className="controls">
                      <input type="text" id="region" name="region" value={ wine.region }
                      onChange={this._onTextChange}
                      className="form-control" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="year" className="control-label">Year:</label>

                    <div className="controls">
                      <select className="form-control input-sm" id="year" name="year"
                        value={ wine.year || 2012 } onChange={ this._onTextChange } >
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description" className="control-label">Notes:</label>

                    <div className="controls">
                      <textarea className="form-control" id="description" name="description"
                      rows="6" onChange={this._onTextChange} value={ wine.description || '' }>
                      </textarea>
                    </div>
                  </div>

                </div>

                <div className="col-sm-4 col-md-4" onDragLeave={ this.onDragLeave} onDragOver={
                  this.onDragOver } onDrop={ this.onDrop } >
                  <div className="well" style={{ width: '250px', textAlign: 'center', margin: '0px auto' }}>
                    <p><img id="picture" width="180" src={ this.state.previewImage || `/pics/${wine.picture || 'generic.jpg' }`} /></p>
                    <p style={{ color: '#999' }}>To change the picture, drag a new picture from your file system onto the box above.</p>
                  </div>
                </div>

              </div>

            </fieldset>

            <div className="form-actions">
              <button className="btn btn-primary save" onClick={this._onSave}>Save</button>
              <button className="btn delete btn-default" onClick={this._onDelete}>Delete</button>
            </div>

          </form>

        </div>

        <div className="status-bar row">
          <div className="col-sm-12 col-md-12">
            <div className={ cx({ 'alert': true, 'alert-success': true, 'hidden': this.state.shouldHide }) }>
              <b>Success!</b> Wine saved successfully
            </div>
          </div>
        </div>
      </div>
    );
  }
}
