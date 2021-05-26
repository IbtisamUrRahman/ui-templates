import React from 'react'
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import { BsDot, BsPlus } from "react-icons/bs";
import { BiMessageDots, BiDotsVerticalRounded, BiImage  } from "react-icons/bi";
import { AiOutlineSearch, AiOutlinePaperClip } from "react-icons/ai";
const Messages = () => {
    return ( 
        <>
        <DashboardLayout>
            <div className="xl:grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-3 xl:gap-1 xl:m-2">
            <div className="xl:col-span-1 flex items-center justify-between h-auto xl:h-24 m-4 xl:m-2 px-6 py-4 shadow-md rounded-md border border-gray-200">
                <div className="flex">
                <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div>
                    <h3 className="text-lg font-semibold tracking-wider">Peter Parkur</h3>
                    <div className="flex items-center -mt-1">
                      <BsDot className="h-8 w-8 text-gray-500 -ml-3"/>
                      <span className="text-gray-500 font-semibold -ml-1">Available</span>
                    </div>
                </div>
                </div>
                <button className="bg-gradient-to-r from-gray-500 to-gray-600 p-1 rounded-lg">
                  <div className="flex items-center px-2">
                    <BiMessageDots className="text-white mr-2"/>
                    <BsPlus className="text-white"/>
                    <span className="text-white">New</span>
                  </div>
                 </button> 
            </div>

            <div className="h-auto m-4 xl:m-2 px-6 py-4 mt-3 xl:-mt-28 shadow-md rounded-md border border-gray-200 xl:row-span-2">
                <div className="flex mb-4">
                    <a><span className="font-medium text-black mr-4">All Messages</span></a>
                    <a><span className="font-medium text-gray-400 mr-4">Unread</span></a>
                    <a><span className="font-medium text-gray-400">Archived</span></a>
                </div>
                <div className="flex justify-between mt-4 px-4 py-2 border border-gray-300 rounded-full ">
                    <input className="text-gray-400 w-2/3" placeholder="Search from people and groups"></input>
                    <AiOutlineSearch className="h-6 w-6 text-gray-400"/>
                </div>
                <div className="flex my-4">
                <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Olivia Rellaq</span>
                         <span className="text-gray-500">Just Now</span>
                    </div>
                    <p className="text-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text is ever since the 1500s.</p>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Roberto Carloz</span>
                         <span className="text-gray-500">5m ago</span>
                    </div>
                    <p className="text-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Laura Chyan</span>
                         <span className="text-gray-500">1 hour ago</span>
                    </div>
                    <p className="text-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Keanu Tipes</span>
                         <span className="text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-light text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </div>
            </div>
            <div className="h-auto m-4 xl:m-2 px-6 py-4 shadow-md rounded-md border border-gray-200 xl:row-span-3">
                    <div className="flex justify-between mb-3">
                        <span className="text-lg font-semibold">Roberto Carloz</span>
                        <div className="flex">
                            <span className="text-gray-500 mr-3">Last seen 4:23 AM</span>
                            <BiDotsVerticalRounded className="h-8 w-8 text-gray-500" />
                        </div>
                    </div>
                    <hr/>

                    <div className="my-8">
                    <div className="flex justify-start mt-6">
                        <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-gray-200 w-64 px-4 py-2 rounded-xl">
                            <span className=" text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                    <div className="flex justify-start flex-row-reverse mt-6">
                        <img className="h-14 w-14 rounded-full object-cover ml-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-indigo-500 w-64 px-4 py-2 rounded-xl">
                            <span className=" text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                    <div className="flex justify-start mt-6">
                        <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-gray-200 w-64 px-4 py-2 rounded-xl">
                            <span className=" text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                    <div className="flex justify-start flex-row-reverse mt-6">
                        <img className="h-14 w-14 rounded-full object-cover ml-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-indigo-500 w-64 px-4 py-2 rounded-xl">
                            <span className=" text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                    </div>

                    <div className="h-auto mt-4 py-4 px-6 rounded-xl border-2 border-gray-400">
                        <div className="flex justify-between">
                            <input className="focus:outline-none" placeholder="Type message..."></input>
                            <div className="flex items-center">
                                <AiOutlinePaperClip className="h-6 w-6 mr-2 text-gray-500"/>
                                <BiImage className="h-6 w-6 mr-2 text-gray-500"/>
                                <button className="bg-gray-600 rounded-xl p-4">
                                    <span className="text-white">SEND</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        </DashboardLayout>
        </>
     );
}
 
export default Messages;