import React from 'react';
import DashboardLayout from '../../../components/dashboard-layout/dashboard-layout';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
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

            <div className="mx-4 my-1 md:mx-4 md:my-2 xl:mx-3 py-4 px-6 xl:p-0">
                <div className="px-6 py-8 md:py-4 rounded-lg shadow-md md:flex md:justify-between">
                    <div className="md:w-1/3">
                        <img className="h-auto w-full md:object-cover md:h-80 md:mr-6 xl:h-96" src="https://images.unsplash.com/photo-1616244094867-6efbbd4d1ddd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvbGthJTIwZG90cyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                        <div className="grid grid-cols-4 gap-2 mt-4">
                            <img className="h-40 w-40 md:h-20 md:w-32 md:object-cover" src="https://images.unsplash.com/photo-1576558345433-58e777a5e423?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjBibGFjayUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <img className="h-40 w-40 md:h-20 md:w-32 md:object-cover" src="https://images.unsplash.com/photo-1596703343725-7ca01bda9a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZSUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <img className="h-40 w-40 md:h-20 md:w-32 md:object-cover" src="https://images.unsplash.com/photo-1576558345433-58e777a5e423?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjBibGFjayUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                            <img className="h-40 w-40 md:h-20 md:w-32 md:object-cover" src="https://images.unsplash.com/photo-1596703343725-7ca01bda9a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZSUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                      </div>
                    </div>
                    <div className="my-3 md:my-1 md:w-2/3 md:ml-6">
                        <span className="block text-2xl font-semibold my-4 md:my-0 md:-mt-1 md:mb-2 md:text-3xl xl:text-5xl">Polka Dots</span>
                        <div className="flex">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        </div>
                        <div className="flex justify-between md:block">
                            <div className="flex">
                                <span className="text-gray-500 mr-2">(34 Reviews)</span>
                                <span className="text-gray-500 mr-2">/</span>
                                <span className="text-gray-500 block">Write a review ?</span>
                            </div>
                            <div>
                                <span className="text-xl xl:font font-semibold md:text-2xl lg:text-3xl">$ 300.00</span>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-gray-500 mr-2">Avaibility:</span>
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-2">in stocks</span>
                                <AiFillCheckCircle/>
                            </div>
                        </div>
                        <span className="text-gray-500 block mt-2">Product code: 064552</span>
                        <span className="text-gray-500 block mt-2">Brand: Fox Sake</span>
                        <p className="text-gray-500 leading-relaxed mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <div className="mt-3">
                            <span className="font-semibold text-xl">select size</span>
                            <div className="flex mt-3">
                                <div className="px-4 py-2 border border-gray-500 rounded-full">
                                    <span className="text-gray-600 mr-4">xs</span> 
                                    <span className="text-gray-600 mr-4">sm</span>
                                    <span className="text-gray-600 mr-4">md</span>
                                    <span className="text-gray-600 mr-4">lg</span>
                                    <span className="text-gray-600">xl</span>
                                </div>
                                <div className="px-4 py-2 ml-4 border border-gray-300 rounded-full">
                                    <span className="text-gray-500 px-4">1</span>
                                </div>
                            </div>
                            <button className="flex items-center mt-3 px-4 py-2 bg-gray-100 rounded-lg">
                                <AiOutlineShoppingCart className="text-gray-600"/>
                                <span className="text-gray-600 ml-3">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
        </>
     );
}
 
export default ProductDetails;