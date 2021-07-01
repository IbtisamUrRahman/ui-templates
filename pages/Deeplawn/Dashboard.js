import Image from 'next/image'
import Table from '../../components/deeplawn/Table';
import {RiDashboardFill, RiArrowDropDownLine} from 'react-icons/ri';
import {BiSearchAlt2} from 'react-icons/bi';
import {GrServices} from 'react-icons/gr';

const Dashboard = () => {
    return ( 
        <body className="font-deeplawn box-border p-0 m-0">
            <div className="font-deeplawn bg-contact bg-no-repeat bg-cover bg-center min-h-screen min-w-screen relative">
                <div className="absolute h-24 w-full border-b-2 border-gray-200 px-8 pt-3 flex items-center justify-between flex-row">
                    <div className="w-3/12">
                        <Image className="" src="/deeplawnlogo.png" height={41} width={236}/>
                    </div>
                    <div className="flex items-center justify-between w-7/12">
                        <div className="flex items-center">
                            <Image src="/dashboard.png" height={20} width={20}/>
                            <span className="text-green-900 font-bold text-lg capitalize ml-2">dashboard</span>
                        </div>
                        <div className="flex items-center">
                            <Image src="/search.png" height={20} width={20}/>
                            <span className="text-green-900 font-bold text-lg capitalize ml-2">search</span>
                        </div>
                        <div className="flex items-center">
                            <Image src="/Vector.png" height={20} width={20}/>
                            <span className="text-green-900 font-bold text-lg capitalize ml-2">services</span>
                        </div>
                        <div className="flex items-center">
                            <Image src="/integration.png" height={20} width={20}/>
                            <span className="text-green-900 font-bold text-lg capitalize ml-2">integration</span>
                        </div>
                        <div className="flex items-center">
                            <Image src="/service.png" height={20} width={20}/>
                            <span className="text-green-900 font-bold text-lg capitalize ml-2">service area</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-2/12">
                        <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <RiArrowDropDownLine className="h-7 w-7 text-gray-600 ml-4"/>
                    </div>
                </div>

                <div className="flex items-center justify-between absolute top-40 left-16 right-16">
                    <div className="h-8 w-32">
                        <span className="font-bold text-3xl text-green-700 capitalize">orders</span>
                    </div>
                    <div className="flex items-center">
                        <input className="border border-green-900 w-64 rounded-full px-4 py-2 mr-5" placeholder="search list"/>
                        <button className="bg-gradient-to-r from-green-500 to-green-900 text-white text-lg font-bold px-8 py-2 rounded-full capitalize">add new</button>
                    </div>
                </div>
                <div className="left-16 right-16 top-56 absolute">
                    <Table/>
                </div>
            </div>
        </body>
     );
}
 
export default Dashboard;