import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
            <Spinner animation='border' variant='primary'></Spinner>
        </div>
    );
};

export default Loading;