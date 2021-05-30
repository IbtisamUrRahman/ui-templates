import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import {HiOutlineInboxIn} from 'react-icons/hi';
import {RiSendPlaneLine, RiReplyFill} from 'react-icons/ri';
import {BiArchiveIn} from 'react-icons/bi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsTrash, BsThreeDots, BsDownload } from 'react-icons/bs';

const Read = () => {
    return ( 
        <>
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

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
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
           <div className="m-4 py-4 px-6 shadow-sm rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex">
                    <img className="h-20 w-20 object-cover rounded-lg" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <div className="ml-4">
                        <span className="text-2xl font-medium tracking-wide">Alex Col</span>
                        <span className="block font-medium text-gray-700">20 May 2021</span>
                    </div>
                </div>
                <div className="flex">
                    <RiReplyFill className="h-6 w-6 mr-6 hover:text-gray-500"/>
                    <BsThreeDots className="h-6 w-6 mr-6 hover:text-gray-500"/>
                    <BsTrash className="h-6 w-6 hover:text-gray-500"/>
                </div>
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="flex">
                    <div>
                        <p className="text-lg font-medium tracking-wide">A collection of Textile Samples.</p>
                        <p className="block text-sm font-medium text-gray-700">To: info@example.com</p>
                    </div>
                </div>
                <span className="font-medium text-gray-700">07:23 AM</span>
            </div>
            <div className="mt-6">
                <span className="font-medium text-lg">Hi, </span>
                <span className="font-medium text-lg">Alex</span>
                <div className="my-4">
                    <p className="font-medium leading-relaxed text-gray-700">A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture.
                        <br/>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        <br/>
                             Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar.</p>
                    
                    <div className="mt-4">
                        <span className="font-medium">Kind Regards</span>
                        <span className="text-gray-700 font-medium block">Mr Smith</span>

                    </div>
                </div>
                <hr/>
                <div className="mt-6 flex items-center">
                  <BsDownload className="h-6 w-6 mr-4"/>
                  <span className="text-lg font-medium text-gray-700">Attachments (2)</span>
                </div>
                <div className="my-5 mx-10 flex items-center">
                    <span className="text-base font-medium text-gray-700 border-r border-gray-500 pr-2">My-photo.png</span>
                    <span className="text-base font-medium text-gray-700 ml-2">Resume.pdf</span>
                </div>
                <textarea rows="5" cols="30" type="text" required className="mt-4 focus:outline-none p-3 border border-gray-300 rounded-lg block w-full" placeholder="Reply"/>
                <div className="my-4 flex justify-end">
                <button className="bg-green-500 text-green-100 text-lg rounded-lg w-1/6 py-2 inline-block">
                   send
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
 
export default Read;