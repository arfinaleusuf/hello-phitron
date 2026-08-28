import React, { useEffect, useState } from 'react';
import SelectedUsers from './SelectedUsers';
import UserCart from './UserCart';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [selectedUsers, setSelectedUsers] = useState([])


    const [counter, setCounter] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
    }, [])

    console.log(users, isLoading);

    return (
        <div className='users'>
            <h2>user</h2>

            {/* <h2>{counter}</h2>
            <button onClick={()=> setCounter(prev => prev+1)}>Increse</button> */}
            <SelectedUsers selectedUsers={selectedUsers}/>

            {isLoading ? <h2>Loading...</h2> : <div className='user-cart-parent'>
                {users.map((user, ind)=> {
                    return <UserCart user={user} key={ind} selectedUsers = {selectedUsers} setSelectedUsers={setSelectedUsers}/>
                })}
            </div>}
        </div>
    );
};

export default Users;