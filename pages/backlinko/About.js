import {AiOutlineMenu} from 'react-icons/ai';
import Footer from "../../components/backlinko/Footer";


const About = () => {
    return ( 
        <div className="antialiased">
          <div className="h-auto pl-4 lg:pl-0 bg-gradient-to-b from-white to-gray-100 -mr-12 lg:-mr-0">
        <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
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

            <section class="text-gray-600 body-font">
                <div class="container mx-auto lg:flex px-5 py-24 lg:flex-row flex-col items-start">
                    <div class="lg:flex-grow lg:w-5/6  lg:pr-16 flex flex-col md:items-start text-center lg:text-left mb-16 md:mb-0 items-center">
                    <h1 class="font-extrabold  text-7xl lg:text-5xl xl:text-7xl mb-4 text-gray-900 lg:leading-snug">Want higher rankings 
                        <br class="hidden xl:inline-block"/> and  more traffic ?
                    </h1>
                    <p class="mt-6 text-3xl font-normal leading-normal">You’ve come to the right place. Backlinko is the place for next-level SEO training and link building strategies.</p>
                    </div>
                    <div class="hidden lg:block lg:max-w-lg lg:w-full md:w-1/6 w-5/6">
                        <img class="object-cover object-center rounded-xl" alt="hero" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/Brian-0048-480x480.webp"/>
                    </div>
                </div>
            </section>
        </div>
        </div>

        {/* grid section */}

        <div className="h-auto bg-white pl-4 lg:pl-0 -mr-12 lg:-mr-0">
        <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
        <section class="text-gray-600 body-font border border-gray-300">
            <div class="container px-5 py-12 mx-auto">
            
                <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                        <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/inc-logo-1.svg"></img>
                    <p class="text-center leading-relaxed mt-3 font-medium text-base">"Brian Dean is one of the world’s most sought-after SEO experts"</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/smt-logo.svg"></img>
                    <p class="text-center leading-relaxed mt-3 font-medium text-base">“Exceptionally talented”</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/thf-logo.svg"></img>
                    <p class="text-center leading-relaxed mt-3 font-medium text-base">"Backlinko: a recommended resource to become a better SEO"</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/tnw-logo.svg"></img>
                    <p class="text-center leading-relaxed mt-3 font-medium text-base">"SEO genius</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/forbes-logo.svg"></img>
                    <p class="text-center leading-relaxed mt-3 font-medium text-base">“Backlinko is the place for next-level SEO training and link building strategies”</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/business-logo.svg"></img>
                    <p class="text-center leading-relaxed mt-3 font-medium text-base">“Brian Dean’s Backlinko Blog is the go-to SEO guide of many digital marketers and entrepreneurs”</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
        </div>    

        {/* description */}
        <div className="h-auto bg-white pl-4 lg:pl-0 -mr-12 mt-6 lg:-mr-0 pb-20">
            <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
                <h1 className="text-gray-900 font-bold text-3xl text-center" >What Backlinko is all about</h1>
                <div className="block lg:flex lg:items-center lg:justify-between lg:px-0 mt-8 lg:mt-12 px-12">
                    <div>
                        <p className="text-normal font-medium text-lg leading-loose">If you’ve ever wondered: <br/> “Where can I find actionable SEO advice that gets results?”, you’re in the right place. Backlinko is where professional marketers turn for proven SEO advice.
                            <br/> My effective SEO advice is why marketers from companies like Apple, Disney, IBM, and Amazon subscribe to my email newsletter.</p>
                    </div>
                    <div className="h-80 lg:h-72 2xl:h-60 px-20 lg:px-6 lg:pt-6 border border-gray-300 mt-8 lg:ml-4 lg:mt-0">
                        <span className="text-green-500 text-3xl lg:text-2xl font-bold leading-loose">“Brian is a really smart SEO guy who knows what he’s talking about because he lives it every day.”</span>
                        <img className="mx-auto mt-4 xl:mt-12" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/inc-logo-1.svg"></img>
                    </div>
                </div>
            </div>
        </div>

        {/* trusted by */}

        <div className="h-auto bg-gray-100 pl-4 lg:pl-0 -mr-12 mt-6 lg:-mr-0 pb-10">
            <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
                <div className="bg-white mx-16 px-12 py-8 rounded-xl text-center mt-8">
                    <span className="text-4xl font-bold text-gray-900">Want actionable SEO advice from me ? Then Hop on the newsletter.</span>
                    <div className="block lg:flex lg:items-center mt-6">
                        <input type="text" className="block w-full rounded-lg lg:rounded-r-none focus:outline-none lg:w-4/6 p-3 bg-white border border-gray-200" placeholder="Email Address"/>
                        <button className="mt-3 mb-4 rounded-lg lg:rounded-l-none block w-full lg:w-2/6 bg-green-500 text-gray-100 text-lg font-medium px-4 py-3 hover:bg-green-600">Try it</button>
                    </div>
                </div>
                <section class="text-gray-600 body-font">
            <div class="container px-5 py-6 mx-auto">
            <span className="font-bold text-2xl text-green-500 uppercase flex justify-center mt-3 mb-5">trusted by </span>
                <div class="flex items-center flex-wrap -m-4 text-center">
                <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                        <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/tb-disney.svg"></img>
                    </div>
                </div>
                <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/tb-forbes.svg"></img>
                    </div>
                </div>
                <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/tb-amazon.svg"></img>
                    </div>
                </div>
                <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div class="px-4 py-6 rounded-lg">
                    <img className="mx-auto" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/tb-ibm.svg"></img>
                    </div>
                </div>
                </div>
            </div>
        </section>
            </div>
        </div>

        {/* how backlinko helps */}

        <div className="h-auto pl-4 lg:pl-0 -mr-12 mt-6 lg:-mr-0">
            <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
                <h1 className="text-gray-900 font-extrabold text-5xl text-center leading-normal" >How Backlinko Helps You Get Higher Rankings and More Traffic</h1>
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 pt-24 py-12 md:flex-row flex-col items-start">
                        <div class="hidden w-full lg:block lg:max-w-lg lg:w-1/4 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded" alt="hero" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/Brian-0045-300x385.webp"/>
                        </div>
                        <div class="lg:flex-grow lg:w-3/4 md:pl-12 flex flex-col lg:items-start lg:text-left items-center text-center">
                        <p class="mb-8 leading-relaxed text-2xl lg:text-xl xl:leading-loose font-medium">
                                Most so-called “SEO experts” say: “To succeed with SEO, all you need to do is create great content.”

                                If only it were that easy…

                                I learned the hard way that there’s a lot more to SEO than “great content”.

                                And that’s where Backlinko comes in.

                                This blog is where I show you the exact tips, strategies and techniques you need to get higher rankings. No fluff or “high-level” advice. Just insanely actionable advice that works.

                                Oh, while you’re here make sure you sign up for free updates to learn the proven SEO strategies that I’m talking about:
                        </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        {/* higher rankings */}


        <div className="h-auto  pl-4 lg:pl-0 -mr-12 mt-6 lg:-mr-0 pb-10">
            <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
                <div className="bg-green-500 rounded-lg px-24 py-12">
                    <h1 className="text-white font-extrabold text-4xl xl:text-5xl text-center leading-normal" >Want higher rankings ?</h1>
                    <p className="text-white text-center text-2xl font-medium xl:mx-20 mt-10">Then join 110,424 others (including top marketers from Apple, Disney, IBM, and Amazon) that get my weekly SEO tips via email.</p>
                    <div className="block lg:flex lg:items-center mt-10">
                        <input type="text" className="block w-full rounded-lg lg:rounded-r-none focus:outline-none lg:w-4/6 p-3 bg-white border border-gray-200" placeholder="Email Address"/>
                        <button className="mt-3 mb-4 rounded-lg lg:rounded-l-none block w-full lg:w-2/6 bg-black text-gray-100 text-lg font-medium px-4 py-3 hover:bg-green-600">Try it</button>
                    </div>
                </div>
            </div>
        </div>

        {/* about brian dean */}

        <div className="h-auto pl-4 lg:pl-0 -mr-12 mt-6 lg:-mr-0">
            <div className="container lg:mx-auto pt-5 lg:mb-5 h-auto w-full lg:w-5/6 3xl:w-3/6">
                <h1 className="text-gray-900 font-extrabold text-5xl text-center leading-normal" >About Brian Dean</h1>
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 pt-24 py-12 md:flex-row flex-col items-start">
                        <div class="hidden w-full lg:block lg:max-w-lg lg:w-1/4 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded" alt="hero" src="https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/Brian-0052-300x300.webp"/>
                        </div>
                        <div class="lg:flex-grow lg:w-3/4 md:pl-12 flex flex-col lg:items-start lg:text-left items-center text-center">
                        <p class="mb-4 leading-relaxed text-2xl lg:text-xl xl:leading-loose font-medium">
                        Backlinko was founded by Brian Dean, an internationally recognized SEO expert.

                        After failing with his first five online businesses, Brian finally struck gold with a site in the personal finance space in 2012. He created Backlinko to teach the lessons he learned along the way.

                        Since launching Backlinko, Brian quickly made a name for himself by publishing insanely practical strategies that marketers can use to grow their online business. Backlinko is now one of the most popular marketing blogs online.

                        </p>
                        <div className="flex items-center">
                        <a className="bg-blue-500 px-3 py-1 text-white rounded-md mr-4">
                            Follow @backlinko
                        </a>
                        <a className="bg-white px-3 py-1 text-black border border-black rounded-sm">
                            117K followers
                        </a>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <Footer/>

        </div>
     );
}
 
export default About;