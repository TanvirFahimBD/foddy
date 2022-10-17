import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    let displayName;
    const [terms, setTerms] = useState(false)
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading />
    }

    let errorElement;
    if (error || error2) {
        errorElement = <p style={{ color: 'red' }}>{error ? error.message : error2.message}</p>
    }

    if (user) {
        console.log('reg', user)
        navigate('/');
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        displayName = nameRef.current.value;
        await createUserWithEmailAndPassword(email, password, { sendEmailVerification: true });
        await updateProfile({ displayName })
        alert('Profile Created Successfully')
    }

    const handleTerms = () => {
        setTerms(!terms);
    }

    return (
        <div className='mx-auto w-25'>
            <h1>Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTerms">
                    <input type="checkbox" id="terms" onChange={handleTerms} />
                    <Form.Label className='mx-3' htmlFor='terms'>Accept Genius Car terms and conditions.</Form.Label>
                </Form.Group>
                <Button className={`w-100 ${terms ? '' : 'disabled'}`} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-3'>Already Have an account? <Link className='text-decoration-none' to='/login'>Login Now</Link> </p>
            {errorElement}
            <SocialLogin />
        </div >
    );
};

export default Register;