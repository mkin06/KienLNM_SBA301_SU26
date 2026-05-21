//Component counter để đém số lần nhấn vào button,
// tăng, giảm, reset không cho phép nhẫn xuống 0
//Dùng React-Boostrap để tạo giao diện đẹp hơn
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Counter.css';
function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count > 0 ? count - 1: 0);
    const reset = () => setCount(0);
    return (
        <Container className="text-center mt-5">
            <h1> Counter: {count}</h1>
            <Button variant="primary" onClick={increment}>Increment</Button>
            <Button variant="danger" onClick={decrement}>Decrement</Button>
            <Button variant="secondary" onClick={reset}>Reset</Button>
        </Container>
    )

}

export default Counter