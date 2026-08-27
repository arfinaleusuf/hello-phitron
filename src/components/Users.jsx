import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

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

            {isLoading ? <h2>Loading...</h2> : <div className='user-cart-parent'>
                {users.map((user, ind)=> {
                    return (
                        <div className='user-cart' key={ind}>
                            <h2>{user.name}</h2>
                            <h2>{user.username}</h2>
                            <h2>{user.email}</h2>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
};

export default Users;