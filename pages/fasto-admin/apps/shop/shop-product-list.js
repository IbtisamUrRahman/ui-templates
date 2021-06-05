import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";

const ProductList = () => {
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

            <div className="xl:grid xl:grid-cols-2 xl:gap-4">
            <div className="mx-4 my-1 md:mx-4 md:my-2 xl:mx-3 py-4 px-6 xl:p-0">
                <div className="px-6 py-8 md:py-4 rounded-lg shadow-md md:flex md:justify-between xl:block">
                    <img className="h-auto w-full md:object-cover md:h-80 md:mr-6 xl:h-96" src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <div className="my-3 md:my-1">
                        <span className="block text-lg font-semibold my-4 md:my-0 md:-mt-1 md:mb-2 xl:mt-2">Solid Women Monetero Dress</span>
                        <div className="flex">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <span className="text-gray-500 mr-2">(34 Reviews)</span>
                                <span className="text-gray-500 mr-2">/</span>
                                <span className="text-gray-500">Write a review ?</span>
                            </div>
                            <div>
                                <span className="text-xl font-semibold">$ 761.00</span>
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
                        <span className="text-gray-500 block mt-2">Brand: Lee</span>
                        <p className="text-gray-500 leading-relaxed mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </div>
                </div>
            </div>

            <div className="mx-4 my-1 md:mx-4 md:my-2 xl:mx-3 py-4 px-6 xl:p-0">
                <div className="px-6 py-8 md:py-4 rounded-lg shadow-md md:flex md:justify-between xl:block">
                    <img className="h-auto w-full md:object-cover md:h-80 md:mr-6 xl:h-96" src="https://images.unsplash.com/photo-1596703343725-7ca01bda9a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZSUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <div className="my-3 md:my-1">
                        <span className="block text-lg font-semibold my-4 md:my-0 md:-mt-1 md:mb-2 xl:mt-2">Back Bug</span>
                        <div className="flex">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <span className="text-gray-500 mr-2">(34 Reviews)</span>
                                <span className="text-gray-500 mr-2">/</span>
                                <span className="text-gray-500 block">Write a review ?</span>
                            </div>
                            <div>
                                <span className="text-xl xl:font font-semibold">$ 500.00</span>
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
                    </div>
                </div>
            </div>

            <div className="mx-4 my-1 md:mx-4 md:my-2 xl:mx-3 py-4 px-6 xl:p-0">
                <div className="px-6 py-8 md:py-4 rounded-lg shadow-md md:flex md:justify-between xl:block">
                    <img className="h-auto w-full md:object-cover md:h-80 md:mr-6 xl:h-96" src="https://images.unsplash.com/photo-1616244094867-6efbbd4d1ddd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvbGthJTIwZG90cyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <div className="my-3 md:my-1">
                        <span className="block text-lg font-semibold my-4 md:my-0 md:-mt-1 md:mb-2 xl:mt-2">Polka Dots</span>
                        <div className="flex">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <span className="text-gray-500 mr-2">(34 Reviews)</span>
                                <span className="text-gray-500 mr-2">/</span>
                                <span className="text-gray-500 block">Write a review ?</span>
                            </div>
                            <div>
                                <span className="text-xl xl:font font-semibold">$ 300.00</span>
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
                    </div>
                </div>
            </div>

            <div className="mx-4 my-1 md:mx-4 md:my-2 xl:mx-3 py-4 px-6 xl:p-0">
                <div className="px-6 py-8 md:py-4 rounded-lg shadow-md md:flex md:justify-between xl:block">
                    <img className="h-auto w-full md:object-cover md:h-80 md:mr-6 xl:h-96" src="https://images.unsplash.com/photo-1576558345433-58e777a5e423?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjBibGFjayUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <div className="my-3 md:my-1">
                        <span className="block text-lg font-semibold my-4 md:my-0 md:-mt-1 md:mb-2 xl:mt-2">Black Hoodie</span>
                        <div className="flex">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <span className="text-gray-500 mr-2">(34 Reviews)</span>
                                <span className="text-gray-500 mr-2">/</span>
                                <span className="text-gray-500 block">Write a review ?</span>
                            </div>
                            <div>
                                <span className="text-xl xl:font font-semibold">$ 139.00</span>
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
                        <span className="text-gray-500 block mt-2">Brand: Monark</span>
                        <p className="text-gray-500 leading-relaxed mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </div>
                </div>
            </div>
            </div>
        </DashboardLayout>
        </>
     );
}
 
export default ProductList;