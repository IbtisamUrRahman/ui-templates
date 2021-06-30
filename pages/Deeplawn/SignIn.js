import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'

const SignIn = () => {
    return ( 
        <>
        <div className="font-deeplawn bg-hero bg-no-repeat bg-cover bg-center min-h-screen min-w-screen relative">
            <div className="absolute h-24 w-full bg-white">
                <div className="flex items-center justify-between">
                    <div className="pt-7 pl-9">
                        <Image className="" src="/deeplawnlogo.png" height={41} width={236}/>
                    </div>
                    <AiOutlineMenu className="md:hidden text-green-900 h-8 w-8 mt-4 mr-9"/>
                    <div className="hidden md:flex md:items-center md:pt-7 md:pr-9">
                        <a><span className="text-green-700 font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer hover:text-green-600">Contact us</span></a>
                        <a><span className="bg-gradient-to-r from-green-500 to-green-900 text-white font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer">Sign in</span></a>
                        <a><span className="text-green-700 font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer hover:text-green-600">Sign up</span></a>
                    </div>
                </div>
            </div>
            <div className="absolute h-12 w-97 top-40 left-12 sm:left-16 md:left-20">
                <span className="text-green-700 font-bold text-4xl capitalize">sign in to your <br className="lg:hidden"/>  account</span>
            </div>
                <form>
                    <div className="absolute bg-white h-95 w-96 sm:w-97 top-64 lg:top-56 left-10 md:left-16 p-6 border-2 border-gray-200 shadow-2xl rounded-2xl">
                        <div className="mt-3">
                            <span className="font-semibold text-lg text-gray-800">Email Address</span>
                            <input className="block border border-green-500 p-3 mt-3 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="mt-3">
                            <span className="font-semibold text-lg text-gray-800">Password</span>
                            <input className="block border border-green-500 p-3 mt-3 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="absolute mt-6">
                            <div className="h-8 w-96 flex items-center">
                                <span className="text-green-700 text-base font-medium capitalize">Don't have an account ?</span>
                                <span className="font-bold text-base text-green-900 capitalize ml-3 cursor-pointer">sign up</span>
                            </div>
                            <a><span className="text-green-700 text-base capitalize mt-3 underline cursor-pointer">forgot your password ?</span></a>
                            <div className="mt-3">
                                <button type="submit" className="bg-gradient-to-r from-green-500 to-green-900 px-8 py-2 text-white rounded-full">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <footer>
                    <div className="bg-gradient-to-r from-green-500 to-green-900 h-16 w-full absolute bottom-0">
                        <div className="flex justify-center align-middle mt-6">
                            <a><span className="hidden sm:block text-gray-100 font-bold text-base mr-7 sm:mr-5 md:mr-10  cursor-pointer">Home</span></a>
                            <a><span className="hidden sm:block text-gray-100 font-bold text-base mr-7 sm:mr-5 md:mr-10  cursor-pointer">sign up</span></a>
                            <a><span className="hidden sm:block text-gray-100 font-bold text-base mr-7 sm:mr-5 md:mr-10  cursor-pointer">Login</span></a>
                            <a><span className="text-gray-100 font-bold text-base mr-7 sm:mr-5 md:mr-10  cursor-pointer">contact us</span></a>
                            <a><span className="text-gray-100 font-bold text-base mr-7 sm:mr-5 md:mr-10  cursor-pointer">privacy policy</span></a>
                            <a><span className="text-gray-100 font-bold text-base  cursor-pointer">terms of services</span></a>
                        </div>
                    </div>
                </footer>
        </div>
        </>
     );
}
 
export default SignIn;