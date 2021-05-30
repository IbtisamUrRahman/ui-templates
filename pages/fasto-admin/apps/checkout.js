import React from 'react';
import DashboardLayout from '../../../components/dashboard-layout/dashboard-layout';

const Checkout = () => {
    return ( 
        <>
        <DashboardLayout>
        <div className="m-4 py-4 px-6 shadow-sm rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl tracking-wider">Hi, Welcome back</h2>
                        <p className="text-gray-500 text-lg tracking-wide">Your Mock Web</p>
                    </div>
                    <div className="flex">
                        <span className="text-lg mr-3">Layout</span>
                        <span className="text-lg text-gray-500 mr-3">/</span>
                        <span className="text-lg text-gray-500">Blank</span>
                    </div>
                </div>
            </div>

        <div className="m-4 px-6 rounded-lg">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="hidden xl:block">
                <strong className="text-2xl">Billing Address</strong>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 pb-2">First Name</label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="firstname"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Last Name</label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="lastname"/>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Username</label>
                    <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="@username"/>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Email</label>
                    <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="you@example.com"/>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Address</label>
                    <input required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Address-2 (optional)</label>
                    <input className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        Country
                      </label>
                      <select id="country" name="country" autoComplete="country"
                        className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Pakistan</option>
                      </select>
                    </div>
                    <div className="w-1/3 ml-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        City
                      </label>
                      <select id="country" name="country" autoComplete="country"
                        className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>New York</option>
                        <option>Islamabad</option>
                      </select>
                    </div>
                    <div className="w-1/3 ml-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        Postal code
                      </label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <input type="checkbox" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <p className=" ml-4">Shipping Adress is same as billing address</p>
                </div>
                <div className="flex items-center mt-4">
                    <input type="checkbox" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <p className=" ml-4">Save Information</p>
                </div>
                <div className="mt-6">
                    <strong className="text-lg">Payment</strong>
                    <div>
                    <div className="flex items-center mt-4">
                        <input type="radio" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <p className=" ml-4">Credit card</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <p className=" ml-4">Debit card</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <p className=" ml-4">Easy Paisa</p>
                    </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Name on card</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="firstname"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Credit card number</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="lastname"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4 w-1/2">
                    <div className="w-2/4">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Expiration</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="firstname"/>
                    </div>
                    <div className="w-2/4 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">CVV</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="lastname"/>
                    </div>
                </div>
                <button className="bg-gray-600 rounded-xl p-4 w-full mt-6">
                    <span className="text-white">Continue to Checkout</span>
                </button>
            </div>
            <div>
                <div className="flex items-center justify-between px-4">
                <strong className="text-2xl">Your Cart</strong>
                <span className=" bg-gray-900 rounded-full px-2 text-white text-lg">3</span>
            </div>    
            <div className=" rounded py-2">
            <div className="divide-y divide-gray-100">
                <div className="rounded-lg flex justify-between p-4 xl:mt-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Product Name</span>
                        <span className="block font-medium text-gray-500">Brief Description</span>
                    </div>
                    <div className="text-gray-500 text-xl">$12</div>
                </div>
                <div className="rounded-lg flex justify-between p-4 xl:mt-2 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Second Product</span>
                        <span className="block font-medium text-gray-500">Brief Description</span>
                    </div>
                    <div className="text-gray-500 text-xl">$9</div>
                </div>
                <div className="rounded-lg flex justify-between p-4 xl:mt-2 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Third Product</span>
                        <span className="block font-medium text-gray-500">Brief Description</span>
                    </div>
                    <div className="text-gray-500 text-xl">$50</div>
                </div>
                <div className="rounded-lg flex justify-between p-4 xl:mt-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div>
                        <span className="block text-lg tracking-wider">Total (USD)</span>
                    </div>
                    <div className="text-gray-500 text-xl">$50</div>
                </div>
            </div>
            <div className="h-auto mt-4 xl:mt-10 py-1 px-2 rounded-xl border-2 border-gray-400">
                <div className="flex items-center justify-between">
                    <input className="focus:outline-none pl-3 w-2/3" placeholder="promo code"></input>
                    <button className="bg-gray-600 rounded-xl p-4">
                        <span className="text-white">Redeem</span>
                    </button>
                </div>
            </div>
            </div>
            </div>

            <div className="xl:hidden">
                <strong className="text-2xl">Billing Address</strong>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 pb-2">First Name</label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="firstname"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Last Name</label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="lastname"/>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Username</label>
                    <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="@username"/>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Email</label>
                    <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="you@example.com"/>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Address</label>
                    <input required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Address-2 (optional)</label>
                    <input className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        Country
                      </label>
                      <select id="country" name="country" autoComplete="country"
                        className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Pakistan</option>
                      </select>
                    </div>
                    <div className="w-1/3 ml-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        City
                      </label>
                      <select id="country" name="country" autoComplete="country"
                        className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>New York</option>
                        <option>Islamabad</option>
                      </select>
                    </div>
                    <div className="w-1/3 ml-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        Postal code
                      </label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <input type="checkbox" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <p className=" ml-4">Shipping Adress is same as billing address</p>
                </div>
                <div className="flex items-center mt-4">
                    <input type="checkbox" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <p className=" ml-4">Save Information</p>
                </div>
                <div className="mt-6">
                    <strong className="text-lg">Payment</strong>
                    <div>
                    <div className="flex items-center mt-4">
                        <input type="radio" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <p className=" ml-4">Credit card</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <p className=" ml-4">Debit card</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        <p className=" ml-4">Easy Paisa</p>
                    </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Name on card</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="firstname"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Credit card number</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="lastname"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4 w-1/2">
                    <div className="w-2/4">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Expiration</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="firstname"/>
                    </div>
                    <div className="w-2/4 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">CVV</label>
                        <input type="text" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="lastname"/>
                    </div>
                </div>
                <button className="bg-gray-600 rounded-xl p-4 w-full mt-6">
                    <span className="text-white">Continue to Checkout</span>
                </button>
            </div>
            </div>
        </div>
        </DashboardLayout>
        </>
     );
}
 
export default Checkout;