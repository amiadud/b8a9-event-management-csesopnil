import React from 'react';
import useAuth from '../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {

    const { createUser } = useAuth()

const handleRegister = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value
    const lname = e.target.lname.value
    const fullname = fname + " "+ lname
    const img = e.target.img.value
    const email = e.target.email.value
    const password = e.target.password.value
    const AcceptTerms = e.target.terms.checked
    console.log(fullname, img, email, password);
    e.target.reset();
     
    if(!AcceptTerms){
      console.log("Please accept terms and condition And try again "); 
      return;
     }
    
    

    createUser(email, password)
    .then(res => {
        console.log(res.user);
        updateProfile(res.user, {
            displayName:fullname,
            photoURL:img
        })
        .then(() => {
            console.log("update profile");
        })
        .catch(err => {
            console.log(err);
        })

    })
    .catch(err => {
        console.log(err.message);
    })
}

    return (
        <>
             <div className="hero ">
  <div className=" flex-col  my-5  lg:flex-row-reverse">
    <div className="text-center  my-5  lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className='flex gap-2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="First name" name='fname' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last name" name='lname' className="input input-bordered" />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="">
        <input type="checkbox" name="terms" id="" />
        <label className="ml-2" htmlFor="terms">Accept <Link className='font-semibold' to="#">Term and Condition</Link></label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Register Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Register;