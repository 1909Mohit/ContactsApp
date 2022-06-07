import React from 'react';
import { Link } from 'react-router-dom';
import { useContactsCRUD } from '../context/ContactsCrudContext';
import user from '../images/user.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    const { removeContactHandler } = useContactsCRUD();

    const deleteContact = (id) => {
        removeContactHandler(id);
    }
    

    return (
        <div className='container-md d-flex mt-3'style={{backgroundColor:'#E9EFC0' }} >
            <img className='avatar me-3' style={{ width: 50 }} src={user} alt='user' />
            <div className='text-left col-10 '  >
                <Link to={`/contact/${id}`} state= {{ contact: props.contact }}>
                    <div className='p-0 ms-0'>{name}</div>
                    <div className='p-0 ms-0'>{email}</div>
                </Link>
            </div>
            <div className='container-md '>
                <Link to={`/edit` } state= { {contact: props.contact} }>
                <i className='bi bi-box-arrow-in-down-left me-2'
                    style={{ color: 'blue' }}
                />
            </Link>
            <i className='bi-archive  '
                style={{ color: 'red' }}
                onClick={() => deleteContact(id)}
            />
            </div>
        </div>
    )
}

export default ContactCard 