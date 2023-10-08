import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
    <div class="text-center space-y-6 my-10">
      <div class="flex justify-center">
        <img src="./img/Icon.png" alt=""/>
        </div>
      <h2 class="text-5xl">Oops!! Sorry, There is no content here</h2>
      <h2 className='text-2xl'>Come Back to <Link className='link-success font-bold' to="/">Home</Link></h2>
      </div>
            
        </>
    );
};

export default ErrorPage;