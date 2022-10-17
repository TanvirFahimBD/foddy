import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    // console.log('spec item', item)
    const navigate = useNavigate();
    const { _id, about, balance, name, picture } = item;
    const handleItem = () => {
        navigate(`/items/${_id}`)
    }

    return (
        <Col className='item' md={4}>
            <span onClick={handleItem}>
                <img src={picture} alt="" width={200} />
                <h5>{name}</h5>
                <p>{about.slice(0, 50)}</p>
                <h4>{balance}</h4>
            </span>
        </Col>
    );
};

export default Item;