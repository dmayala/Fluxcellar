import React from 'react';
import AppRouter from './router/AppRouter';

AppRouter.run((Handler) => {
  React.render(
    <Handler />, 
    document.getElementById('fluxcellar')
  );
});
