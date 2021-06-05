import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import {BsThreeDots} from 'react-icons/bs';

const Customers = () => {
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
                        <span className="text-lg mr-3">Layout</span>
                        <span className="text-lg text-gray-500 mr-3">/</span>
                        <span className="text-lg text-gray-500">Blank</span>
                    </div>
                </div>
            </div>

        <div className="m-4 py-4 px-6 shadow-sm rounded-lg">
        <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Billing Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Joined
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Ricky Antony</div>
                          <div className="text-sm text-gray-500">ricky@exmaple.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">(201) 200-1851</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">2391 Main Avenue, California</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30/03/2021</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Emma Jhons</div>
                          <div className="text-sm text-gray-500">emma@exmaple.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">(212) 205-1831</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">112 Bostwick Avenue, New Jersey</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11/07/2019</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Mike Tyson</div>
                          <div className="text-sm text-gray-500">mike@exmaple.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">(201) 234-2971</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">1534, Main Drive, New York</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30/11/2020</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599140781162-68659a79e313?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGZlbWFsZSUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Jennifer Shraam</div>
                          <div className="text-sm text-gray-500">jenny@exmaple.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">(901) 100-2981</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">448, Ille de, Germany</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">00/03/2021</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
        </DashboardLayout>
        </>
     );
}
 
export default Customers;