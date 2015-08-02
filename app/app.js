import React from 'react';
import Iso from 'iso';
import Router from 'react-router';

import routes from './router/routes';
import Flux from './utils/flux';

const bootstrap = () => {
  return new Promise((resolve) => {
    Iso.bootstrap((initialState, __, container) => {
      resolve({ initialState, __, container });
    });
  });
};

(async () => {
  // Initialize alt instance
  const flux = new Flux();

  // bootstrap application with data from server
  const boot= await bootstrap();
  flux.bootstrap(boot.initialState);

  Router.run(
    routes,
    Router.HistoryLocation,
    (Handler) => {
      React.render(
        <Handler flux={flux} />, 
        document.getElementById('fluxcellar')
      );
    }
  );
})();
