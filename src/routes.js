import React from 'react';

//Componentes do react-router-dom 
import {BrowserRouter, Switch, Route } from 'react-router-dom';
//BrowserRouter: Significa que estou chamando uma rota do navegador
//Switch: Só permite usar uma rota por vez


import Main from './Components/Lista/main';
import Product from './Components/product/index';
import Edit from './Components/product/edit';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  </BrowserRouter>
);

export default Routes;