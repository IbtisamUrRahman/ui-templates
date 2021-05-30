import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import {HiOutlineInboxIn} from 'react-icons/hi';
import {RiSendPlaneLine} from 'react-icons/ri';
import {BiArchiveIn} from 'react-icons/bi';
import {AiOutlineStar, AiOutlinePaperClip} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';

const Compose = () => {
    return ( 
       <DashboardLayout>
           <div className="m-4 py-4 px-6 shadow-sm rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl tracking-wider">Hi, Welcome back</h2>
                        <p className="text-gray-500 text-lg tracking-wide">Email</p>
                    </div>
                    <div className="flex">
                        <span className="text-lg mr-3">Email</span>
                        <span className="text-lg text-gray-500 mr-3">/</span>
                        <span className="text-lg text-gray-500">Compose</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            <div>
            <div className="m-4 xl:m-2 px-6 xl:p-0 rounded-lg"> 
            <div className="border-t border-b border-gray-200 rounded-lg py-2">
            <div className="divide-y divide-gray-100">
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                        <HiOutlineInboxIn className="h-5 w-5 mr-3"/>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Inbox</span>
                    </div>
                    <div className="text-gray-500 text-xl">153</div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                        <RiSendPlaneLine className="h-5 w-5 mr-3"/> 
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Sent</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                        <AiOutlineStar className="h-5 w-5 mr-3"/>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Important</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                        <BiArchiveIn className="h-5 w-5 mr-3"/>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Draft</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                        <BsTrash className="h-5 w-5 mr-3"/>
                        <span className="block text-lg font-medium text-gray-900 tracking-wider">Trash</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
            </div>
            </div>
            </div>

            <div className="m-4 xl:m-2 px-6 xl:p-0 rounded-lg"> 
            <div className="border border-gray-200 rounded-lg ">
            <div className="divide-y divide-gray-100">
                <div className="rounded-lg flex justify-between p-4 bg-gray-100 hover:text-gray-900 hover:w-full">
                    <span className="block text-lg font-medium text-gray-900 tracking-wider">Categories</span>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                    <input type="radio" className=" mr-3 text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <span className="block text-lg font-medium text-gray-900 tracking-wider">Work</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                    <input type="radio" className=" mr-3 text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <span className="block text-lg font-medium text-gray-900 tracking-wider">Private</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                    <input type="radio" className=" mr-3 text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <span className="block text-lg font-medium text-gray-900 tracking-wider">Support</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
                <div className="rounded-lg flex justify-between p-4 hover:bg-gray-100 hover:text-gray-900 hover:w-full">
                    <div className="flex items-center">
                    <input type="radio" className=" mr-3 text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                    <span className="block text-lg font-medium text-gray-900 tracking-wider">Social</span>
                    </div>
                    <div className="text-gray-500 text-xl"></div>
                </div>
            </div>
            </div>
            </div>
            </div>

           <div className="xl:col-span-2 xl:mr-2">
            <div className="m-4 xl:m-2  px-6 xl:p-0 rounded-lg">
                <div className="w-full mt-4">
                    <input required placeholder="To:" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                <div className="w-full mt-4">
                    <input required placeholder="Subject:" className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full"/>
                </div>
                <div className="w-full mt-4">
                    <textarea rows="10" cols="30" type="text" required className="focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="Enter text here"/>
                </div>
                <div className="w-full mt-4">
                    <div className="flex items-center">
                        <AiOutlinePaperClip className="h-7 w-7 mr-2 text-gray-700"/>
                        <span className="font-medium text-lg text-gray-700">Attachments</span>
                    </div>
                    <div className="bg-gray-200 py-24 h-48 w-full mt-2 rounded-lg flex justify-center">
                        <span className=" text-gray-500">Drag files here to upload</span>
                    </div>
                </div>
            </div>
            <div className="mx-4 px-6 rounded-lg">
                <button className="bg-red-600 text-red-200 rounded-lg w-1/4 py-3 inline-block mr-4">
                    discard
                </button>
                <button className="bg-green-500 text-green-200 rounded-lg w-1/4 py-3 inline-block">
                   send
                </button>
            </div>
            </div>
</div>
       </DashboardLayout>
     );
}
 
export default Compose;