import React from 'react';
import DashboardLayout from '../../../../components/dashboard-layout/dashboard-layout';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const ProductGrid = () => {
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="p-3 rounded-lg shadow-lg">
                    <img className="h-96 w-64 object-cover mx-auto" src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <span className="block text-lg xl:text-2xl text-center mt-2">Benorum et Molorum</span>
                    <div className="flex justify-center mt-2">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                    </div>
                    <span className="block text-xl font-semibold text-center mt-2">$ 761.00</span>
                </div>
                <div className="p-3 rounded-lg shadow-lg">
                    <img className="h-96 w-64 object-cover mx-auto" src="https://images.unsplash.com/photo-1616244094867-6efbbd4d1ddd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvbGthJTIwZG90cyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <span className="block text-lg xl:text-2xl text-center mt-2">Polka Dots</span>
                    <div className="flex justify-center mt-2">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                    </div>
                    <span className="block text-xl font-semibold text-center mt-2">$ 139.00</span>
                </div>
                <div className="p-3 rounded-lg shadow-lg">
                    <img className="h-96 w-64 object-cover mx-auto" src="https://images.unsplash.com/photo-1576558345433-58e777a5e423?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjBibGFjayUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <span className="block text-lg xl:text-2xl text-center mt-2">Black Hoodie</span>
                    <div className="flex justify-center mt-2">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                    </div>
                    <span className="block text-xl font-semibold text-center mt-2">$ 40.00</span>
                </div>
                <div className="p-3 rounded-lg shadow-lg">
                    <img className="h-96 w-64 object-cover mx-auto" src="https://images.unsplash.com/photo-1596703343725-7ca01bda9a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZSUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <span className="block text-lg xl:text-2xl text-center mt-2">Back Bug</span>
                    <div className="flex justify-center mt-2">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                    </div>
                    <span className="block text-xl font-semibold text-center mt-2">$ 500.00</span>
                </div>
                <div className="p-3 rounded-lg shadow-lg">
                    <img className="h-96 w-64 object-cover mx-auto" src="https://images.unsplash.com/photo-1602423763918-6ae68bca77c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxibHVlJTIwZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <span className="block text-lg xl:text-2xl text-center mt-2">Fox Sake</span>
                    <div className="flex justify-center mt-2">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        <RiStarSLine/>
                    </div>
                    <span className="block text-xl font-semibold text-center mt-2">$ 254.00</span>
                </div>
                <div className="p-3 rounded-lg shadow-lg">
                    <img className="h-96 w-64 object-cover mx-auto" src="https://images.unsplash.com/photo-1602414450735-6fb78e251a17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxibHVlJTIwZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                    <span className="block text-lg xl:text-2xl text-center mt-2">Chinese Traditional</span>
                    <div className="flex justify-center mt-2">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSLine/>
                        <RiStarSLine/>
                    </div>
                    <span className="block text-xl font-semibold text-center mt-2">$ 630.50</span>
                </div>
            </div>
        </div>
        </DashboardLayout>
        </>
     );
}
 
export default ProductGrid;