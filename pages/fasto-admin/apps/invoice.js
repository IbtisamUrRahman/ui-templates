import React from 'react';
import DashboardLayout from '../../../components/dashboard-layout/dashboard-layout';

const Invoice = () => {
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
                <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500">Invoice</span>
                    <span className="font-semibold">29/05/2021</span>
                    <div className="flex">
                        <span className="font-semibold">Status:</span>
                        <span className="text-gray-500 ml-3">Pending</span>
                    </div>
                </div>
                <hr/>
                <div className="grid grid-cols-2 xl:grid-cols-3 xl:gap-x-2 gap-x-6 gap-y-4 mt-5">
                    <div>
                        <span className="block font-semibold">From:</span>
                        <span className="block font-bold">Webz Poland</span>
                        <span className="block">Madalinkskiego 8</span>
                        <span className="block">71-101 Warsaw, Poland</span>
                        <span className="block">Email: Info@eample.com</span>
                        <span className="block">Phone: +48 123 456 77</span>
                    </div>
                    <div>
                        <span className="block font-semibold">To:</span>
                        <span className="block font-bold">Bob Mart</span>
                        <span className="block">Daniel Marek</span>
                        <span className="block">48-101 Mikolow, Poland</span>
                        <span className="block">Email: Info@eample.com</span>
                        <span className="block">Phone: +48 123 456 77</span>
                    </div>
                    <div className="xl:flex xl:justify-between hidden">
                    <div>
                        <img src="/logo.png"/>
                        <span className="text-gray-500 block">Please send exact amount</span>
                        <span className="block font-semibold">0.15543 BTC</span>
                        <span className="text-sm text-gray-500 block">1 BTC = $6590 USD</span>
                    </div>
                    <div>
                        <img className="h-20 w-20" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"/>
                    </div>
                </div>
                </div>
                <div className="flex justify-between mt-8 xl:hidden">
                    <div>
                        <img src="/logo.png"/>
                        <span className="text-gray-500 block">Please send exact amount</span>
                        <span className="block font-semibold">0.15543 BTC</span>
                        <span className="text-sm text-gray-500 block">1 BTC = $6590 USD</span>
                    </div>
                    <div>
                        <img className="h-20 w-20" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"/>
                    </div>
                </div>
                
                <table class="table-auto mt-8 w-full">
                <thead>
                    <tr>
                    <th>
                        <div className="flex justify-start my-1"><span>Sr.</span></div>
                    </th>
                    <th>
                      <div className="flex justify-start my-1"> Item </div>
                     </th>
                     <th>
                        <div className="flex justify-start my-1"> Descripiton </div>
                    </th>
                    <th>
                        <div className="flex justify-start my-1"> Unit cost </div>
                    </th>
                    <th>
                        <div className="flex justify-start my-1"> Qty </div>
                    </th>
                    <th>
                        <div className="flex justify-start my-1"> Total </div>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <div className="my-1"><span>1</span></div>
                    </td>
                    <td>
                      <div className="my-1">Origin License</div>
                     </td>
                     <td>
                        <div className="my-1">Extended License</div>
                    </td>
                    <td>
                        <div className="my-1">$999,00</div>
                    </td>
                    <td>
                        <div className="my-1">1</div>
                    </td>
                    <td>
                        <div className="my-1">$999,00</div>
                    </td>
                    </tr>
                    <tr class="bg-gray-100">
                    <td>
                        <div className="my-1">2</div>
                    </td>
                    <td>
                      <div className="my-1">Custom Service</div>
                     </td>
                     <td>
                        <div className="my-1">Installation and customization</div>
                    </td>
                    <td>
                        <div className="my-1">$150,00</div>
                    </td>
                    <td>
                        <div className="my-1">20</div>
                    </td>
                    <td>
                        <div className="my-1">$3000,00</div>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="my-1">3</div>
                    </td>
                    <td>
                      <div className="my-1">Web Hosting</div>
                     </td>
                     <td>
                        <div className="my-1">1 year subscription</div>
                    </td>
                    <td>
                        <div className="my-1">$499,00</div>
                    </td>
                    <td>
                        <div className="my-1">1</div>
                    </td>
                    <td>
                        <div className="my-1">$499,00</div>
                    </td>
                    </tr>
                 </tbody>
                </table>

                <table className="table-auto  mt-5">
                    <tbody>
                    <tr className="border-t border-gray-200">
                    <td >
                        <div className="my-1 px-6 py-2 font-semibold">Sub Total</div>
                    </td>
                    <td>
                      <div className="my-1 px-6 py-2">$8.497.00</div>
                     </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                    <td >
                        <div className="my-1 px-6 py-2 font-semibold">Discount (20%)</div>
                    </td>
                    <td>
                      <div className="my-1 px-6 py-2">$1699.40</div>
                     </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                    <td >
                        <div className="my-1 px-6 py-2 font-semibold">VAT (10%)</div>
                    </td>
                    <td>
                      <div className="my-1 px-6 py-2">$679.76</div>
                     </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                    <td >
                        <div className="my-1 px-6 py-2 font-semibold">Total</div>
                    </td>
                    <td>
                      <div className="my-1 px-6 py-2">$7477.60</div>
                     </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
        </>
    );
}

export default Invoice;