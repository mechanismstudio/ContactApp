import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react'
import axios from 'axios'
import qs from 'querystring'

export default class Add extends Component {

   state = {
      name: '',
      number: '',
      email: '',
      thumb: '',
      about: '',
      success: false
   }

   handleChange = (e, { name, value }) => this.setState({ [name]: value })

   handleSubmit = async () => {
      const { name, number, email, thumb, about } = this.state;
      const data = qs.stringify({
         name,
         phoneNum: number,
         email,
         thumbnail: thumb,
         about
      });
      await axios.post('/api', data);
      this.setState({ name: '', number: '', email: '', thumb: '', about: '', success: true})
   }

   renderSucc = () => {
      return <Message success header='Contact Added' content="Go Back to Contacts"/>
   }

   render() {
      const { name, number, email, thumb, about } = this.state;
      return (
      <Form className="mt-3" success>
        <Form.Group widths='equal'>
         <Form.Input fluid required label="Name" placeholder='Name' name='name' value={name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input type="number" fluid required label='Phone Number' placeholder='e.g. 090512930812903' name='number' value={number} onChange={this.handleChange}/>
          <Form.Input fluid label='Email' placeholder='e.g. me@gmail.com' name='email' value={email} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Input fluid label='Thumbnail Link' placeholder='http://google.com/image.jpg' name='thumb' value={thumb} onChange={this.handleChange}/>
        <Form.TextArea required label='About' placeholder='Tell us more about you...' name='about' value={about} onChange={this.handleChange} />
                {this.state.success ? this.renderSucc() : null}
        <Form.Button onClick={() => this.handleSubmit()}>Submit</Form.Button>
      </Form>)
   }
}
