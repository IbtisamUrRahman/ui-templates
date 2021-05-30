import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import Pagination from '../../../crypto/Pagination';
import {HiOutlineInboxIn} from 'react-icons/hi';
import {RiSendPlaneLine} from 'react-icons/ri';
import {BiArchiveIn} from 'react-icons/bi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';

const Inbox = () => {
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
            <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">     
              <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0">
                        <AiOutlineStar className="text-gray-700 h-6 w-6"/>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        11:49 AM
                      </span>
                    </td>
                    <td className=" py-4 whitespace-nowrap">
                      <p className="text-base text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
            </div>
            </div>
</div>
<Pagination/>
       </DashboardLayout>
</>
     );
}
 
export default Inbox;