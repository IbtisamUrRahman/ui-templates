import React from 'react';
import { BsPencil, BsThreeDots, BsTrash } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import DashboardLayout from '../../../components/dashboard-layout/dashboard-layout';

const Bootstrap = () => {
    return ( 
        <>
            {/* recent payment queue */}
            <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Basic Payment queue</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Dr NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Succesful
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                        Cancelled
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
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

     {/* Table Stripped */}
     <div className="m-4 py-4 px-6 rounded-lg">
     <h1 className="font-medium text-lg pb-4">Table Stripped</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider border-b border-gray-300 "
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">01</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Color T-shirt For Men</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Sale
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">02</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Color T-shirt For Women</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-gray-900">
                        Tax
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">03</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Baby Backpack</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                        Extended
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Table Bordered */}
    <div className="m-4 py-4 px-6 rounded-lg">
     <h1 className="font-medium text-lg pb-4">Table Bordered</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-x divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                        <div className="flex-shrink-0">
                        <div className="text-sm font-medium text-gray-900">01</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">Color T-shirt For Men</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 fon3-semibold rounded-full bg-green-100 text-green-800">
                        Sale
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">$ 21.56</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                        <div className="flex-shrink-0 h-10 w310">
                        <div className="text-sm font-medium text-gray-900">02</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">Color T-shirt For Women</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 fon3-semibold rounded-full bg-yellow-500 text-gray-900">
                        Tax
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                        <div className="flex-shrink-0 ">
                        <div className="text-sm font-medium text-gray-900 ">03</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">Baby Backpack</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                        Extended
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">$ 21.56</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

     {/* Table Hover */}
     <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Table Hover</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="hover:bg-gray-50">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Dr NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Succesful
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        <BsThreeDots/>
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                        Cancelled
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
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

    {/* Table Heading Background */}
    <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Table with Heading Background</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-100 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-100 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                    Dr NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                   Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Table Primary */}
    <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Table Primary</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-green-500">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-100 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-100 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                    Dr NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                   Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$ 21.56</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Table primary hover */}
    <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Primary Table Hover</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-green-600 hover:bg-green-400">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-100 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-100 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                    Dr NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase tracking-wider"
                  >
                   Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-600 hover:bg-green-400">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-100">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-100">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-100">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-100">01 August 2020</div>
                    </td>
                  </tr>
                  <tr className="bg-green-600 hover:bg-green-400">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-100">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-100">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-100">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-100">01 August 2020</div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

       {/* Table Contextual */}
       <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Contextual Table</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider"
                  >
                    Coulumn Heading
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                   Coulumn Heading
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                   Coulumn Heading
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-green-500">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-green-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-green-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-green-500">01 August 2020</div>
                    </td>
                  </tr>
                  <tr className="bg-red-300">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-red-500">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-red-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-red-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-red-500">01 August 2020</div>
                    </td>
                  </tr>
                  <tr className="bg-yellow-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-yellow-500">03</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-yellow-500">Mr Bobby</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-yellow-500">Dr. Jackson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-yellow-500">01 August 2020</div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

     {/* Responsive */}
     <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Responsive Table</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Invoice
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                   User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Country
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Order # 26589</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Herman Beck</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">$45.00</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-gray-800">
                       Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">EN</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Order # 26589</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Herman Beck</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">$45.00</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-300 text-blue-800">
                       Shippied
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CN</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Table Hover porgress bar */}
    <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Table With Hover & Progress Bar</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="hover:bg-gray-50">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Popularity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                  Sales
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">01</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Air conditionar</div>
                        </div>
                    </td>
                    {/* progress bar */}
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                         <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full bg-green-500 absolute w-1/2"></div>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        50%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">02</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Textiles</div>
                        </div>
                    </td>
                    {/* progress bar */}
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                         <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full bg-yellow-500 absolute w-2/3"></div>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-gray-800">
                        70%
                      </span>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Table Bordered porgress bar and stripped */}
    <div className="m-4 py-4 px-6 rounded-lg">
     <h1 className="font-medium text-lg pb-4">Table Bordered with progress bar & stripes</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-x divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
                  >
                    tasks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Deadline
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Label
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                        <div className="flex-shrink-0">
                        <div className="text-sm font-medium text-gray-900">Air conditionar</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                         <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full bg-green-500 absolute w-2/3"></div>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 fon3-semibold rounded-full bg-green-100 text-green-800">
                        50 %
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300"><ImCross/></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                        <div className="flex-shrink-0">
                        <div className="text-sm font-medium text-gray-900">Textiles</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                         <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full bg-yellow-500 absolute w-2/3"></div>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 fon3-semibold rounded-full bg-yellow-500 text-gray-800">
                        70 %
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300"><ImCross/></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                        <div className="flex-shrink-0">
                        <div className="text-sm font-medium text-gray-900">Groceries</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                         <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full bg-red-500 absolute w-2/6"></div>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm text-gray-500">01 August 2020</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 fon3-semibold rounded-full bg-red-500 text-red-100">
                        20 %
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300"><ImCross/></td>
                  </tr>
                  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Exam Topper */}
    <div className="m-4 py-4 px-6 rounded-lg">
            <h1 className="font-medium text-lg pb-4">Exam Topper Table</h1>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider"
                  >
                    
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Roll No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">
                          <input type="checkbox" className="text-gray-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        </div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">542</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                          <img className="h-8 w-8 object-cover rounded-md mr-2" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                          <span className="text-sm text-gray-500"> Dr. Jackson</span>
                     </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">info@example.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21/02/2021</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Succesful
                      </span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium flex items-center">
                    <a href="#" className="text-green-600 hover:text-green-900">
                        <BsPencil className="h-5 w-5 mr-5"/>
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        <BsTrash className="h-5 w-5 mr-5"/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">
                          <input type="checkbox" className="text-gray-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>
                        </div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">543</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                          <img className="h-8 w-8 object-cover rounded-md mr-2" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                          <span className="text-sm text-gray-500"> Dr. Jackson</span>
                     </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">info@example.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21/02/2021</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-red-100">
                        Cancelled
                      </span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium flex items-center">
                    <a href="#" className="text-green-600 hover:text-green-900">
                        <BsPencil className="h-5 w-5 mr-5"/>
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        <BsTrash className="h-5 w-5 mr-5"/>
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
        </>
     );
}
 
export default Bootstrap;