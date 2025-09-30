import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            USERS
        </div>
    );
};

export default Users;