import React, { useState } from 'react';

const AddUsers = () => {
    const [users, setUsers] = useState({name: 'omuk ali', email: 'tomuk@ali.com'});

    const handleAddUsers = event => {
        event.preventDefault();
        console.log(users)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(users)
        })
        .then( res => res.json())
        .then( data => {
            if(data.acknowledged){
                alert('user add successfully')
                event.target.reset();
            }
        
        })
    }

    const handleInputOnBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...users};
        newUser[field] = value;
        setUsers(newUser)
        
    }

    return (
        <div>
            <h2>Added User : </h2>
            <form onSubmit={handleAddUsers}>
                <input onBlur={handleInputOnBlur} type="text" name="name" placeholder='name' required />
                <br />
                <input onBlur={handleInputOnBlur} type="text" name="address" placeholder='addresss' id="" required />
                <br />
                <input onBlur={handleInputOnBlur} type="email" name="email" placeholder='email' id="" />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;