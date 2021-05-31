import React from 'react';
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import {SiGmail, SiMicrosoftoffice} from 'react-icons/si';
import {ImGoogleDrive} from 'react-icons/im';


const formWizard = () => {
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
                <strong className="text-2xl font-medium">Form Step</strong>
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
                <div className="flex items-center justify-between"> 
                <div className="w-1/2 mt-4">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Email Address</label>
                    <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="@username"/>
                </div>
                <div className="w-1/2 mt-4 ml-3">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Phone Number</label>
                    <input  required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="+92 333 1234567"/>
                </div>
                </div>
                <div className="mt-4">
                     <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">
                        Where are you from
                      </label>
                      <select id="country" name="country" autoComplete="country"
                        className=" mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm sm:text-sm"
                      >
                        <option>New York</option>
                        <option>Islamabad</option>
                      </select>
                </div>
                <div className="flex items-center justify-end">
                <button className="bg-gray-600 rounded px-2 py-1 mt-6">
                    <span className="text-white font-medium">Previous</span>
                </button>
                <button className="bg-gray-600 rounded px-2 py-1 mt-6 ml-3">
                    <span className="text-white font-medium">Next</span>
                </button>
                </div>
                 {/* steps starts here */}

                 <div class="flex justify-center flex-wrap my-6">
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-gray-500 text-gray-500 tracking-wider rounded-t">
        1
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         2
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         3
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         4
      </a>
    </div>
    {/* steps end here */}
    </div>

                {/* from step-2 */}
        <div className="m-4 px-6 rounded-lg">
                <strong className="text-2xl font-medium">Form Step-2</strong>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Company Name</label>
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="company name"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="block text-sm font-medium text-gray-700 pb-2">Email Address</label>
                        <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="@username"/>
                </div>
                </div>
                <div className="flex items-center justify-between"> 
                <div className="w-1/2 mt-4 ml-3">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Phone Number</label>
                    <input  required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="+92 333 1234567"/>
                </div>
                <div className="w-1/2 mt-4 ml-3">
                    <label className="block text-sm font-medium text-gray-700 pb-2">Your position in company</label>
                    <input  required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                </div>
                <div className="flex items-center justify-end">
                <button className="bg-gray-600 rounded px-2 py-1 mt-6">
                    <span className="text-white font-medium">Previous</span>
                </button>
                <button className="bg-gray-600 rounded px-2 py-1 mt-6 ml-3">
                    <span className="text-white font-medium">Next</span>
                </button>
                </div>
                 {/* steps starts here */}

                 <div class="flex justify-center flex-wrap my-6">
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         1
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-gray-500 text-gray-500 tracking-wider rounded-t">
        2
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         3
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         4
      </a>
    </div>
    {/* steps end here */}
                </div>

                 {/* from step-3 */}
        <div className="m-4 px-6 rounded-lg">
                <strong className="text-2xl font-medium">Form Step-3</strong>
                <div className="flex items-center justify-between mt-4">
                <h1 className="font-medium text-2xl tracking-wider w-1/4">Monday</h1>
                    <div className="flex w-3/4">
                    <div className="w-1/2">
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="0.9"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="6.00"/>
                   </div>
                   </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                <h1 className="font-medium text-2xl tracking-wider w-1/4">Tuesday</h1>
                    <div className="flex w-3/4">
                    <div className="w-1/2">
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="0.9"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="6.00"/>
                   </div>
                   </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                <h1 className="font-medium text-2xl tracking-wider w-1/4">Wednesday</h1>
                    <div className="flex w-3/4">
                    <div className="w-1/2">
                        <input type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="0.9"/>
                    </div>
                    <div className="w-1/2 ml-3">
                        <input type="email" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="6.00"/>
                   </div>
                   </div>
                </div>
                <div className="flex items-center justify-end">
                <button className="bg-gray-600 rounded px-2 py-1 mt-6">
                    <span className="text-white font-medium">Previous</span>
                </button>
                <button className="bg-gray-600 rounded px-2 py-1 mt-6 ml-3">
                    <span className="text-white font-medium">Next</span>
                </button>
                </div>
                 {/* steps starts here */}

                 <div class="flex justify-center flex-wrap my-6">
     
     
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         1
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         2
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-gray-500 text-gray-500 tracking-wider rounded-t">
        3
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
         4
      </a>
    </div>
    {/* steps end here */}
                </div>
         
            <div className="m-4 px-6 rounded-lg">
              <strong className="text-2xl font-medium">Form Step-4</strong>
                <div className="grid grid-cols-3 gap-5 mt-4">
                  <div class="mx-auto flex-shrink-0 w-32 h-32 rounded-full bg-gray-500 px-2 py-10 text-white relative z-10">
                    <SiGmail className="mx-auto"/>
                    <span className="text-center text-xs block mt-2">I am using Gmail</span>
                   </div>
                   <div class="mx-auto flex-shrink-0 w-32 h-32 rounded-full bg-gray-500 px-2 py-10 text-white relative z-10">
                    <SiMicrosoftoffice className="mx-auto"/>
                    <span className="text-center text-xs block mt-2">I am using MS office</span>
                   </div>
                   <div class="mx-auto flex-shrink-0 w-32 h-32 rounded-full bg-gray-500 px-2 py-10 text-white relative z-10">
                    <ImGoogleDrive className="mx-auto"/>
                    <span className="text-center text-xs block mt-2">I am using Google Drive</span>
                   </div>
                </div>
                <div className="flex justify-end">
                <button className="bg-gray-600 rounded px-2 py-1 mt-6">
                    <span className="text-white font-medium">Previous</span>
                </button>
                </div>
                <div class="flex justify-center flex-wrap my-6">
     
     <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        1
     </a>
     <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        2
     </a>
     
     <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        3
     </a>
     <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-gray-500 text-gray-500 tracking-wider rounded-t">
       4
     </a>
   </div>
   
          </div>
        </DashboardLayout>
        </>
     );
}
 
export default formWizard;