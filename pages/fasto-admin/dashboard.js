import React from 'react'
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import Footer from '../../components/Footer';
import LineChart from '../../components/chart/LineChart';
import BarChart from '../../components/chart/BarChart';
import LineChart1 from '../../components/chart/LineChart1';
import DoughnutChart1 from '../../components/chart/DoughnutChart1';
import { AiOutlineAppstore, AiOutlineCalendar, AiFillThunderbolt } from "react-icons/ai";
import { BiMessageSquareDots, BiDotsVerticalRounded } from "react-icons/bi";
import { RiContactsLine, RiPlayListAddLine } from "react-icons/ri";
import { BsPlus, BsChat } from "react-icons/bs";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";



const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 lg:gap-3 lg:mx-4 p-2">
        <div className="h-auto bg-white shadow-md mx-4 lg:mx-0 mt-2 md:mt-0 lg:mt-2">
            <div className=" flex items-center justify-between py-3 mx-3 lg:mb-2">
              <div className="w-1/2">
                 <span className="text-3xl font-medium block mt-2 mb-3 lg:mb-1">78</span>
                 <span className="block text-gray-500 font-medium text-sm">Projects Handled</span>
              </div>
              <div className="h-10 w-10 rounded bg-gray-100 flex justify-center">
                  <AiOutlineAppstore className="h-5 w-5 m-2 text-blue-900"/>  
              </div>
            </div>
            <div className="bg-gray-800 text-gray-200 pl-4 text-sm font-medium w-full px-2 py-1">
              <span  className="hover:text-blue-700 cursor-pointer">View all projects</span>
            </div>
          </div>

          <div className="h-auto bg-white shadow-md mx-4 lg:mx-0 mt-2 md:mt-0 lg:mt-2">
            <div className=" flex items-center justify-between py-3 mx-3 lg:mb-2">
              <div className="w-1/2">
                 <span className="text-3xl font-medium block mt-2 mb-3 lg:mb-1">214</span>
                 <span className="block text-gray-500 font-medium text-sm">Contacts you have</span>
              </div>
              <div className="h-10 w-10 rounded bg-gray-100 flex justify-center">
                  <RiContactsLine className="h-5 w-5 m-2 text-blue-900"/>  
              </div>
            </div>
            <div className="bg-gray-800 text-gray-200 pl-4 text-sm font-medium w-full px-2 py-1">
              <span  className="hover:text-blue-700 cursor-pointer">View all contacts</span>
            </div>
          </div>
          <div className="h-auto bg-white shadow-md mx-4 lg:mx-0 mt-2 md:mt-0 lg:mt-2">
            <div className="flex items-center justify-between py-3 mx-3 lg:mb-2">
              <div className="w-1/2">
                 <span className="text-3xl font-medium block mt-2 mb-3 lg:mb-1">15</span>
                 <span className="block text-gray-500 font-medium text-sm">Unread Messsages</span>
              </div>
              <div className="h-10 w-10 rounded bg-gray-100 flex justify-center">
                  <BiMessageSquareDots className="h-5 w-5 m-2 text-blue-900"/>  
              </div>
            </div>
            <div className="bg-gray-800 text-gray-200 pl-4 text-sm font-medium w-full px-2 py-1">
              <span className="hover:text-blue-700 cursor-pointer">View all messages</span>
            </div>
          </div>
          <div className="h-auto bg-white shadow-md mx-4 lg:mx-0 mt-2 md:mt-0 lg:mt-2">
            <div className="flex items-center justify-between py-3 mx-3 lg:mb-2">
              <div className="w-1/4">
                 <span className="text-3xl font-medium block mt-2 mb-3 lg:mb-1">03</span>
                 <span className="block text-gray-500 font-medium text-sm">Unfinished Tasks</span>
              </div>
              <div className="h-10 w-10 rounded bg-gray-100 flex justify-center">
                  <RiPlayListAddLine className="h-5 w-5 m-2 text-blue-900"/>  
              </div>
            </div>
            <div className="bg-gray-800 text-gray-200 pl-4 text-sm font-medium w-full px-2 py-1">
              <span className="hover:text-blue-700 cursor-pointer">View all tasks</span>
            </div>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-3 xl:grid-rows-3 xl:gap-2">
        <div className="h-auto bg-white shadow-md mx-6 xl:mx-0 xl:ml-6  mt-2 md:mt-6 xl:row-span-3 xl:col-span-2">
          <div className="flex items-center justify-between bg-gray-100">
            <span className="text-gray-800 font-medium text-2xl px-4 py-2">Projects created</span>
            <BiDotsVerticalRounded className="h-7 w-7 mr-4 text-gray-500"/>
          </div>
          <div className="p-4 xl:mb-48 2xl:mb-28 mt-5">
            <BarChart/>
          </div>
          <div className="w-full bg-gray-100">
            <div className="mx-4 p-6 flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                  <span className="font-medium text-xl">2.5%</span>
                </div>
                <span className="text-cneter text-gray-500 font-medium">Customer Growth</span>
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                  <span className="font-medium text-xl">3.8%</span>
                </div>
                <span className="text-cneter text-gray-500 font-medium">Page Views</span>
              </div>
              <div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                  <span className="font-medium text-xl">1.7%</span>
                </div>
                <span className="text-cneter text-gray-500 font-medium">New Products</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="h-52 bg-white md:w-auto shadow-md mx-6 xl:mr-6 mt-1 xl:mt-6 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium text-xl">New Clients</span>
            <div className="h-8 w-20 rounded bg-red-200 flex items-center">
                  <VscTriangleDown className="h-4 w-4 m-2 text-red-600"/>  
                  <span className="font-medium text-sm text-red-600">2.55%</span>
            </div>
          </div>
          chart here
        </div>

         <div className="h-52 bg-white md:w-auto shadow-md mx-6 xl:mr-6 mt-1 xl:mt-6 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium text-xl">Monthly Target</span>
            <div className="h-8 w-20 rounded bg-green-200 flex items-center">
                <VscTriangleUp className="h-4 w-4 m-2 text-green-600"/>  
                <span className="font-medium text-sm text-green-600">2.55%</span>
            </div>
          </div>
          chart here
        </div>

       
        <div className="h-52 bg-white md:w-auto shadow-md mx-6 xl:mr-6 xl:mt-6  mt-1 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium text-xl">Project Released</span>
            <div className="h-8 w-20 rounded bg-green-200 flex items-center">
                <VscTriangleUp className="h-4 w-4 m-2 text-green-600"/>  
                <span className="font-medium text-sm text-green-600">7.00%</span>
            </div>
          </div>
          <div>chart here</div>
        </div> 
        </div> 
        
        <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-4 2xl:mx-6">
        <div className="h-auto bg-white shadow-md mx-6 2xl:mx-0 mt-2 md:mt-6 ">
          <div className="md:flex md:justify-between">
          <div className="w-full flex items-center justify-between px-4 py-1 bg-gray-800">
             <span className="text-2xl font-medium text-gray-200 block tracking-wider">Recent Messages</span>
             <button class="md:w-1/4 2xl:mr-8 m-2 p-2 bg-blue-200 rounded transform hover:-translate-y-0.5">
              <span class="font-medium text-blue-800">New Message</span>
            </button>
           </div>
           
          
          </div>
          <div className=" mt-2 ">
            <div className="p-2 flex border-b border-gray-500">
              <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
              <div className="ml-3">
                <h3 className="text-gray-800 text-xl lg:text-2xl font-medium">Laura Chyan</h3>
                <span className="text-gray-800 lg:tracking-wider">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                <span className="text-gray-500 text-lg block mb-2">5m ago</span>
              </div>
            </div>
            <hr/>

            <div className="mt-2">
            <div className="p-2 flex border-b border-gray-500">
              <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
              <div className="ml-3">
                <h3 className="text-black text-xl lg:text-2xl font-semibold">Olivia Relaq</h3>
                <span className="text-black lg:tracking-wider">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                <span className="text-gray-500 text-lg block mb-2">41m ago</span>
              </div>
            </div>
            <hr/>
          </div>

          <div className="mt-2">
            <div className="p-2 flex">
              <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
              <div className="ml-3">
                <h3 className="text-black text-xl lg:text-2xl font-semibold">Keanu Tipes</h3>
                <span className="text-black lg:tracking-wider">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                <span className="text-gray-500 text-lg block mb-2">25m ago</span>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="h-auto bg-white shadow-md mx-6 mt-2 md:mt-6">
            <div className="p-4 bg-gray-800">
             <span className="text-2xl font-medium text-gray-200 block tracking-wider">Upcoming projects</span>
           </div>
           <div className="mt-3 ml-3">
           <span className="text-gray-600 md:tracking-wider text-lg md:text-2xl font-medium ml-2">Yoast Esac</span>
           <div className="flex justify-between">
              <span className="text-black ml-2 md:text-xl md:tracking-wider">Redesign Kripton Mobile App</span>
              <BiDotsVerticalRounded className="text-gray-500" size="2em"/>
           </div>
           <div className="flex items-center ml-2 mt-2 lg:my-3">
             <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4"/>
             <span className="text-gray-500">Created on Sep 8th, 2020</span>
           </div>
           <div className="flex items-center ml-2 mt-2">
             <div className="mb-3">
               <span className="text-gray-500 text-md mr-3">Deadline:</span>
               <span className="text-black text-md">Tuesday, Sep 29th 2020</span>
             </div>
           </div>
           <hr/>

           <div className="mt-3">
           <span className="text-gray-600 text-lg md:text-2xl font-medium ml-2">Yoast Esac</span>
           <div className="flex justify-between">
              <span className="text-black ml-2 md:text-xl md:tracking-wider">Building Branding Persona for Etza.id</span>
              <BiDotsVerticalRounded className="text-gray-500" size="2em"/>
           </div>
           <div className="flex items-center ml-2 mt-2 lg:my-3">
             <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4"/>
             <span className="text-gray-500 ">Created on Sep 8th, 2020</span>
           </div>
           <div className="flex items-center ml-2 mt-2">
             <div className="mb-3">
               <span className="text-gray-500 text-md mr-3">Deadline:</span>
               <span className="text-black text-md">Tuesday, Sep 29th 2020</span>
             </div>
           </div>
           <hr/>
           </div>
           <div className="mt-3">
           <span className="text-gray-600 text-lg md:text-2xl font-mediumd ml-2">Yoast Esac</span>
           <div className="flex justify-between">
              <span className="text-black ml-2 md:text-xl md:tracking-wider">Manage SEO for Eclan Company profile</span>
              <BiDotsVerticalRounded className="text-gray-500" size="2em" />
           </div>
           <div className="flex items-center ml-2 mt-2 lg:my-3">
             <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4"/>
             <span className="text-gray-500">Created on Sep 8th, 2020</span>
           </div>
           <div className="flex items-center ml-2 mt-2">
             <div className="mb-3">
               <span className="text-gray-500 text-md mr-3">Deadline:</span>
               <span className="text-black text-md">Tuesday, Sep 29th 2020</span>
             </div>
           </div>
           </div>
           </div>
        </div>
        <div className="2xl:col-span-2">
        <div className="h-auto bg-gray-800 border shadow-md mx-6 mt-2 py-2 px-4 md:mt-6">
         <div className="flex items-center justify-between">
           <div className="my-2">
             <span className="text-2xl font-medium text-gray-200 block tracking-wider"> Quick To-Do List</span>
           </div>
           <BsPlus size="2em" className="text-gray-800 rounded-sm p-1"/>
         </div>
        </div>

        <div className="xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:gap-4 xl:mx-6">
        <div className="h-42 bg-white shadow-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
          <h3 className="block md:text-2xl md:mb-2">Graphic Designer</h3>
          <span className="block md:text-lg tracking-wide">Visual Representation to Client</span>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-500">Aug 4, 2021</span>
            <div class="ml-6 flex flex-center">
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar1"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                alt="avatar2"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                alt="avatar3"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1555435024-2c4d456b63be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar4"
              />
            </span>
          </div>
          </div>
        </div>

        <div className="h-42 bg-white shadow-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
          <h3 className="block md:text-2xl md:mb-2">Database Engineer</h3>
          <span className="block md:text-lg tracking-wide">Build database for Fasto Admin</span>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-500">Aug 4, 2021</span>
            <div class="ml-6 flex flex-center">
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar1"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                alt="avatar3"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1555435024-2c4d456b63be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar4"
              />
            </span>
          </div>
          </div>
        </div>
        <div className="h-42 bg-white shadow-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
          <h3 className="block md:text-2xl md:mb-2">Digital Marketing</h3>
          <span className="block md:text-lg tracking-wide">Make promotional Ads for Instagram Fasto's</span>

          <div className="mt-4 flex items-center justify-between mb-2">
            <span className="text-gray-500">Aug 4, 2021</span>
            <div class="ml-6 flex flex-center">
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar1"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                alt="avatar2"
              />
            </span>
          </div>
          </div>
          <hr/>
          <div className="flex items-center mt-3">
            <BsChat className="text-gray-500 mr-4"/>
            <span className="text-gray-500">2 comments</span>
          </div>
        </div>
        <div className="h-42 bg-white shadow-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
          <h3 className="block md:text-2xl md:mb-2">Database Engineer</h3>
          <span className="block md:text-lg tracking-wide">Build database for Fasto Admin</span>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-500">Aug 4, 2021</span>
            <div class="ml-6 flex flex-center">
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar1"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                alt="avatar3"
              />
            </span>
            <span class="-ml-2 rounded-full border-2 border-white">
              <img
                class="h-6 w-6 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1555435024-2c4d456b63be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="avatar4"
              />
            </span>
          </div>
          </div>
        </div>
        
        </div>
        </div>
        </div>
        
        <Footer/>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Dashboard;
