import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'

const Contact = () => {
    return ( 
        <div className="font-deeplawn p-0 m-0 box-border">
        <div className="bg-contact bg-no-repeat bg-cover bg-right lg:bg-center h-screen w-screen relative">
            <div className="absolute h-24 w-full bg-white">
                <div className="flex items-center justify-between">
                    <div className="pt-7 pl-9">
                        <Image src="/deeplawnlogo.png" height={41} width={236}/>
                    </div>
                    <AiOutlineMenu className="md:hidden text-green-900 h-8 w-8 mt-4 mr-9"/>
                    <div className="hidden md:flex md:items-center md:pt-7 md:pr-9">
                        <a><span className="bg-gradient-to-r from-green-500 to-green-900 text-white font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer">Contact us</span></a>
                        <a><span className="text-green-700 font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer hover:text-green-600">Sign in</span></a>
                        <a><span className="text-green-700 font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer hover:text-green-600">Sign up</span></a>
                    </div>
                </div>
            </div>
            <section>
                <div className="absolute top-28 lg:top-28 container">
                    <div className="w-64 h-8 mx-auto">
                        <span className="text-green-700 px-10 font-bold text-2xl uppercase">Contact us</span>
                    </div>
                </div>
                <div className="absolute top-36 lg:top-42 container">
                    <div className="w-97 h-8 mx-auto pl-8">
                        <span className="text-gray-800 font-medium text-sm capitalize">Contact our team by completing and submitting this form.</span>
                    </div>
                </div>
            </section>
            <form>
                <div className="absolute container top-48 lg:top-42 md:ml-10">
                    <div className="bg-white w-96 sm:w-97 lg:w-98 h-auto p-4 mb-2 shadow-2xl rounded-2xl border-2 border-gray-300 mx-auto">
                        <div className="mt-2">
                            <span className="font-semibold text-lg text-gray-800">Name</span>
                            <input className="block border border-green-500 p-3 mt-2 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold text-lg text-gray-800">Company</span>
                            <input className="block border border-green-500 p-3 mt-2 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold text-lg text-gray-800">E-Mail</span>
                            <input className="block border border-green-500 p-3 mt-2 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold text-lg text-gray-800">Password</span>
                            <input className="block border border-green-500 p-3 mt-2 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold text-lg text-gray-800">Message</span>
                            <textarea rows="5" cols="5" className="block border border-green-500 p-3 mt-2 w-full rounded-2xl focus:outline-none" required/>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-gradient-to-r from-green-500 to-green-900 text-white px-7 py-2 rounded-full">Sign up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
     );
}
 
export default Contact;