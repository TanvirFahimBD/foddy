import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('')
    const passwordRef = useRef();
    let password;
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    if (loading || sending) {
        return <Loading />
    }

    let errorElement;
    if (error || error2) {
        errorElement = <p style={{ color: 'red' }}>{error ? error.message : error2.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
        console.log('only login');
    }

    const handleLogin = e => {
        e.preventDefault();
        password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast(`Reset Password Send to ${email}`)
        } else {
            toast(`Please enter your email First`)
        }

    }

    return (
        <div className='mx-auto w-25'>
            <h1>Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='w-100 my-2 text-primary' style={{ cursor: 'pointer' }} variant="danger" onClick={handleResetPassword}>Forget Password?</p>
            <p className='my-3'>New to Genius Car? <Link className='text-decoration-none' to='/register'>Create an Account</Link> </p>
            {errorElement}
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;