import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase/firebase.config';

const Login = () => {

  const {userLogin} = useAuth();
  const navigate = useNavigate()

  const emailRef = useRef(null)
  
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    userLogin(email, password)
    .then( res => {
      console.log("login successful",res);
      navigate('/');
    })
    .catch((error)=>{
      toast.error("password doesn't match");
    })
  }

  const handleForgetPassword = (e) => {
    const email = e.target.email.value
    
    // send validation email

    UserPassword(email)
    .then(()=> {
      console.log('Send your password reset email');
    })
    .catch(error => {
      console.log(error.message);
    })
  }

    return (
        <>
           <div className="hero ">
  <div className=" flex-col  my-5  lg:flex-row-reverse">
    <div className="text-center  my-5  lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <Link onClick={()=> handleForgetPassword} to="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit'  className="btn btn-primary">Login</button>
          <p className='mt-2'>Create a new Account. Visit <Link className='link-success font-semibold' to="/register">Register</Link></p>

        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
<ToastContainer />
        </>
    );
};

export default Login;