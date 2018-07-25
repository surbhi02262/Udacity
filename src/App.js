import React, { Component } from 'react';
import ListContacts from './ListContacts';
import Form from './Form'
 


class App extends Component {
  state={
contacts : [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }

]
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
