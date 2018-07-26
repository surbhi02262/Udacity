import React, { Component } from 'react';
import ListContacts from './ListContacts';
import Form from './Form'
import * as ContactsApi from './ContactsApi'
 
 

class App extends Component {
  state={
contacts : []
}
componentDidMount(){
  ContactsApi.getAll().then((contacts) => {
this.setState({contacts: contacts})
})
}
 
removeContact = (con) => {
  this.setState((state) => ({
contacts: state.contacts.filter((c) => c.id !== con.id)
  })

    )



}
  render() {
    return (
   //   <ListContacts contact={this.state.contacts} onDeleteContact= {this.removeContact}/>
    <Form contact={this.state.contacts} onDeleteContact= {this.removeContact}/>
    );
  }
}

export default App;
