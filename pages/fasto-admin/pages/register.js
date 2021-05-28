import React from 'react';


const Register = () => {
    return ( 
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-md 2xl:max-w-lg lg:my-20 2xl:my-48">
            <div className="bg-gray-100 py-8 px-6 shadow rounded-lg sm:px-10">
                <span className="flex justify-center text-4xl text-gray-900 font-bold 2xl:text-6xl">Samsoft</span>
                <span className="flex justify-center text-gray-500 mt-5 2xl:text-lg">Already have an account?
                    <span className="text-gray-900 ml-3 2xl:text-lg" >sign in</span>
                </span>
                <form>
                    <div className="mt-5">
                        <label for="name" className="block text-sm font-medium text-gray-700  2xl:text-lg">
                            Username
                        </label>
                        <div className="mt-1">
                            <input id="name" name="name" type="text"  required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-gray-400 focus:ring-gray-400"></input>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label for="email" className="block text-sm font-medium text-gray-700 2xl:text-lg">
                            Email
                        </label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-gray-400 focus:ring-gray-400"></input>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label for="password" required className="block text-sm font-medium text-gray-700 2xl:text-lg">
                            Password
                        </label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autoComplete="password" required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-gray-400 focus:ring-gray-400"></input>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="bg-gray-600 px-4 py-2 w-full rounded-md">
                            <span className="text-white 2xl:text-lg">Sign me up</span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Register;