import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser } = useAuth()

    const navigate = useNavigate()

const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const img = e.target.img.value
    const email = e.target.email.value
    const password = e.target.password.value
    const AcceptTerms = e.target.terms.checked
    // e.target.reset();
     
    if (password.length < 6 ){
      return toast.error("Password should be at least 6 characters or longer..");
    }
    else if (!/[A-Z]/.test(password)){
      return toast.error('Do not have a capital letter');
    }
    if (!/[>!#@$%&?"<]/.test(password))
    {
      return toast.error('Do not have a special character');
    }
    else if (!AcceptTerms){
      return toast.error("Please accepted our terms and condition..");
    }
    createUser(email, password)
    .then(res => {
        toast.success("Your Account was successfully Registered..");
        updateProfile(res.user, {
            displayName:username,
            photoURL:img
        })
        .then(() => {
            setTimeout( ()=>{
              navigate('/profile')
            },1000)
            toast.success("Your Profile Updated..")
        })
        .catch(() => {
          toast.error("Your Profile Not Updated..")
        })
    })
    .catch(() => {
      toast.warning("Not Successful Registered..");
    })
}

    return (
        <>
             <div className=" ">
  <div className=" flex-col  my-5  lg:flex-row-reverse">
    <div className="text-center  my-5  lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>    </div>
    <div className="card md:w-3/6 mx-auto flex-shrink-0 shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="username" name='username' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Image URL</span>
          </label>
          <input type="text" placeholder="Image URL" name='img' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
        </div>
        <div>
        <input type="checkbox" name="terms" id="" />
        <label className="ml-2" htmlFor="terms">Accept <Link className='font-semibold' to="#">Term and Condition</Link></label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Register Now</button>
          <p className="mt-2">Already have an account?<Link to="/login" className=" ml-3 link link-hover mt-3 link-success font-medium">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer />
        </>
    );
};

export default Register;