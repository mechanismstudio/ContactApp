import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import './style.css'
import Header from './Header';
import Content from './Content';
import Add from './Add';
import Edit from './Edit'

export default class App extends Component {
   
   render() {
      return (
         <BrowserRouter>
            <Container>
               <Header />
               <Route exact path="/" component={Content} />
               <Route exact path="/add" component={Add} />
               <Route exact path="/edit/*" component={Edit} />
            </Container>
         </BrowserRouter>
      )
   }
}
