import React from 'react';
import googleIcon from '../../../images/icons/google-icon.png';
import fbIcon from '../../../images/icons/fb.png';
import gitIcon from '../../../images/icons/git1.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (user || user1) {
        navigate(from, { replace: true });
        console.log('btn login');
    }

    let errorElement;
    if (error || error1) {
        errorElement = (
            <div style={{ color: 'red' }}>
                <p>Error: {error ? error.message : error1.message}</p>
            </div>
        );
    }

    return (
        <div className='w-100'>
            <div className='d-flex justify-content-between'>
                <div style={{ height: '1px' }} className='w-50 bg-secondary' ></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary' ></div>
            </div>
            {errorElement}
            <div className='my-2' >
                <button className='btn border w-100 d-flex justify-content-center' onClick={() => signInWithGoogle()}>
                    <img src={googleIcon} alt="" width={30} height={30} />
                    <span className='mx-3'>Google SignIn</span>
                </button>
            </div>
            <div className='my-2' >
                <button onClick={() => signInWithGithub()} className='btn border  w-100 d-flex justify-content-center align-items-center'>
                    <img src={gitIcon} alt="" width={30} height={30} />
                    <span className='mx-3'>Github SignIn</span>
                </button>
            </div>
            <div className='my-2'>
                <button className='btn border  w-100 d-flex justify-content-center align-items-center'>
                    <img src={fbIcon} alt="" width={30} height={30} />
                    <span className='mx-3'>Facebook SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;