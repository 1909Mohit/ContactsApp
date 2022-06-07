import React, {useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCRUD } from '../context/ContactsCrudContext';

const EditContacts = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, name, email } = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const { updateContactHandler } = useContactsCRUD();

    const update = (e) => {
        e.preventDefault();
        
        if (newName === "" || newEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
        updateContactHandler({id, name: newName, email: newEmail });
     
        setNewName("");
        setNewEmail("");
        navigate('/');
    };
    

    return (
        <div className='container-fluid'style={{backgroundColor:'#E9EFC0' }}>
            <h2 className='p-2'>Edit Contact</h2>
            <form className='mb-3 container-fluid' onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label' for='name'>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className='form-control' 
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' for='email'>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className='form-control'
                        value={newEmail}
                        onChange={(e) => setNewEmail( e.target.value )} />
                </div>
                <button type='submit' className='btn btn-primary mb-3'>Update</button>
            </form>
        </div>
    )

}

export default EditContacts