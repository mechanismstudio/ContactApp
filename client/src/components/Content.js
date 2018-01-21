import React, { Component } from 'react';import { Card, Icon, Image, Button } from 'semantic-ui-react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../actions';

class Content extends Component {

   state = {
      users: [],
      isFetching: false
   }

   componentDidMount() {
      this.props.fetchUsers();
   }

   deleteUser = id => async e => {
      await axios.delete(`/api/${id}`);
      window.location.reload()
   }

   renderUsers = () => {
      console.log(this.props)
      return this.props.users.map(user => {
         return ( 
         <Card key={user._id}>
         <Image src={user.thumbnail} />
         <Card.Content>
         <Card.Header>
            {user.name}
         </Card.Header>
         <Card.Description>
            {user.about}
         </Card.Description>
         </Card.Content>
         <Card.Content extra>
            <a><Icon name='comments outline' />{user.phoneNum}</a>
         </Card.Content>
         <Card.Content extra>
            <a><Icon name='mail outline' />{user.email}</a>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
              <Button basic color='green' as={NavLink} to={`/edit/${user._id}`}>Edit</Button>
              <Button basic color='red' onClick={this.deleteUser(user._id)}>Delete</Button>
           </div>
         </Card.Content>
         </Card>
         );
      })
   }


   render() {
      return (
         <Card.Group className="mt-3">
            {this.renderUsers()} 
         </Card.Group>
      ) 
   }
}

const mapStateToProps = ({ users }) => {
   return { users };
}

export default connect(mapStateToProps, actions)(Content);
