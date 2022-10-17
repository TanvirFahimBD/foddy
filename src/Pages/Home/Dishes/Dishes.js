import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';

const Dishes = () => {
    const [items, setItems] = useState([])
    const [isBreakFast, setIsBreakFast] = useState(true)
    const [isLunch, setIsLunch] = useState(false)
    const [isDinner, setIsDinner] = useState(false)

    useEffect(() => {
        fetch('breakfastFood.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleBreakFast = () => {
        setIsBreakFast(true)
        setIsLunch(false)
        setIsDinner(false)
        fetch('breakfastFood.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }

    const handleLunch = () => {
        setIsBreakFast(false)
        setIsLunch(true)
        setIsDinner(false)
        fetch('lunchFood.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }

    const handleDinner = () => {
        setIsBreakFast(false)
        setIsLunch(false)
        setIsDinner(true)
        fetch('dinnerFood.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <NavLink className={`mx-3 my-3 ${isBreakFast ? 'text-danger' : ''}`} onClick={() => handleBreakFast()}>Breakfast</NavLink>
                <NavLink className={`mx-3 my-3 ${isLunch ? 'text-danger' : ''}`} onClick={() => handleLunch()}>Lunch</NavLink>
                <NavLink className={`mx-3 my-3 ${isDinner ? 'text-danger' : ''}`} onClick={() => handleDinner()}>Dinner</NavLink>
            </div>
            <Container>
                <Row>
                    {items.map(item => <Item key={item._id} item={item}></Item>)}
                </Row>
            </Container>
        </div>
    );
};

export default Dishes;