import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Profile = () => {

    const {user} = useAuth()

    console.log(user);
    return (
        <>

<div>
    <div className="max-w-sm my my-6 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src={user?.photoURL} alt=""/>
                <div className="py-2">
                    <h3 className="font-bold text-2xl mb-1">{user?.displayName}</h3>
                </div>
            </div>
            <div className="flex gap-2 px-2 mb-5">
                <Link to="#" className="w-full text-center btn rounded-full bg-blue-600 text-white antialiased font-bold hover:bg-blue-800 px-4 py-2">Follow Me</Link>
                {/* <button className="flex-1 rounded-full border-2 border-gray-400 font-semibold text-black px-4 py-2">Message</button> */}
            </div>
            <span><strong className="text-black">Email: </strong>{user?.email ? user?.email : 'Not Available'}</span>
        </div>

    </div>
</div>
            
        </>
    );
};

export default Profile;