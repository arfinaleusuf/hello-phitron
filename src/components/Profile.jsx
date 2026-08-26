import React, { useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState({name: 'arfin', age: 21, location: 'Dhaka'})

    console.log(user, "user");

    const handleAge = () =>{

        const newUser = {...user, age: user.age + 1};
        setUser(newUser);
    }
    return (
        <div className='profile'>
            profile
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.location}</h2>
            <button onClick={()=>handleAge()}>Incriment age</button>
        </div>
    );
};

export default Profile;