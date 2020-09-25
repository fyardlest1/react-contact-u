import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('');
    }

    render() {

        const { query } = this.state;
        const { contacts, onDeleteContact } = this.props;

        const showingContacts = query === '' 
            ? contacts 
            : contacts.filter(c => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">                    
                    <input 
                        type="text" 
                        className="search-contacts" 
                        placeholder="Search Contacts"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)} />
                </div>
                { showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span> Now showing {showingContacts.length} of {contacts.length} contacts </span>
                        <button onClick={this.clearQuery}>Show all contacts</button>
                    </div>
                ) }
                <ol className='contact-list'>
                    {showingContacts.map((c) => (
                    <li key={c.id} className='contact-list-item'>
                        <div
                        className='contact-avatar'
                        style={{ backgroundImage: `url(${c.avatarURL})` }}
                        />
                        <div className='contact-details'>
                            <p> {`Name: ${c.name}`} </p>
                            <p> {`Handle: ${c.handle}`} </p>
                        </div>
                        <button className='contact-remove' onClick={() => onDeleteContact(c)}></button>
                    </li>
                    ))}
                </ol>
            </div>
            
        );
    }
}


export default ListContacts;
