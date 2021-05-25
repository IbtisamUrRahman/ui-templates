import React from 'react'
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import { AiOutlineCalendar, AiFillThunderbolt } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Projects = () => {
    return (
        <>
        <DashboardLayout>
            <div className="h-auto rounded-md shadow-md m-4 border-l-8 border-gray-400 p-4">
                <h4 className="">#P - 000441425</h4>
                <div className="flex">
                    <div className="mr-12 md:mr-24">
                        <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        <div className="lg:block lg:mr-6">
                        <h3 className="text-lg font-semibold">Redesign Kripton Mobile App</h3>
                        <div className="flex items-center mt-2 mb-2 lg:my-3">
                            <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4 lg:h-10 lg:w-10"/>
                            <span className="text-gray-500">Created on Sep 8th, 2020</span>
                        </div>
                        </div>
                        <div className="hidden lg:block">
                        <div className="flex lg:mr-6 xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Alex Noir</h4>
                            </div>
                        </div>
                        </div>
                        <div className="flex xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Person in charge</h3>
                                <h4 className="font-semibold">Yoast Essac</h4>
                            </div>
                        </div>
                        <div className="hidden xl:block">
                        <div className="flex items-center ml-2 mt-6 xl:mt-0">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                        </div>
                        <div className="hidden 2xl:block 2xl:ml-16">
                        <div className="flex items-center justify-between mt-3">
                            <button className="border bg-gray-700  rounded-full px-6 py-2 hover:bg-gray-200">
                                <span className="text-white">Pending</span>
                            </button>
                            <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 2xl:ml-2 text-gray-500"/>
                        </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between mt-3  lg:hidden 2xl:hidden">
                            <button className="border bg-gray-700 rounded-full px-6 py-1">
                                <span className="text-white">Pending</span>
                            </button>
                            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="flex">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Alex Noir</h4>
                            </div>
                        </div>
                        <div className="flex items-center ml-2 mt-6">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-between lg:items-baseline">
                     <div className="flex items-center ml-2 mt-6 xl:hidden">
                        <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                        <div className="ml-6">
                            <span className="text-gray-500 block text-md">Deadline</span>
                            <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 2xl:hidden">
                        <button className="border bg-gray-700  rounded-full px-6 py-1 hover:bg-gray-200">
                            <span className="text-white">Pending</span>
                        </button>
                        <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 text-gray-500"/>
                    </div>
                </div>
            </div>

            {/* <!-- project-2 --> */}

            <div className="h-auto rounded-md shadow-md m-4 border-l-8 border-gray-400 p-4">
                <h4 className="">#P - 000441425</h4>
                <div className="flex">
                    <div className="mr-12 md:mr-24">
                        <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        <div className="lg:block lg:mr-6">
                        <h3 className="text-lg font-semibold">Branding Persona for Etza.id</h3>
                        <div className="flex items-center mt-2 mb-2 lg:my-3">
                            <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4 lg:h-10 lg:w-10"/>
                            <span className="text-gray-500">Created on Sep 8th, 2020</span>
                        </div>
                        </div>
                        <div className="hidden lg:block">
                        <div className="flex lg:mr-6 xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Kevin Sigh</h4>
                            </div>
                        </div>
                        </div>
                        <div className="flex xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Person in charge</h3>
                                <h4 className="font-semibold">Yuri Hanako</h4>
                            </div>
                        </div>
                        <div className="hidden xl:block">
                        <div className="flex items-center ml-2 mt-6 xl:mt-0">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                        </div>
                        <div className="hidden 2xl:block 2xl:ml-16">
                        <div className="flex items-center justify-between mt-3">
                            <button className="border bg-gray-700  rounded-full px-6 py-1 hover:bg-gray-200">
                                <span className="text-white">Progress</span>
                            </button>
                            <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 2xl:ml-2 text-gray-500"/>
                        </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between mt-3  lg:hidden 2xl:hidden">
                            <button className="border bg-gray-700 rounded-full px-6 py-1">
                                <span className="text-white">Progress</span>
                            </button>
                            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="flex">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Kevin Sigh</h4>
                            </div>
                        </div>
                        <div className="flex items-center ml-2 mt-6">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-between lg:items-baseline">
                     <div className="flex items-center ml-2 mt-6 xl:hidden">
                        <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                        <div className="ml-6">
                            <span className="text-gray-500 block text-md">Deadline</span>
                            <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 2xl:hidden">
                        <button className="border bg-gray-700  rounded-full px-6 py-1 hover:bg-gray-200">
                            <span className="text-white">Progress</span>
                        </button>
                        <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 text-gray-500"/>
                    </div>
                </div>
            </div>

             {/* <!-- project-3 --> */}

            <div className="h-auto rounded-md shadow-md m-4 border-l-8 border-gray-400 p-4">
                <h4 className="">#P - 000441425</h4>
                <div className="flex">
                    <div className="mr-12 md:mr-24">
                        <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        <div className="lg:block lg:mr-6">
                        <h3 className="text-lg font-semibold">Reduce Website page Design</h3>
                        <div className="flex items-center mt-2 mb-2 lg:my-3">
                            <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4 lg:h-10 lg:w-10"/>
                            <span className="text-gray-500">Created on Sep 8th, 2020</span>
                        </div>
                        </div>
                        <div className="hidden lg:block">
                        <div className="flex lg:mr-6 xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Endge Aes</h4>
                            </div>
                        </div>
                        </div>
                        <div className="flex xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Person in charge</h3>
                                <h4 className="font-semibold">Peter Parkur</h4>
                            </div>
                        </div>
                        <div className="hidden xl:block">
                        <div className="flex items-center ml-2 mt-6 xl:mt-0">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                        </div>
                        <div className="hidden 2xl:block 2xl:ml-16">
                        <div className="flex items-center justify-between mt-3">
                            <button className="border bg-gray-700  rounded-full px-6 py-2 hover:bg-gray-200">
                                <span className="text-white">Closed</span>
                            </button>
                            <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 2xl:ml-2 text-gray-500"/>
                        </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between mt-3  lg:hidden 2xl:hidden">
                            <button className="border bg-gray-700 rounded-full px-6 py-1">
                                <span className="text-white">Closed</span>
                            </button>
                            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="flex">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Endge Aes</h4>
                            </div>
                        </div>
                        <div className="flex items-center ml-2 mt-6">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-between lg:items-baseline">
                     <div className="flex items-center ml-2 mt-6 xl:hidden">
                        <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                        <div className="ml-6">
                            <span className="text-gray-500 block text-md">Deadline</span>
                            <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 2xl:hidden">
                        <button className="border bg-gray-700  rounded-full px-6 py-1 hover:bg-gray-200">
                            <span className="text-white">Closed</span>
                        </button>
                        <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 text-gray-500"/>
                    </div>
                </div>
            </div>

            {/* <!-- project-4 --> */}

            <div className="h-auto rounded-md shadow-md m-4 border-l-8 border-gray-400 p-4">
                <h4 className="">#P - 000441425</h4>
                <div className="flex">
                    <div className="mr-12 md:mr-24">
                        <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        <div className="lg:block lg:mr-6">
                        <h3 className="text-lg font-semibold">Manage SEO for Ecian Company</h3>
                        <div className="flex items-center mt-2 mb-2 lg:my-3">
                            <AiOutlineCalendar className="text-gray-500 h-5 w-5 mr-4 lg:h-10 lg:w-10"/>
                            <span className="text-gray-500">Created on Sep 8th, 2020</span>
                        </div>
                        </div>
                        <div className="hidden lg:block">
                        <div className="flex lg:mr-6 xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Angela Mass</h4>
                            </div>
                        </div>
                        </div>
                        <div className="flex xl:mr-6">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Person in charge</h3>
                                <h4 className="font-semibold">Olivia Janson</h4>
                            </div>
                        </div>
                        <div className="hidden xl:block">
                        <div className="flex items-center ml-2 mt-6 xl:mt-0">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                        </div>
                        <div className="hidden 2xl:block 2xl:ml-16">
                        <div className="flex items-center justify-between mt-3">
                            <button className="border bg-gray-700  rounded-full px-6 py-2 hover:bg-gray-200">
                                <span className="text-white">Progress</span>
                            </button>
                            <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 2xl:ml-2 text-gray-500"/>
                        </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between mt-3  lg:hidden 2xl:hidden">
                            <button className="border bg-gray-700 rounded-full px-6 py-1">
                                <span className="text-white">Progress</span>
                            </button>
                            <BiDotsVerticalRounded className="h-7 w-7 text-gray-500"/>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="flex">
                            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <div className="ml-4">
                                <h3 className="text-gray-500">Client</h3>
                                <h4 className="font-semibold">Anglea Mass</h4>
                            </div>
                        </div>
                        <div className="flex items-center ml-2 mt-6">
                             <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                             <div className="ml-6">
                                <span className="text-gray-500 block text-md">Deadline</span>
                                <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-between lg:items-baseline">
                     <div className="flex items-center ml-2 mt-6 xl:hidden">
                        <AiFillThunderbolt className="h-8 w-8 text-gray-600"/>
                        <div className="ml-6">
                            <span className="text-gray-500 block text-md">Deadline</span>
                            <span className="text-black block text-md">Tuesday, Sep 29th 2020</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 2xl:hidden">
                        <button className="border bg-gray-700  rounded-full px-6 py-1 hover:bg-gray-200">
                            <span className="text-white">Progress</span>
                        </button>
                        <BiDotsVerticalRounded className="h-10 w-10 ml-4 xl:ml-24 text-gray-500"/>
                    </div>
                </div>
            </div>

        </DashboardLayout>
        </>
     );
}
 
export default Projects;