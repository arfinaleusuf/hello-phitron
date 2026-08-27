import React from 'react';

const UserCart = (user) => {
    return (
        <div>
            <div className='user-cart'>
                            <h2>{user.name}</h2>
                            <h2>{user.username}</h2>
                            <h2>{user.email}</h2>
                        </div>
        </div>
    );
};

export default UserCart;