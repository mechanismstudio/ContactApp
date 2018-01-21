import React, { Component } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

   state = { activeItem: 'home' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   render() {
      return (
         <Container>
            <Segment inverted>
              <Menu inverted secondary>
                <Menu.Item as={NavLink} to='/'name='Contacts' />
                <Menu.Item as={NavLink} to='/add'name='Add Contact' />
                <Menu.Menu position='right'>
                  <Menu.Item name='By Ruie Dela Pena'/>
               </Menu.Menu>
              </Menu>
           </Segment>
         </Container>
      )
   }
}
