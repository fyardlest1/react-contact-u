import React from 'react';

const ListContacts = (props) => {
    return (
        <ol className='contact-list'>
            {props.contacts.map((c) => (
              <li key={c.id} className='contact-list-item'>
                <div
                  className='contact-avatar'
                  style={{ backgroundImage: `url(${c.avatarURL})` }}
                />
                <div className='contact-details'>
                    <p> {`Name: ${c.name}`} </p>
                    <p> {`Handle: ${c.handle}`} </p>
                </div>
                <button className='contact-remove' onClick={() => props.onDeleteContact(c)}></button>
              </li>
            ))}
        </ol>
    );
}

export default ListContacts;
