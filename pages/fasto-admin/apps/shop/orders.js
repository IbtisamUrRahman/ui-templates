import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import {BsThreeDots} from 'react-icons/bs';

const Orders = () => {
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
              <thead className="bg-gray-50 min-w-full">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                      Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ship To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        <input type="checkbox" className="text-gray-700 focus:ring-gray-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        </div>
                        <div className="ml-1">
                          <div className="text-sm font-medium text-gray-900">#181 by Ricky Antony</div>
                          <div className="text-sm text-gray-500">ricky@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">20/04/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 99</td>
                    <td className="px-3 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        <input type="checkbox" className="text-green-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        </div>
                        <div className="ml-1">
                          <div className="text-sm font-medium text-gray-900">#182 by Kin Rossow</div>
                          <div className="text-sm text-gray-500">kin@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">20/04/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-gray-900">
                        processing
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kin Rossow, 1 Hollywood Blvd,Beverly Hills, California</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 120</td>
                    <td className="px-3 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        <input type="checkbox" className="text-yellow-700 focus:ring-yellow-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        </div>
                        <div className="ml-1">
                          <div className="text-sm font-medium text-gray-900">#183 by Marry Diana</div>
                          <div className="text-sm text-gray-500">marry@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">20/04/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-gray-900">
                        On Hold
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bucky Robert, 1 Infinite Loop, Cupertino, California </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 920</td>
                    <td className="px-3 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        <input type="checkbox" className="text-yellow-700 focus:ring-yellow-300 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        </div>
                        <div className="ml-1">
                          <div className="text-sm font-medium text-gray-900">#184 by Evie Singh</div>
                          <div className="text-sm text-gray-500">evie@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">20/04/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-900 text-white">
                       pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Evie Singh, 54 Castledore Road, Tunstead</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 220</td>
                    <td className="px-3 whitespace-nowrap text-right text-sm font-medium">
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
 
export default Orders;