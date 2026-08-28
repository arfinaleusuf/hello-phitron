import React from 'react';
import UserCart from './UserCart';

const SelectedUsers = ({selectedUsers}) => {

    return (
        <div className='selected-user-parent'>
            <h2>Selected Users</h2>
            <div>
                {selectedUsers.map((su, ind) => {
                    return <UserCart user = {su} key={ind}/>
                })}
            </div>
        </div>
    );
};

export default SelectedUsers;