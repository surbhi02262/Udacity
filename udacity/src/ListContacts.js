import React,{Component} from 'react'
import PropTypes from 'prop-types'


function ListContacts(props){
		return(
<ul class='contact-list'>
{console.log('prop is',props.contact)}
	{props.contact.map((con) => (
	<li key ={con.id} className='contact-list-item'>
	<div className="contact-avatar" style={{
		background: `url${con.avatarURL}`
	}}>
	<div className='listitems'>
	<p>{con.name}</p>
	<p>{con.email}</p>
	</div>
	</div>
<button className="remove-btn" 
onClick = {()=> props.onDeleteContact(con)}
>Remove Contact</button>
	</li>))}
	

</ul>
			);
	}

ListContacts.PropTypes={
	contacts:PropTypes.array.isRequired
}
export default ListContacts