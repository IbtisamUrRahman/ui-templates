import React from 'react';


const Login = () => {
    return ( 
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-md 2xl:max-w-lg sm:my-10 lg:my-28 2xl:my-56">
            <div className="bg-gray-100 py-8 px-6 shadow rounded-lg sm:px-10">
                <span className="flex justify-center text-4xl text-gray-900 font-bold 2xl:text-6xl">Samsoft</span>
                <span className="flex justify-center text-gray-500 mt-5 2xl:text-lg">Don't have an account?
                    <span className="text-gray-900 ml-3 2xl:text-lg" >sign up</span>
                </span>
                <form>
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
                    <div className="flex items-center mt-5">
                        <input type="checkbox" className="text-gray-700 focus:ring-gray-600 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <label className="text-gray-500 ml-2 mr-6 2xl:text-lg">Remember my preference</label>
                        <label className="text-gray-600 2xl:text-lg block">Forgot password?</label>
                    </div>
                    <div className="mt-5">
                        <button className="bg-gray-600 px-4 py-2 w-full rounded-md">
                            <span className="text-white 2xl:text-lg">Sign me in</span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Login;