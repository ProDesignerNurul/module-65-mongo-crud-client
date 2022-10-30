import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const handleDelete = _id => {
        console.log('deleting id ', _id)
    }

    return (
        <div>
            <h2> User : {users.length}</h2>
            {
                users.map(user => <p key={user._id}>
                    {user.name}
                    {user.email}
                    <button onClick={ () => handleDelete (user._id)}>x</button>
                </p>)
            }
        </div>
    );
};

export default Home;