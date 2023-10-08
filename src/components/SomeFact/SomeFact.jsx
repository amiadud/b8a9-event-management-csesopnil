import React from 'react';

const SomeFact = () => {
    return (
        <>

<section className="facts my-4">
            <h3 className="text-3xl font-bold text-center mb-8">Some Facts</h3>
            <div className="flex justify-center md:flex-row flex-col gap-9 flex-warp">
                <div className="border-2 p-[50px] rounded-lg outline-none hover:border-pink-500 hover:shadow-md text-center">
                    <h3 className="text-xl font-semibold">1458</h3>
                    <small className="text-center text-xl font-semibold text-gray-500">Project Finished</small>
                </div>
                <div className="border-2 p-[50px] rounded-lg outline-none hover:border-pink-500 hover:shadow-md text-center">
                    <h3 className="text-xl font-semibold">590</h3>
                    <small className="text-center text-xl font-semibold text-gray-500">Clients Worked</small>
                </div>
                <div className="border-2 p-[50px] rounded-lg outline-none hover:border-pink-500 hover:shadow-md text-center">
                    <h3 className="text-xl font-semibold">22578</h3>
                    <small className="text-center text-xl font-semibold text-gray-500">Email Send</small>
                </div>
            </div>
        </section>
            
        </>
    );
};

export default SomeFact;