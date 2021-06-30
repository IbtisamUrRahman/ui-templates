import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'


const Home = () => {
    
    return ( 
        <div className="font-deeplawn relative p-0 m-0 box-border">
            <div className="bg-hero bg-center bg-cover bg-no-repeat w-screen h-screen absolute"></div>       
            <nav>
                <div className="lg:hidden absolute w-11/12 top-8 left-8 lg:left-12">
                    <div className="flex items-start justify-between">
                    <Image src="/deeplawnlogo.png" width={236} height={41} />
                    <AiOutlineMenu className="text-gray-100 h-8 w-8 mr-4 sm:mr-8"/>
                    </div>
                </div>
                <div className="hidden absolute lg:flex items-center top-8 left-12">
                     <Image src="/deeplawnlogo.png" width={236} height={41} />
                     <a><span className="text-green-700 font-bold text-base ml-4 xl:ml-8 px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white">Contact us</span></a>
                     <a><span className="text-green-700 font-bold text-base ml-4 xl:ml-8 px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white">Sign in</span></a>
                     <a><span className="text-green-700 font-bold text-base ml-4 xl:ml-8 px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white">Sign up</span></a>
                </div>
            </nav>
            <section>
                <div className="absolute h-36 w-80 lg:h-24 lg:w-97 top-48 left-12 lg:top-64 lg:left-16">
                    <span className="text-green-700 font-medium text-4xl uppercase">Instant, online lawn <span className="font-bold">Measurment</span> </span>
                </div>
                <div className="absolute h-16 w-80 lg:h-8 lg:w-96 top-80 left-12 lg:top-96 lg:left-16 lg:-mt-6">
                    <p className="text-black font-medium text-base leading-5 lg:leading-4">Provide your customers with instant lawn care quotes, without surveying their property.</p>
                </div>
                <div className="absolute bg-gradient-to-r from-green-500 to-green-900 top-80 left-12 lg:top-96 lg:left-16  mt-20 lg:mt-8  rounded-full">
                    <button className=" px-6 py-2 text-white font-medium text-lg capitalize">get started</button>
                </div>
            </section>
        </div>
     );
}
 
export default Home;