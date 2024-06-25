import React, { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <>
            <button className="btn btn-primary container" onClick={decrement}>-</button>
            <span className="btn btn-primary container">{count}</span>
            <button className="btn btn-primary container" onClick={increment}>+</button>
        </>
    );
};

export default ItemCount;