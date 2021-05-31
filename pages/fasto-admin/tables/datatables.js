import React from 'react';
import Pagination from '../../crypto/Pagination';
import { BsPencil, BsThreeDots, BsTrash } from 'react-icons/bs';


const DataTables = () => {
    return ( 
        <>
        {/* basic datatable */}
         <div className="m-4 py-4 px-6 shadow rounded-lg">

             <div className="flex justify-between items-center pb-3 mr-5">
               <h1 className="font-medium text-lg pb-4">Basic datatable</h1>
               <input className="p-2 rounded-lg border border-gray-300" placeholder="search"/>
             </div>
      <div className="h-48 flex flex-col">
      <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Office
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Airi Sataou</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Accountant</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tokyo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">33</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">11/03/2015</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$16,720</td>
                  </tr>
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center py-5">
         <Pagination />
    </div>
    </div>
        
          {/* profile datatable */}
          <div className="m-4 py-4 px-6 shadow rounded-lg">
             <div className="flex justify-between items-center pb-3 mr-5">
               <h1 className="font-medium text-lg pb-4">Profile datatable</h1>
               <input className="p-2 rounded-lg border border-gray-300" placeholder="search"/>
             </div>
      <div className="h-48 flex flex-col">
      <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="">
                <tr>
                <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                  
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Education
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Mobile
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
                   Joining Date
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
                  <tr>
                  <td className="px-2 py-4 whitespace-nowrap">
                  <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Tiger Nixon</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Architect</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Male</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Ph.D</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">123 456 78</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Info@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
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
                  <td className="px-2 py-4 whitespace-nowrap">
                  <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Tiger Nixon</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Architect</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Male</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Ph.D</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">123 456 78</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Info@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
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
                  <td className="px-2 py-4 whitespace-nowrap">
                  <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Tiger Nixon</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Architect</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Male</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Ph.D</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">123 456 78</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Info@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
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
                  <td className="px-2 py-4 whitespace-nowrap">
                  <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Tiger Nixon</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Architect</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Male</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Ph.D</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">123 456 78</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Info@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
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
                  <td className="px-2 py-4 whitespace-nowrap">
                  <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">Tiger Nixon</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Architect</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Male</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Ph.D</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">123 456 78</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Info@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
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
    <div className="flex justify-center py-5">
         <Pagination />
    </div>
    </div>
        
                 {/* Fee collection datatable */}
                 <div className="m-4 py-4 px-6 shadow rounded-lg">
             <div className="flex justify-between items-center pb-3 mr-5">
               <h1 className="font-medium text-lg pb-4">Fee collection datatable</h1>
               <input className="p-2 rounded-lg border border-gray-300" placeholder="search"/>
             </div>
      <div className="h-48 flex flex-col">
      <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Roll No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold  text-gray-500 uppercase tracking-wider"
                  >
                    Student Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Invoice Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Fee type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Payment Type
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
                 Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                   Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">22</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Yuri Berry</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">#98756</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Tuition</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Credit card</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Paid
                      </span>
                    </td>   
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">$120</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">23</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Paula Lauren</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">#67756</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Annual</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Cheque</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Unpaid
                      </span>
                    </td>   
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">$120</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 text-sm font-medium text-gray-900">23</div>
                    </td>
                    <td>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-500">Alex Garham</div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">#12934</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Library</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Cash</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>   
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">01/01/2021</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">4120</td>
                  </tr>
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center py-5">
         <Pagination />
    </div>
    </div>
        
        </>
     );
}
 
export default DataTables;