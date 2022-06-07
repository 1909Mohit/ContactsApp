import React from 'react';
import { useLocation, Link} from 'react-router-dom';
import user from '../images/user.jpg'


const ContactDetails = () => {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className='container card'style={{backgroundColor:'#1D5C63' }} >
            <div className='card-body d-flex row '>
                <div className='primary col-md-4'>
                    <img className='card-img-center' style={{ width: 200}}
                        src={user} alt='user' />
                </div>
                <div className='col-md-6'>
                    <div className='h3 pt-2 mt-2 card-text' >Name : {name}</div>
                    <div className='h3  card-text ' >Email : {email}</div>
                </div>
                <div className=''>
                    <Link to="/">
                        <button className='btn btn-dark mt-2' >Back to Contact List</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default ContactDetails;