import React from 'react'
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import LineChart from '../../components/chart/LineChart';
import BarChart from '../../components/chart/BarChart';
import LineChart1 from '../../components/chart/LineChart1';
import DoughnutChart1 from '../../components/chart/DoughnutChart1';
import { AiOutlineAppstore, AiOutlineCalendar, AiFillThunderbolt } from "react-icons/ai";
import { BiMessageSquareDots, BiDotsVerticalRounded } from "react-icons/bi";
import { RiContactsLine, RiPlayListAddLine } from "react-icons/ri";
import { BsFillTriangleFill, BsPlus, BsChat } from "react-icons/bs";
import { VscTriangleDown } from "react-icons/vsc";



const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 lg:gap-3 lg:mx-4 p-2">
        <div className="h-auto border border-gray-300 border-l-8 shadow-md rounded-md mx-4 lg:mx-0 mt-2 md:mt-0 lg:mt-2">
            <div className="flex items-center justify-between mx-3 lg:mb-2">
              <div>
                 <span className="text-3xl font-bold block mt-2 mb-3 lg:mb-1">78</span>
                 <span className="block text-gray-500">Projects Handled</span>
              </div>
                <AiOutlineAppstore size="2em"/>  
            </div>
          </div>

          <div className="h-auto border border-gray-300 border-l-8 shadow-md rounded-md mx-4 lg:mx-0 mt-2 md:mt-0 lg:mt-2">
            <div className="flex items-center justify-between mx-3 lg:mb-2">
              <div>
                 <span className="text-3xl font-bold block mt-2 mb-3 lg:mb-1">214</span>
                 <span className="block text-gray-500">Contacts You Have</span>
              </div>
                <RiContactsLine size="2em"/>  
            </div>
          </div>

          <div className="h-auto border border-gray-300 border-l-8 shadow-md rounded-md mx-4 lg:mx-0 mt-2">
            <div className="flex items-center justify-between mx-3">
              <div>
                 <span className="text-3xl font-bold block mt-2 mb-3 lg:mb-1">93</span>
                 <span className="block text-gray-500">Unfinished Task</span>
              </div>
                <RiPlayListAddLine size="2em"/>  
            </div>
          </div>

          <div className="h-auto border border-gray-300 border-l-8 shadow-md rounded-md mx-4 lg:mx-0 mt-2">
            <div className="flex items-center justify-between mx-3">
              <div>
                 <span className="text-3xl font-bold block mt-2 mb-3 lg:mb-1">12</span>
                 <span className="block text-gray-500">Unread Messages</span>
              </div>
                <BiMessageSquareDots size="2em"/>  
            </div>
          </div>
        </div>

        <div className="h-auto border border-gray-300 shadow-md rounded-md mx-6 mt-2 p-4 md:mt-6">
          <div className="flex items-center justify-between my-3">
            <span className="text-black font-semibold text-3xl lg:mb-2">Project Created</span>
            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
          </div>
          <div className="flex items-baseline">
            <span className="text-black font-bold text-5xl mr-6">25%</span>
            <BsFillTriangleFill className="mr-4 h-7 w-7"/>
            <span className="text-lg text-gray-500">last month $563,443</span>
          </div>
          <div >
            <BarChart/>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-6 md:mt-6 md:mx-6">
        <div className="h-72 md:w-auto border border-gray-300 shadow-md rounded-md mx-6 md:mx-0 mt-1 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-black font-semibold text-xl">New Clients</span>
            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
          </div>
          <div><LineChart1/></div>
        </div>
         <div className="h-72 md:w-auto border border-gray-300 shadow-md rounded-md mx-6 md:mx-0 mt-1 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-black font-semibold text-xl">Monthly Target</span>
            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
          </div>
          <div> 
            <DoughnutChart1/>
            
            {/* <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
              <div class="w-full h-full bg-gray-200 absolute"></div>
              <div class="h-full bg-green-500 absolute w-1/2"></div>
            </div> */}
          </div>
        </div>

        <div className="h-auto md:w-auto border border-gray-300 shadow-md rounded-md mx-6 md:mx-0 mt-1 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-black font-semibold text-xl">Project Released</span>
            <div className="flex items-center"> 
              <VscTriangleDown className="h-7 w-7 mr-3 text-gray-500"/>
              <h1 className="font-bold text-4xl">7 %</h1>
            </div>
          </div>
          <div>chart here</div>
        </div>  

        <div className="h-auto md:w-auto border border-gray-300 shadow-md rounded-md mx-6 md:mx-0 mt-1 py-2 px-4">
          <div className="flex items-center justify-between">
            <span className="text-black font-semibold text-xl">Monthly Target</span>
            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
          </div>
          <div>chart here</div>
        </div>
        </div>
        

        <div className="h-auto border border-gray-300 shadow-md rounded-md mx-6 mt-2 py-2 px-4 md:mt-6 ">
          <div className="md:flex md:justify-between">
          <span className="block text-black text-2xl lg:text-3xl font-semibold tracking-wide p-2">Recent Messages</span>
          <button className="bg-gradient-to-r from-gray-500 to-gray-600 p-2 ml-2 mt-1 rounded-lg">
            <div className="flex items-center px-2">
              <BsPlus className="text-white mr-1"/>
              <span className="text-white">New Messages</span>
            </div>
          </button>
          </div>
          <div className="p-2 mt-2">
            <div className="flex">
              <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
              <div className="ml-3">
                <h3 className="text-black text-xl lg:text-2xl font-semibold">Laura Chyan</h3>
                <span className="text-black lg:tracking-wider">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                <span className="text-gray-500 text-lg block mb-2">5m ago</span>
              </div>
            </div>
            <hr/>

            <div className="p-2 mt-2">
            <div className="flex">
              <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
              <div className="ml-3">
                <h3 className="text-black text-xl lg:text-2xl font-semibold">Olivia Relaq</h3>
                <span className="text-black lg:tracking-wider">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                <span className="text-gray-500 text-lg block mb-2">41m ago</span>
              </div>
            </div>
            <hr/>
          </div>

          <div className="p-2 mt-2">
            <div className="flex">
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

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 lg:grid-flow-col lg:auto-cols-min lg:auto-rows-min lg:gap-y-0 lg:grid-rows-4 lg:mx-6">
        <div className="h-auto border border-gray-300 shadow-md rounded-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-6 lg:row-span-full">
           <span className="block text-black text-2xl md:text-3xl font-semibold tracking-wide p-2 mb-2">Upcoming Projects</span>
           <span className="text-gray-600 text-xl md:text-3xl md:tracking-wider font-semibold ml-2">Yoast Esac</span>
           <div className="flex justify-between">
              <span className="text-black ml-2 md:text-xl md:tracking-wider">Redesign Kripton Mobile App</span>
              <BiDotsVerticalRounded className="text-gray-500" size="2em"/>
           </div>
           <div className="flex items-center ml-2 mt-2 lg:my-3">
             <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4"/>
             <span className="text-gray-500">Created on Sep 8th, 2020</span>
           </div>
           <div className="flex items-center ml-2 mt-2">
             <AiFillThunderbolt className="h-8 w-8 text-gray-600 rounded-full"/>
             <div className="ml-6 mb-3">
               <span className="text-gray-500 block text-md">Deadline</span>
               <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
             </div>
           </div>
           <hr/>

           <div className="mt-3">
           <span className="text-gray-600 text-xl md:text-3xl font-semibold ml-2">Yoast Esac</span>
           <div className="flex justify-between">
              <span className="text-black ml-2 md:text-xl md:tracking-wider">Building Branding Persona for Etza.id</span>
              <BiDotsVerticalRounded className="text-gray-500" size="2em"/>
           </div>
           <div className="flex items-center ml-2 mt-2 lg:my-3">
             <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4"/>
             <span className="text-gray-500 ">Created on Sep 8th, 2020</span>
           </div>
           <div className="flex items-center ml-2 mt-2">
             <AiFillThunderbolt className="h-8 w-8 text-gray-600 rounded-full"/>
             <div className="ml-6 mb-3">
               <span className="text-gray-500 block text-md">Deadline</span>
               <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
             </div>
           </div>
           <hr/>
           </div>
           <div className="mt-3">
           <span className="text-gray-600 text-xl md:text-3xl font-semibold ml-2">Yoast Esac</span>
           <div className="flex justify-between">
              <span className="text-black ml-2 md:text-xl md:tracking-wider">Manage SEO for Eclan Company profile</span>
              <BiDotsVerticalRounded className="text-gray-500" size="2em" />
           </div>
           <div className="flex items-center ml-2 mt-2 lg:my-3">
             <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4"/>
             <span className="text-gray-500">Created on Sep 8th, 2020</span>
           </div>
           <div className="flex items-center ml-2 mt-2">
             <AiFillThunderbolt className="h-8 w-8 text-gray-600 rounded-full"/>
             <div className="ml-6 mb-3">
               <span className="text-gray-500 block text-md">Deadline</span>
               <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
             </div>
           </div>
           </div>
        </div>

        <div className="h-auto bg-gray-400 border shadow-md rounded-2xl mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-6">
         <div className="flex items-center justify-between">
           <div>
             <span className="text-2xl text-gray-50 block tracking-wider"> Quick To-Do List</span>
             <span className="text-gray-100 block">Lorem ipsum dolor sit</span>
           </div>
           <BsPlus size="2em" className="text-gray-100 bg-gray-600 rounded-full p-1"/>
         </div>
        </div>

        <div className="h-auto border shadow-md rounded-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
          <h3 className="block md:text-2xl md:mb-2">Graphic Designer</h3>
          <span className="block md:text-lg tracking-wide">Visual Representation to Client</span>

          <div className="mt-4 lg:mt-10 flex items-center justify-between">
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

        <div className="h-auto border shadow-md rounded-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
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
        <div className="h-auto border shadow-md rounded-md mx-6 lg:mx-0 mt-2 py-2 px-4 md:mt-4">
          <h3 className="block md:text-2xl md:mb-2">Digital Marketing</h3>
          <span className="block md:text-lg tracking-wide">Make promotional Ads for Instagram Fasto's</span>

          <div className="mt-4 lg:mt-6 flex items-center justify-between mb-2">
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
        </div>

      </DashboardLayout>
    </>
  )
}

export default Dashboard;
