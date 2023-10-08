import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleLogin, githubLogin} = useAuth()
    const navigate = useNavigate();

    const LoginSocial = (media) => {
        media()
        .then(res => {
            console.log("login successful",res.user);
            navigate('/');
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='text-center '>
        <h2 className='text-lg font-semibold mb-4'>Social Login</h2>
        <hr className='my-4' />
        <div className='flex gap-2 justify-center my-4'>
          <button onClick={()=> LoginSocial(googleLogin)} className='btn btn-secondary btn-sm capitalize'>Google</button>
        <button onClick={()=> LoginSocial(githubLogin)} className='btn btn-neutral btn-sm capitalize'>Github</button>
        </div>
        </div>
    );
};

export default SocialLogin;