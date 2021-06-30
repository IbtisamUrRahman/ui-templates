import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'

const SignUp = () => {
    return ( 
        <div className="font-deeplawn bg-contact bg-no-repeat bg-cover bg-right lg:bg-center min-h-screen min-w-screen relative">
            <div className="absolute h-24 w-full bg-white">
                <div className="flex items-center justify-between">
                    <div className="pt-7 pl-9">
                        <Image className="" src="/deeplawnlogo.png" height={41} width={236}/>
                    </div>
                    <AiOutlineMenu className="md:hidden text-green-900 h-8 w-8 mt-4 mr-9"/>
                    <div className="hidden md:flex md:items-center md:pt-7 md:pr-9">
                        <a><span className="text-green-700 font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer hover:text-green-600">Contact us</span></a>
                        <a><span className="text-green-700 font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer hover:text-green-600">Sign in</span></a>
                        <a><span className="bg-gradient-to-r from-green-500 to-green-900 text-white font-bold text-base ml-8 px-4 py-2 rounded-full cursor-pointer">Sign up</span></a>
                    </div>
                </div>
            </div>
            <section>
                <div className="absolute top-32 lg:left-4 xl:left-20 container">
                    <div className="mx-auto w-96 h-16">
                        <span className="text-green-700 px-10 font-bold text-2xl uppercase">create an account</span>
                        <div className="flex items-center px-12">
                            <span className="text-gray-800 text-sm font-medium capitalize">already have an account ?</span>
                            <a><span className="text-gray-800 text-sm font-bold ml-4 capitalize cursor-pointer hover:text-gray-600">sign in</span></a>
                        </div>
                    </div>
                </div>
            </section>
            <form>
                <div className="absolute container top-48 lg:left-4 xl:left-20">
                    <div className="bg-white w-96 sm:w-97 md:w-98 h-98 p-4 shadow-2xl rounded-lg border-2 border-gray-300 mx-auto">
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
                            <span className="font-semibold text-lg text-gray-800">Confirm password</span>
                            <input className="block border border-green-500 p-3 mt-2 w-full rounded-full focus:outline-none" required/>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-gradient-to-r from-green-500 to-green-900 text-white px-7 py-2 rounded-full">Sign up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;