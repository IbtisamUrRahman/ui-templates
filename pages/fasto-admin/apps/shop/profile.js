import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import {  BiImage,BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePaperClip, AiTwotoneHeart } from "react-icons/ai";
import { FaReply } from "react-icons/fa";


const Profile = () => {
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
                        <span className="text-lg mr-3">Apps</span>
                        <span className="text-lg text-gray-500 mr-3">/</span>
                        <span className="text-lg text-gray-500">Profile</span>
                    </div>
                </div>
            </div>
            <div className="h-auto m-4 py-4 px-6 border border-gray-300  rounded-lg shadow-md">
                <img className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1610912591861-4ea5fae8f804?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJ1aWxkaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div className="flex">
                    <img className="h-24 w-24 object-cover rounded-full ml-4 -mt-8" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2ZpbGUlMjBwaWN0dXJlJTIwbWVufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"></img>
                    <div className="flex items-center">
                        <div className="mx-5 my-3">
                            <span className="block text-lg font-semibold tracking-wider">Mitchell Shay</span>
                            <span className="block text-sm text-gray-500">UX / UI Designer</span>
                        </div>
                        <div className="mx-5 my-3">
                            <span className="block text-lg font-semibold tracking-wider">Info@example.com</span>
                            <span className="block text-sm text-gray-500">Email</span>
                        </div>
                        <BiDotsVerticalRounded className="h-7 w-7 text-gray-500 mx-5 my-3"/>
                    </div>
                </div>
            </div>

            <div className="xl:grid xl:grid-rows-4 xl:grid-cols-2 xl:gap-2">
            <div className="h-auto xl:h-40 m-4  py-4 px-6 border border-gray-300 rounded-lg shadow-md">
                <div className="flex justify-around">
                    <div className="">
                        <span className="block text-xl font-semibold  tracking-wider text-center">150</span>
                        <span className="block text-gray-500">Follower</span>
                    </div>
                    <div className="">
                        <span className="block text-xl font-semibold tracking-wider text-center">140</span>
                        <span className="block text-gray-500">People Stay</span>
                    </div>
                    <div className="">
                        <span className="block text-xl font-semibold tracking-wider text-center">45</span>
                        <span className="block text-gray-500">Reviews</span>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-gray-300 px-4 py-1 rounded-full mr-2"><span className="text-black">Follow</span></button>
                    <button className="bg-gray-300 px-4 py-1 rounded-full"><span className="text-black">Send Message</span></button>
                </div>
            </div>

            <div className="h-auto m-4 py-4 px-6 border border-gray-300 rounded-lg shadow-md hidden xl:block xl:row-span-4">
                <div className="flex mb-6">
                    <span className="text-lg font-semibold text-gray-500 border-b-2 border-gray-400 ml-4">Posts</span>
                    <span className="text-lg font-semibold text-gray-500 ml-12">About Me</span>
                    <span className="text-lg font-semibold text-gray-500 ml-12">Settings</span>
                </div>
                <div className="h-auto mt-4 py-2 px-4 rounded-xl border-2 border-gray-400">
                        <div className="flex justify-between">
                            <input className="focus:outline-none" placeholder="Type what you want"></input>
                            <div className="flex items-center">
                                <AiOutlinePaperClip className="h-5 w-5 mr-2 text-gray-500"/>
                                <BiImage className="h-5 w-5 mr-2 text-gray-500"/>
                                <button className="bg-gray-600 rounded-xl px-2 py-1">
                                    <span className="text-white text-sm">Post</span>
                                </button>
                            </div>
                        </div>
                </div>
                <div className="my-5">
                <img className="w-full h-48 rounded object-cover my-2" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h1 className="text-2xl font-semibold my-2">Collection of textile samples</h1>
                <p className="text-gray-500 leading-relaxed my-2">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                <div className="flex">
                    <button className="bg-gray-600 rounded-xl px-3 py-1 mr-4 flex items-center">
                        <AiTwotoneHeart className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Like</span>
                    </button>
                    <button className="bg-gray-600 rounded-xl px-3 py-1 flex items-center">
                        <FaReply className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Reply</span>
                    </button>
                </div>
                </div>
                <div className="my-7">
                <img className="w-full h-48 rounded object-cover my-2" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h1 className="text-2xl font-semibold my-2">Collection of textile samples</h1>
                <p className="text-gray-500 leading-relaxed my-2">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                <div className="flex">
                    <button className="bg-gray-600 rounded-xl px-3 py-1 mr-4 flex items-center">
                        <AiTwotoneHeart className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Like</span>
                    </button>
                    <button className="bg-gray-600 rounded-xl px-3 py-1 flex items-center">
                        <FaReply className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Reply</span>
                    </button>
                </div>
                </div>
                <div className="my-7">
                <img className="w-full h-48 rounded object-cover my-2" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h1 className="text-2xl font-semibold my-2">Collection of textile samples</h1>
                <p className="text-gray-500 leading-relaxed my-2">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                <div className="flex">
                    <button className="bg-gray-600 rounded-xl px-3 py-1 mr-4 flex items-center">
                        <AiTwotoneHeart className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Like</span>
                    </button>
                    <button className="bg-gray-600 rounded-xl px-3 py-1 flex items-center">
                        <FaReply className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Reply</span>
                    </button>
                </div>
                </div>
            </div>
            
            <div className="h-auto m-4 py-4 px-6 border border-gray-300 rounded-lg shadow-md xl:-mt-36">
                <h2 className="font-semibold text-2xl tracking-wider mb-4">Today Highlights</h2>
                <img className="w-full h-72 object-cover mb-4" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h2 className="font-semibold text-2xl tracking-wider mb-2">Darwin Creative Agency</h2>
                <p className="leading-normal text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>

            
            <div className="h-auto xl:h-72 m-4 py-4 px-6 border border-gray-300 rounded-lg shadow-md xl:mt-4">
                <h2 className="font-semibold text-2xl tracking-wider mb-4">Interests</h2>
                <div className="grid grid-cols-3 gap-2">
                     <img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                     <img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                     <img className="w-full h-24 object-cover" src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                     <img className="w-full h-24 object-cover" src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <img className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                </div>
            </div>

            <div className="h-auto xl:h-72 m-4 py-4 px-6 border border-gray-300 rounded-lg shadow-md xl:-mt-6">
                 <h2 className="font-semibold text-2xl tracking-wider mb-4">Latest News</h2>
                 <div className="flex items-center mb-4">
                     <img className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1508243529287-e21914733111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBwaWN0dXJlJTIwbWVufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                     <div className="ml-6">
                         <span className="text-lg font-semibold">Collection of Textile Samples</span>
                         <p className="text-gray-500 tracking-wide">I shared this on my facebook months back.</p>
                     </div>
                 </div>
                 <div className="flex items-center mb-4">
                     <img className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1508243529287-e21914733111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBwaWN0dXJlJTIwbWVufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                     <div className="ml-6">
                         <span className="text-lg font-semibold">Collection of Textile Samples</span>
                         <p className="text-gray-500 tracking-wide">I shared this on my facebook months back.</p>
                     </div>
                 </div>
                 <div className="flex items-center mb-4">
                     <img className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1508243529287-e21914733111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBwaWN0dXJlJTIwbWVufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                     <div className="ml-6">
                         <span className="text-lg font-semibold">Collection of Textile Samples</span>
                         <p className="text-gray-500 tracking-wide">I shared this on my facebook months back.</p>
                     </div>
                 </div>
            </div>
            <div className="h-auto m-4 py-4 px-6 border border-gray-300 rounded-lg shadow-md xl:hidden">
                <div className="flex mb-6">
                    <span className="text-lg font-semibold text-gray-500 border-b-2 border-gray-400 ml-4">Posts</span>
                    <span className="text-lg font-semibold text-gray-500 ml-12">About Me</span>
                    <span className="text-lg font-semibold text-gray-500 ml-12">Settings</span>
                </div>
                <div className="h-auto mt-4 py-2 px-4 rounded-xl border-2 border-gray-400">
                        <div className="flex justify-between">
                            <input className="focus:outline-none" placeholder="Type what you want"></input>
                            <div className="flex items-center">
                                <AiOutlinePaperClip className="h-5 w-5 mr-2 text-gray-500"/>
                                <BiImage className="h-5 w-5 mr-2 text-gray-500"/>
                                <button className="bg-gray-600 rounded-xl px-2 py-1">
                                    <span className="text-white text-sm">Post</span>
                                </button>
                            </div>
                        </div>
                </div>
                <div className="my-5">
                <img className="w-full h-48 rounded object-cover my-2" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h1 className="text-2xl font-semibold my-2">Collection of textile samples</h1>
                <p className="text-gray-500 leading-relaxed my-2">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                <div className="flex">
                    <button className="bg-gray-600 rounded-xl px-3 py-1 mr-4 flex items-center">
                        <AiTwotoneHeart className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Like</span>
                    </button>
                    <button className="bg-gray-600 rounded-xl px-3 py-1 flex items-center">
                        <FaReply className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Reply</span>
                    </button>
                </div>
                </div>
                <div className="my-7">
                <img className="w-full h-48 rounded object-cover my-2" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h1 className="text-2xl font-semibold my-2">Collection of textile samples</h1>
                <p className="text-gray-500 leading-relaxed my-2">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                <div className="flex">
                    <button className="bg-gray-600 rounded-xl px-3 py-1 mr-4 flex items-center">
                        <AiTwotoneHeart className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Like</span>
                    </button>
                    <button className="bg-gray-600 rounded-xl px-3 py-1 flex items-center">
                        <FaReply className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Reply</span>
                    </button>
                </div>
                </div>
                <div className="my-7">
                <img className="w-full h-48 rounded object-cover my-2" src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <h1 className="text-2xl font-semibold my-2">Collection of textile samples</h1>
                <p className="text-gray-500 leading-relaxed my-2">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                <div className="flex">
                    <button className="bg-gray-600 rounded-xl px-3 py-1 mr-4 flex items-center">
                        <AiTwotoneHeart className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Like</span>
                    </button>
                    <button className="bg-gray-600 rounded-xl px-3 py-1 flex items-center">
                        <FaReply className="text-white h-3 w-3 mr-2"/>
                        <span className="text-white text-sm">Reply</span>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </DashboardLayout>
        </>
     );
}
 
export default Profile;