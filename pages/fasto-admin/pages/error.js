import React from 'react';

const Error = () => {
    return ( 
        <>
         <div className="sm:mx-auto sm:w-full sm:max-w-md 2xl:max-w-lg sm:my-12 lg:my-40 2xl:my-72">
            <div className="py-8 px-6 sm:px-10">
                <p className="text-center text-9xl text-gray-900 font-bold">404!</p>
                <p className="text-center text-5xl text-gray-900 mt-3">Page not found.</p>
                <div className="flex justify-center mt-6">
                <button className="bg-gray-600 px-8 py-2 rounded-md" >
                    <span className="text-white font-semibold 2xl:text-lg">Home</span>
                </button>
                <button className="border-2 border-gray-900 px-8 py-2 rounded-md ml-3" >
                    <span className="text-gray-900 font-semibold 2xl:text-lg">Help</span>
                </button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Error;