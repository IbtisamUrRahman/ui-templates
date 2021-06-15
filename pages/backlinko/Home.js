// import Link from 'next-routes';
import Footer from "../../components/backlinko/Footer";
import {AiOutlineMenu} from 'react-icons/ai';

const Home = () => {
    return ( 
        <>
        <div className="h-auto bg-gradient-to-b from-white to-gray-100 -mr-12 lg:-mr-0">
        <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 xl:w-5/6 3xl:w-3/6">
            <header>
                <div className="flex items-center justify-between px-8">
                    <a title="Backlinko" href="/" class="css-z35jpy"><svg xmlns="http://www.w3.org/2000/svg" width="188" height="25" viewBox="0 0 188 25"><g color="#00d07e" fill="currentColor" fill-rule="evenodd"><path d="M10.17 24.34H0V1.11h9a12.94 12.94 0 014.07.57 5.76 5.76 0 012.58 1.53 6 6 0 011.56 4.05 4.78 4.78 0 01-1.76 4.06 6.2 6.2 0 01-.84.58c-.15.08-.43.2-.82.38a6.12 6.12 0 013.43 1.94 5.39 5.39 0 011.28 3.68 6.23 6.23 0 01-1.66 4.28c-1.227 1.44-3.45 2.16-6.67 2.16zm-5-13.82h2.47a8.34 8.34 0 003.21-.47A2 2 0 0011.9 8a2.06 2.06 0 00-1-2 7.62 7.62 0 00-3.25-.5H5.19l-.02 5.02zm0 9.44h3.57a8 8 0 003.34-.55 2.18 2.18 0 001.11-2.16A2.07 2.07 0 0012 15.12a10.16 10.16 0 00-3.77-.51h-3l-.06 5.35zM38.82 24.34l-2.16-5h-9.73l-2.17 5h-5.51l10-23.23h5l10 23.23h-5.43zM31.81 8l-2.92 6.74h5.81L31.81 8z"></path><path d="M55.91 19.76a7.65 7.65 0 006.25-3l3.32 3.43a12.54 12.54 0 01-18.16 1.06 11.47 11.47 0 01-3.47-8.56A11.55 11.55 0 0147.39 4 11.9 11.9 0 0156.05.58a12.25 12.25 0 019.57 4.36l-3.23 3.65a7.54 7.54 0 00-6.11-3.06 7.13 7.13 0 00-5 1.91 6.67 6.67 0 00-2.08 5.16 7 7 0 002 5.2 6.5 6.5 0 004.71 1.96zM68.86 1.11H74v9.54l8.77-9.54h6.42L80 11.38c.8 1.107 2.273 3.173 4.42 6.2 2.15 3 3.75 5.28 4.82 6.76h-6l-6.81-9.17L74 17.76v6.58h-5.14V1.11z"></path><path d="M92.09 24.34L92.09 1.11 97.28 1.11 97.28 19.72 107.18 19.72 107.18 24.34z"></path><path d="M110.5 1.11L115.68 1.11 115.68 24.34 110.5 24.34z"></path><path d="M135.62 1.11L140.8 1.11 140.8 24.34 135.62 24.34 124.55 9.79 124.55 24.34 119.37 24.34 119.37 1.11 124.22 1.11 135.62 16.11z"></path><path d="M144.38 1.11h5.18v9.54l8.77-9.54h6.42l-9.24 10.27c.8 1.107 2.273 3.173 4.42 6.2s3.753 5.28 4.82 6.76h-6.05l-6.81-9.17-2.33 2.59v6.58h-5.18V1.11zM184.07 12.05h3.54A12.48 12.48 0 00184.27 4l-2.5 2.51a8.91 8.91 0 012.3 5.54zM175.56 21.46V25a12.46 12.46 0 008.07-3.34l-2.5-2.5a8.94 8.94 0 01-5.57 2.3zM174.66 3.54V0a12.48 12.48 0 00-8.07 3.34l2.51 2.5a9 9 0 015.56-2.3zM169.1 19.16l-2.51 2.5a12.48 12.48 0 008.07 3.34v-3.54a8.94 8.94 0 01-5.56-2.3z"></path><path d="M168.46 6.49L166 4a12.46 12.46 0 00-3.34 8.07h3.54a8.92 8.92 0 012.26-5.58zM166.15 13h-3.54a12.46 12.46 0 003.39 8l2.51-2.5a9 9 0 01-2.36-5.5zM184.07 13a8.94 8.94 0 01-2.3 5.57l2.5 2.5a12.46 12.46 0 003.34-8.07h-3.54zM181.13 5.84l2.5-2.5A12.46 12.46 0 00175.56 0v3.54a9 9 0 015.57 2.3z"></path></g></svg></a>
                   <AiOutlineMenu className="block h-8 w-8 lg:hidden"/>
                    <div className="hidden lg:flex lg:items-center">
                        <a className="font-medium text-lg hover:text-gray-600 cursor-pointer mr-20">Home</a>
                        <a className="font-medium text-lg hover:text-gray-600 cursor-pointer mr-20">About</a>
                        <a className="font-medium text-lg hover:text-gray-600 cursor-pointer">Newsletter</a>
                    </div>
                </div>
            </header>

            {/* hero section here */}

            <section>
                <div className="h-80 lg:h-96 w-full flex items-start ml-8 mt-20 overflow-hidden">
                    <div className="w-1/2">
                        <h1 className="font-extrabold text-3xl xl:text-4xl capitalize tracking-normal leading-relaxed">Get exclusive SEO tips that i only share with email subscribers</h1>
                        <div className="hidden bg-white h-28 lg:h-24 xl:h-28 lg:w-full 2xl:w-5/6 w-5/6 border border-gray-200 lg:flex items-start p-4 mt-4">
                          <img className="h-12 w-12 rounded-full object-cover" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/kieran-flanagan-1.png" />
                          <div className="ml-4">
                              <p className="font-medium text-sm xl:text-base text-gray-500">"I thought the blog was good. But the newsletter? <br className="block lg:hidden xl:block" /> Even better !"</p>
                              <p className="font-medium text-sm xl:text-base text-gray-500">Kieran Flangnan, VP Marketing at Hubspot</p>
                          </div>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:justify-between 2xl:w-5/6 w-full mt-4">
                            <input type="text" className="block w-full focus:outline-none lg:w-4/6 p-3 bg-white border border-gray-200" placeholder="Email Address"/>
                            <button className="mt-3 mb-4 block w-full lg:w-2/6 bg-green-500 text-gray-100 font-medium px-4 py-3 hover:bg-green-600">Try it</button>
                        </div>
                    </div>
                    <div className="w-1/2 2xl:pl-20 ml-12 mr-12">
                        <img className="h-4/6 w-3/4 object-cover" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/Brian_RT.webp"></img>
                    </div>
                </div>
             
            </section>
        </div>
        </div>
        <div className="block bg-gray-100 border-t border-b border-gray-300 -mr-12 lg:-mr-0 lg:hidden">
            <div className="container mx-auto w-5/6">
        <div className="bg-white h-28 md:h-24 w-full  border border-gray-200 flex items-start p-4 mt-4">
          <img className="h-12 w-12 rounded-full object-cover" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/kieran-flanagan-1.png" />
          <div className="ml-4">
            <p className="font-medium text-lg text-gray-500">"I thought the blog was good. But the newsletter? Even better !"</p>
            <p className="font-medium text-lg text-gray-500">Kieran Flangnan, VP Marketing at Hubspot</p>
         </div>
        </div>
        <div className="w-full mt-4">
            <input type="text" className="block w-full focus:outline-none p-3 bg-white border border-gray-200" placeholder="Email Address"/>
            <button className="mt-3 mb-4 block w-full bg-green-500 text-gray-100 font-medium px-4 py-3 hover:bg-green-600">Try it</button>
        </div>
        </div>
        </div>

        {/* main section here */}

        <main>
            <div className="h-auto my-10">
                <div className="container mx-auto w-full lg:w-5/6 xl:w-4/6 3xl:w-3/6">
                    <span className="font-medium text-xl text-green-500 uppercase flex justify-center mt-3">brian has been featured on </span>
                    <div class="container  ml-14 px-5 py-12 mx-auto">
                        <div class="flex items-center text-center">
                            <div class="p-4 w-1/2 mx-auto">
                            <img src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/entrepreneur-logo.svg"></img> 
                            </div>
                            <div class="p-4 w-1/2 mx-auto">
                               <img src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/forbes-logo.svg"></img>
                            </div>
                            <div class="p-4 w-1/2 mx-auto">
                                <img src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/huffpost-logo.svg"></img>
                            </div>
                            <div class="p-4 w-1/2 mx-auto">
                              <img src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/inc-logo.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

            {/* testimonials */}
            <div className="h-auto my-6 -mr-12 lg:-mr-0">
                <div className="container mx-auto pb-4 w-full lg:w-5/6 xl:w-4/6 3xl:w-3/6">
                <span className="font-medium text-xl text-green-500 uppercase flex justify-center mt-3">What other are saying </span>
                    <div className="h-56 md:h-48 lg:h-60 xl:h-46  border border-gray-200 rounded-lg mx-5 mt-24">
                        <img className="mx-auto h-28 w-28 rounded-full object-cover -mt-14" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/larry-kim.webp"></img>
                        <p className="text-gray-900 font-normal text-xl text-center mt-3 px-20 md:px-16 lg:px-24 md:text-xl lg:text-2xl">Brian's SEO is insane. If you want higher ranking, you need to read his stuff - he is the unicorn among sea of donkey SEOs.</p>
                        <div className="flex items-center justify-center mt-3 pb-3">
                            <strong className="text-gray-900 font-medium text-lg md:text-xl lg:text-2xl" >Larry Kim</strong>
                            <span className="text-gray-500 font-normal text-lg ml-2 md:text-xl lg:text-2xl"> - Word Stream</span>
                        </div>
                    </div>
                    <div className="h-56 md:h-48 lg:h-60 xl:h-46  border border-gray-200 rounded-lg mx-5 mt-24">
                        <img className="mx-auto h-28 w-28 rounded-full object-cover -mt-14" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/john-jantsch-480x480.webp"></img>
                        <p className="text-gray-900 font-normal text-xl text-center mt-3 px-20 md:px-16 lg:px-24 md:text-xl lg:text-2xl">Backlinko is one of my go-to resources for actionable SEO and content marketing advice.</p>
                        <div className="flex items-center justify-center mt-3 pb-3">
                            <strong className="text-gray-900 font-medium text-lg md:text-xl lg:text-2xl" >John Jantsch</strong>
                            <span className="text-gray-500 font-normal text-lg ml-2 md:text-xl lg:text-2xl"> - Author of Duct Tape Marketing</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* feature resources */}

            <div className="h-auto mt-6 pb-12 bg-gradient-to-b from-white to-gray-100 -mr-12 lg:-mr-0">
                <div className="bg-white container mx-auto py-8 border border-gray-200 rounded-lg w-full lg:w-4/6 xl:w-3/6">
                    <span className="font-bold text-2xl text-green-500 uppercase flex justify-center mt-3">Featured Resources</span>
                    <span className="font-bold text-4xl text-gray-900 flex justify-center mt-8">SEO in 2021: The Definitive Guide</span>
                    <p className="text-gray-500 font-medium text-xl text-center mt-5 px-20 md:px-16 lg:px-24 md:text-xl lg:text-2xl">Learn the exact SEO strategies, tips and tactics that are working great right now.</p>
                    <div className="w-42 h-42 mt-5  px-20">
                        <img className="h-full w-full rounded-2xl" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/12/seo-in-2021-post-banner-1280x670.webp"></img>
                    </div>
                    <div className="block px-20 mt-5 lg:flex lg:items-center">
                        <input type="text" className="w-4/6 p-3 bg-white border border-gray-300 rounded-l-lg" placeholder="Your Email Address"/>
                        <button className="w-2/6 bg-green-500 text-gray-100 font-medium px-4 py-3 rounded-r-lg">Get The Free Guide</button>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer/>
            
        </>
     );
}
 
export default Home;