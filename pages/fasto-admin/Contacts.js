import React from 'react'
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import { BsPlus, BsChat } from "react-icons/bs";
import { BiPhoneCall, BiVideo } from "react-icons/bi";


const Contacts = () => {
    return (
        <>
        <DashboardLayout>
            <div className="h-auto m-4 p-4 shadow-md">
                <div className="flex xl:justify-between xl:items-center mb-3">
                    <div className="flex">
                <div className="flex mr-6 md:mr-16">
                    <span className="mr-2">All Contacts</span>
                    <span className="bg-gray-500 text-white rounded-2xl shadow-sm px-2">154</span>
                </div>
                <div className="flex">
                    <span className="mr-2">Pending Invitation</span>
                    <span className="bg-gray-500 text-white rounded-2xl shadow-sm px-2">9</span>
                </div>
                </div>
                 <div>
                 <button className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg hidden xl:block">
                  <div className="flex items-center p-2">
                    <BsPlus className="text-white mr-1"/>
                    <span className="text-white text-sm">New Contacts</span>
                  </div>
                 </button>
                 </div>
                </div>
                 <button className="bg-gradient-to-r from-gray-500 to-gray-600 p-1 rounded-lg xl:hidden">
                  <div className="flex items-center px-1">
                    <BsPlus className="text-white mr-1"/>
                    <span className="text-white">New Contacts</span>
                  </div>
                 </button> 
            </div>

            {/* <!-- contact list --> */}

            <div className="h-auto m-4 p-4 grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-8">
                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Alan Green</span>
                   <span className="block text-center text-gray-500 mt-1">UI Designer</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Angela Moss</span>
                   <span className="block text-center text-gray-500 mt-1">Blue Studios</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Olivia Gray</span>
                   <span className="block text-center text-gray-500 mt-1">Management</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Ben Simmons</span>
                   <span className="block text-center text-gray-500 mt-1">Highspeed Inc.</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Cynthia Lawra</span>
                   <span className="block text-center text-gray-500 mt-1">Zero Two Studios</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Cloe Simuntupang</span>
                   <span className="block text-center text-gray-500 mt-1">02 Studios</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Engelinna O'conner</span>
                   <span className="block text-center text-gray-500 mt-1">Beep Inc.</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>

                <div className="w-48 px-6 py-4 border border-gray-500 rounded-lg shadow-md mx-auto">
                   <img className="h-14 w-14 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center mt-2">Geovanny</span>
                   <span className="block text-center text-gray-500 mt-1">Backend Developer</span>
                 <div className="flex items-center justify-center mt-2">
                     <a><BiPhoneCall className="h-5 w-5 mr-3"/></a>
                     <a><BsChat className="h-5 w-5 mr-3"/></a>
                     <a> <BiVideo className="h-5 w-5"/></a>
                 </div>
                </div>
            </div>
            <button className="bg-gray-200  rounded-lg shadow-md mx-auto px-4 py-1 w-auto">Load More</button>
        </DashboardLayout>
        </>
     );
}
 
export default Contacts;