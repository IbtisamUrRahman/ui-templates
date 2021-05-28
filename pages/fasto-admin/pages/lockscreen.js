import React from 'react';

const LockScreen = () => {
    return ( 
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-md 2xl:max-w-lg sm:my-24 lg:my-40 2xl:my-72">
            <div className="bg-gray-100 py-8 px-6 shadow rounded-lg sm:px-10">
                <span className="flex justify-center text-4xl text-gray-900 font-bold 2xl:text-6xl">Samsoft</span>
                <span className="flex justify-center text-gray-800 mt-5 2xl:text-lg">Account Locked</span>
                <form>
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
                            <span className="text-white 2xl:text-lg">Unlock</span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
     );
}
 
export default LockScreen;