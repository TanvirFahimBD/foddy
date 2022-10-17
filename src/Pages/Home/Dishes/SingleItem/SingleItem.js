import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

const SingleItem = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({})
    const [restItems, setRestItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/TanvirFahimBD/json/main/foods.json?token=GHSAT0AAAAAABYMKSJYRXCSQP3FFIKJ65UAY2NGLPA")
            .then(res => res.json())
            .then(data => {
                const current = data.find(dt => dt._id === itemId)
                if (current) {
                    console.log('curr ', current);
                    setItem(current)
                }
                const remaining = data.filter(dt => dt._id !== itemId)
                if (remaining) {
                    setRestItems(remaining)
                }
            })
    }, []);

    return (
        <div>
            {/* <Item key={item._id} item={item} /> */}
            { }
        </div>
    );
};

export default SingleItem;