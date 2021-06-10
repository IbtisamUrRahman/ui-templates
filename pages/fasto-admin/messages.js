import React from 'react'
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import {BsGear, BsChatSquare } from "react-icons/bs";
import { BiImage, BiSun } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoArchiveOutline, IoMailUnreadOutline, IoImageOutline } from "react-icons/io5";
import { AiOutlineSearch, AiOutlinePaperClip, AiOutlineUserAdd, AiOutlineVideoCamera } from "react-icons/ai";
const Messages = () => {
    return ( 
        <>
        <DashboardLayout>
            <div className="bg-gray-100 3xl:px-4 h-screen font-body">
            <div className="xl:grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-3 2xl:grid-cols-3 xl:gap-1 xl:m-2">
            <div className="bg-white xl:col-span-1  h-auto xl:h-40 m-4 xl:m-2 px-6 py-4 shadow-md rounded-md border border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                <div className="flex items-center">
                    <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI5fHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"></img>
                    <div class="w-4 h-4 -ml-2 mt-6 border-2 border-white rounded-full bg-green-500 flex-shrink-0"> </div>
                </div>
                <div className="xl:ml-3 ">
                    <h3 className="text-xl font-medium tracking-wide">Jay Palfrey</h3>
                    <span className="text-gray-500 font-medium text-sm">Web Developer</span>
                </div>
                </div>
                <BsGear className="h-5 w-5 text-gray-800"/> 
                 </div>
                 <div className="flex justify-between mt-4 px-4 py-2 border border-gray-300">
                    <input className="text-gray-400 focus:outline-none w-2/3" placeholder="Search from people and groups"></input>
                    <AiOutlineSearch className="h-6 w-6 text-gray-400"/>
                </div>
            </div>

            <div className="bg-white h-auto m-4 xl:m-2 xl:-mt-4  py-4 mt-3 shadow-md rounded-md overflow-y-auto border border-gray-200 xl:row-span-2">
                <div className="flex mb-4 px-6">
                    <div className="flex items-center mr-8 border-r border-gray-500">
                        <BsChatSquare className="text-indigo-500 h-4 w-4 mr-2"/>
                        <a><span className="font-medium text-indigo-500 mr-4">Chats</span></a>
                    </div>
                    <div className="flex items-center mr-8 border-r border-gray-500">
                        <IoMailUnreadOutline className="text-gray-800 h-5 w-5 mr-2"/>
                        <a><span className="font-medium text-gray-800 mr-4">Unread</span></a>
                    </div>
                    <div className="flex items-center mr-8">
                        <IoArchiveOutline className="text-gray-800 h-5 w-5 mr-2"/>
                        <a><span className="font-medium text-gray-800 mr-4">Archived</span></a>
                    </div>                    
                </div>
                <div>
                    <span className="text-gray-800 px-6">Recent Chats</span>
                </div>
                <div className="mt-4 h-72 overflow-y-auto px-6">
                <div className="flex my-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1542962302-7019cec5ae21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1 border-b border-gray-200">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Olivia Rellaq</span>
                         <span className="text-gray-500 text-xs">Just Now</span>
                    </div>
                    <div className="flex items-start justify-between mb-2">
                        <p className="text-gray-500 text-sm">Hey! What's up ?</p>
                        <div class="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 inline-flex items-center justify-center text-white text-xs relative z-10">3 </div>
                    </div>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1 border-b border-gray-200">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Roberto Carloz</span>
                         <span className="text-gray-500 text-xs">5m ago</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-start">
                            <IoImageOutline className="h-4 w-4 mr-2 text-gray-800"/>
                            <p className="text-sm text-gray-500 ">Photo</p>
                        </div>
                        <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-800 inline-flex items-center justify-center text-white text-xs relative z-10">5</div>
                    </div>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1470441623172-c47235e287ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA1fHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1 border-b border-gray-200">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Laura Chyan</span>
                         <span className="text-gray-500 text-xs">27 minutes ago</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">I'll drop in tomorrow.</p>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1525357816819-392d2380d821?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1 border-b border-gray-200">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Keanu Tipes</span>
                         <span className="text-gray-500 text-xs">2 hours ago</span>
                    </div>
                    <p className="text-light text-gray-500 mb-2">Let me know when you wil arrive.</p>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1 border-b border-gray-200">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Paul Lington</span>
                         <span className="text-gray-500 text-xs">Yesterday</span>
                    </div>
                    <p className="text-light text-gray-500 mb-2">Good Bye</p>
                </div>
                </div>
                <div className="flex my-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex-1 border-b border-gray-200">
                    <div className="flex justify-between">
                         <span className="font-medium text-black">Roberto Carloz</span>
                         <span className="text-gray-500 text-xs">5m ago</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-start">
                            <IoImageOutline className="h-4 w-4 mr-2 text-gray-800"/>
                            <p className="text-sm text-gray-500 ">Photo</p>
                        </div>
                        <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-800 inline-flex items-center justify-center text-white text-xs relative z-10">5</div>
                    </div>
                </div>
                </div>
                </div>
              </div> 
            
            <div className="bg-white h-auto m-4 xl:m-2 py-4 shadow-md rounded-md border border-gray-200 xl:row-span-3 2xl:col-span-2">
            <div className="flex items-center justify-between mb-3 px-6">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1549492864-2ec7d66ffb04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div class="w-4 h-4 -ml-2 mt-6 border-2 border-white rounded-full bg-green-500 flex-shrink-0"> </div>
                    </div>
                    <div className="xl:ml-3 ">
                        <h3 className="text-xl font-medium tracking-wide">Jennifer Elliot</h3>
                        <span className="text-gray-500 font-medium text-sm">Software Engineer</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <AiOutlineVideoCamera className="h-5 w-5 text-gray-600 mr-5"/>
                    <FiPhoneCall className="h-5 w-5 text-gray-600 mr-5"/>
                    <AiOutlineUserAdd className="h-5 w-5 text-gray-600"/>
                </div>
                 </div>
                    <hr/>
                    <div className="h-96 overflow-y-auto px-6">
                    <div className="flex justify-start mt-6">
                        <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-gray-100 w-3/4 px-4 py-2 rounded-xl">
                            <span className=" text-gray-800 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                        </div>
                    </div>
                    <div className="flex justify-start flex-row-reverse mt-7">
                        <img className="h-14 w-14 rounded-full object-cover ml-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-green-50 w-3/4 px-4 py-2 rounded-xl">
                            <span className=" text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                    <div className="flex justify-start mt-7">
                        <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-gray-100 w-3/4 px-4 py-2 rounded-xl">
                            <span className=" text-gray-800 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text.</span>
                        </div>
                    </div>
                    <div className="flex justify-start flex-row-reverse mt-7">
                        <img className="h-14 w-14 rounded-full object-cover ml-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-green-50 w-3/4 px-4 py-2 rounded-xl">
                            <span className=" text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                    <div className="flex justify-start mt-7">
                        <img className="h-14 w-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="bg-gray-100 w-3/4 px-4 py-2 rounded-xl">
                            <span className=" text-gray-800 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                        </div>
                    </div>
                    </div>

                    <div className="h-14 mt-4 py-4 flex items-center justify-between px-6">
                        <div className="flex justify-between py-4 px-3  rounded-sm border border-gray-300 w-11/12">
                            <input className="focus:outline-none" placeholder="Type message..."></input>
                            <div className="flex items-center">
                                <AiOutlinePaperClip className="h-6 w-6 mr-2 text-gray-500"/>
                                <BiImage className="h-6 w-6 mr-2 text-gray-500"/>
                                <BiSun className="h-6 w-6 mr-2 text-gray-500"/>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ml-4 w-24 h-14 rounded-md bg-indigo-500 border border-gray-300 inline-flex items-center justify-center text-white relative z-10">
                            <RiSendPlaneFill className="h-7 w-7 mr-2"/>
                            <span className="uppercase font-medium mr-2">send</span>
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