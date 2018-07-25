import React,{Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Form extends Component{
state={
	query: ''
}

updateQuery = (query) => {this.setState({query: query.trim()})}


render(){
	let showingContacts;
	if(this.state.query){
	const match = new RegExp(escapeRegExp(this.state.query),'i')
	console.log('match is',match);
	showingContacts = this.props.contact.filter((con) => match.test(con.name))
	{console.log('showing',showingContacts)}
	}
	else
	{
		showingContacts =this.props.contacts
	}
	//{console.log('showingContacts'+JSON.stringify(showingContacts))}
	return(
		<div>
		<div className='search-field'>
			<input type='text' placeholder='Search Contacts'
			 value={this.state.query} 
			 onChange= {(event) => this.updateQuery(event.target.value)}/>
		</div>
			<ul className='contact-list'>
		{showingContacts.map((contact) => (
		<li key ={contact.id} className='contact-list-item'>
		<div className="contact-avatar" style={{
			background: `url${contact.avatarURL}`
		}}/>
		<div className='listitems'>
			<p>{contact.name}</p>
			<p>{contact.email}</p>
		</div>
		<button className="remove-btn" 
onClick = {()=> this.props.onDeleteContact(contact)}
>Remove Contact</button>
	</li>))}
			</ul>
</div>


	);
}

}

export default Form
