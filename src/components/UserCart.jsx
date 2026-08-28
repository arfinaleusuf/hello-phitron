import React from 'react';
import { useState } from 'react';


const UserCart = ({ user , selectedUsers, setSelectedUsers}) => {
    

    const handleUserClick = () => {
        setSelectedUsers([...selectedUsers, user])
    }
    // console.log(selectedUsers, "selectedUsers")
    return (
        <div>
            <div className='user-cart' onClick={handleUserClick}>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <h2>{user.email}</h2>
            </div>
        </div>
    );
};

export default UserCart;