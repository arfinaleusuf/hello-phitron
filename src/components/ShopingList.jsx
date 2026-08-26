import React, { useState } from 'react';

const ShopingList = () => {
    const [todo, setTodo] = useState(["milk", "Soap", "Body Spray", "Light", "potato"])
    
    const handleRemoveItem = (item) =>{
        console.log(item);
        const newTodoList = todo.filter(todoItems => todoItems != item)

        setTodo(newTodoList)
    };

    const handleAdd = (newItem) => {


        setTodo([...todo, newItem])
    }
    return (
        <div className='shoping-list'>
            <h1>Todo List</h1>

            <button onClick={()=>handleAdd("Salt")}>Salt</button>
            <button onClick={()=>handleAdd("Oil")}>Oil</button>

            <div className='item-parent'>
                {
                    todo.map((item, ind) => {
                        return <h2 onClick={()=>handleRemoveItem(item)} key={ind}>{item}</h2>
                    })
                }
            </div>

        </div>
    );
};

export default ShopingList;