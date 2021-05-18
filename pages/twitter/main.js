import {FaTwitter, FaHashtag, FaHandPaper} from 'react-icons/fa';
import { MdBookmarkBorder } from "react-icons/md";
import { AiFillBell, AiOutlinePicture, AiOutlineGif, AiOutlineCamera, AiOutlineHeart, AiOutlineRetweet, AiOutlineSetting } from "react-icons/ai";
import { BiEnvelope, BiArrowFromBottom, BiDotsHorizontalRounded } from "react-icons/bi";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { RiHome7Fill, RiFileList2Fill, RiBarChartHorizontalFill } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import { BsArrowRightShort, BsChat } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";




const twitterMain = () => {
    return ( 
        <div className="bg-black min-h-screen">
        <div className="container mx-auto">
        <div className="flex items-center">
            <div className="w-1/4">
                <div className="flex items-center p-4"> 
                     <FaTwitter size="2em" className="text-gray-300"/>
                </div>
                <button className="">
                 <div className="flex items-center p-4">
                    <RiHome7Fill size="2em" className="cursor-pointer text-gray-300 mr-4 "/>
                    <a className="text-base font-bold text-gray-300 cursor-pointer ">Home</a>
                 </div>
                </button>
                 <div className="flex items-center p-4">
                    <FaHashtag size="2em" className="curosr-pointer text-gray-300 mr-4"/>
                    <a className="text-base font-bold text-gray-300 cursor-pointer">Explore</a>
                 </div>
                 <div className="flex items-center p-4">
                    <AiFillBell size="2em" className="cursor-pointer text-gray-300 mr-4"/>
                    <a className="text-base font-bold text-gray-300 cursor-pointer">Notifications</a>
                 </div>
                 <div className="flex items-center p-4">
                     <BiEnvelope size="2em" className="cursor-pointer text-gray-300 mr-4"/>
                     <a className="text-base font-bold text-gray-300 cursor-pointer">Messages</a>
                 </div>
                 <div className="flex items-center p-4">
                    <MdBookmarkBorder size="2em" className="cursor-pointer text-gray-300 mr-4"/>
                    <a className="text-base font-bold text-gray-300 cursor-pointer">BookMarks</a>
                 </div>
                 <div className="flex items-center p-4">
                     <RiFileList2Fill size="2em" className="cursor-pointer text-gray-300 mr-4"/>
                     <a className="text-base font-bold text-gray-300 cursor-pointer  ">Lists</a>
                 </div>
                 <div className="flex items-center p-4">    
                     <CgProfile size="2em" className="cursor-pointer text-gray-300 mr-4"/>
                     <a className="text-base font-bold text-gray-300 cursor-pointer ">Profile</a>
                 </div>
                 <div className="flex items-center p-4">
                     <CgMoreO size="2em" className="cursor-pointer text-gray-300 mr-4"/>
                     <a className="text-base font-bold text-gray-300 cursor-pointer ">More</a>
                 </div>
                 <button className="bg-blue-500 text-gray-300 text-lg font-medium rounded-3xl ml-8 px-4 py-2 w-2/3 hover:bg-blue-400 ">Tweet</button>
            </div>



            <div className="w-1/2 h-full border-r-2 border-l-2 border-gray-500">
                <div className="w-full h-8 border-b-2 border-gray-500">
                    <span className="text-gray-300 text-base font-extrabold px-2 py-4">Home</span>
                </div>
                 <div className="block border-b-6 border-gray-100">
                     <div className="flex items-center py-1 px-3">
                         <img className="w-10 h-10 object-cover rounded-full mr-3" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&w=500&q=60"></img>
                        <input className="bg-black text-gray-500 tracking-widest h-12 focus:outline-none" placeholder="What's happening?"></input>
                        {/* <span className="text-gray-500 text-base font-semibold tracking-widest">What's happening?</span> */}
                    </div>
                     <div className="flex items-center justify-between ml-16 ">
                        <div>
                          <AiOutlinePicture size="2em" className="cursor-pointer text-blue-500 mr-2 inline-block rounded-sm"/>
                          <AiOutlineGif size="2em" className="cursor-pointer text-blue-500 mr-2 inline-block"/>
                          <GrEmoji size="2em" className="cursor-pointer text-blue-500 mr-2 inline-block"/>
                          <RiBarChartHorizontalFill size="2em" className="cursor-pointer text-blue-500 mr-2 inline-block"/>
                          <AiOutlineCamera size="2em" className="cursor-pointer text-blue-500 inline-block"/>
                        </div>
                        <div className="mr-3">
                           <button className="bg-blue-500 text-gray-300 text-lg font-medium rounded-3xl px-3 py-1 hover:bg-blue-400 ">Tweet</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-3 py-1 mt-4">
                <img className="w-12 h-12 object-cover rounded-full border-2 border-red-600 mr-3" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&w=500&q=60"></img>
                 <div className="block"> 
                 <div className="flex items-center mb-2">
                     <AiOutlineRetweet size="1em" className="text-gray-400 font-bold mr-4 "/>
                     <p className="text-gray-400 text-sm font-semibold">Azam Khan Retweeted</p>

                 </div>
                 <div className="flex items-center">
                    <IoRocketSharp size="2em" className="cursor-pointer text-red-500 mr-2 inline-block"/>
                    <strong className="text-gray-400 mr-1">Ch Daniel</strong>
                    <span className="text-gray-400 mr-2">@chdaniel</span>
                    <span className="text-gray-400">.9h</span>
                 </div>
                    
                     <p className="text-gray-400">I went 190 <BsArrowRightShort className="inline-block"/> 1000 followers in 1 mo</p>
                    
                 </div>
                </div>
                <div className=" ml-16">
                    <p className="text-gray-400 pl-2 leading-10 tracking-wider">I'd love to make... not an ebook/course. <br/> But a video recording sharing what I wish I knew but didn't find it publically <br/> Drop <FaHandPaper className="inline-block"/> below I will share early acces.</p>
                </div>
                <img className="h-64 w-10/12 object-cover mr-4 ml-16 rounded-lg" src="https://www.cnet.com/a/img/6WbbMZvq_qIeKjcH8rnLFW13C2c=/940x0/2018/04/03/25133287-c117-491d-ac33-e1dbc5c36188/screen-shot-2018-04-03-at-2-58-09-pm.png"></img>
                <div className="flex items-center justify-evenly mt-4 px-3">
                    <BsChat size="1em" className="text-gray-400 font-bold"/>
                    <AiOutlineRetweet size="1em" className="text-gray-400 font-bold "/>
                    <AiOutlineHeart size="1em" className="text-gray-400 font-bold"/>
                    <BiArrowFromBottom size="1em" className="text-gray-400 font-bold"/>
                </div> 
            </div>



            <div className="w-1/4 container ml-12">
                <div className="bg-gray-700 w-full h-12 rounded-2xl ">
                    <input className="bg-gray-700 mt-1 ml-2 px-3 py-2 focus:outline-none" placeholder="Search Twitter"/>
                </div>
                <div className="bg-gray-700 w-full h-48 mt-4 rounded-2xl">
                    <div className="flex items-center justify-between mt-1  px-3 py-2  border-b border-gray-600">
                        <span className="text-gray-100 text-xl font-bold ">Cote d'Ivore Trends</span>
                        <AiOutlineSetting size="2em" className="text-blue-500"/>
                    </div>
                    <div className="border-b border-gray-600">
                    <div className="flex items-center justify-between mt-1 ml-2 px-3 py-2 ">
                        <div>
                             <span className="text-gray-400 mr-2">1 .</span>
                             <span className="text-gray-400">Trending</span>
                        </div>
                        <BiDotsHorizontalRounded className="text-gray-400"/>
                    </div>
                    <div className="block ml-2 px-3 py-2 -mt-2">
                       <span className="text-gray-100 font-bold text-base">Amine</span>
                       <br/>
                       <span className="text-gray-400 text-md font-semibold ">7300 tweets</span>
                    </div>
                    </div>
                    <span className="text-blue-500 font-semibold text-lg mt-3 ml-2 px-3 py-2">Show more</span>
                </div>

                <div className="bg-gray-700 w-full h-48 mt-4 rounded-2xl">
                    <div className="flex items-center justify-between mt-1  px-3 py-2  border-b border-gray-600">
                        <span className="text-gray-100 text-xl font-bold ">Who to Follow</span>
                    </div>
                    <div className="border-b border-gray-600">
                    <div className="flex items-center justify-between mt-1 ml-2 px-3 py-2 ">
                        <div className="flex items-center">
                             <img className="w-10 h-10 object-cover rounded-full mr-3" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&w=500&q=60"></img>
                             <span className="text-gray-400 text-lg">Michael Andreuzza</span>
                        </div>
                        <button className="border border-blue-600 text-blue-600 text-lg rounded-full px-4 py-1">Follow</button>
                    </div>
                    </div>
                    <div className="border-b border-gray-600">
                    <div className="flex items-center justify-between mt-1 ml-2 px-3 py-2 ">
                        <div className="flex items-center">
                             <img className="w-10 h-10 object-cover rounded-full mr-3" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&w=500&q=60"></img>
                             <span className="text-gray-400 text-lg">Zia Al-Huq</span>
                        </div>
                        <button className="border border-blue-600 text-blue-600 text-lg rounded-full px-4 py-1">Follow</button>
                    </div>
                    </div>
                    <span className="text-blue-500 font-semibold text-lg mt-3 ml-2 px-3 py-2">Show more</span>
                </div>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default twitterMain;