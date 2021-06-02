import React from 'react';
import DashboardLayout from '../../components/dashboard-layout/dashboard-layout';
import BarChart from '../../components/chart/BarChart';
import DoughnutChart from '../../components/chart/DoughnutChart';
import SimpleBarChart from '../../components/chart/SimpleBarChart';
import LineChart from '../../components/chart/LineChart';
import RadarChart from '../../components/chart/BubbleChart';
import Footer from '../../components/Footer';

const Widget = () => {
    return ( 
        <>
        <DashboardLayout>
 <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
 <div className="h-96 bg-gray-50 overflow-auto m-4 lg:m-2 p-4 rounded-lg shadow-md">
 <section class="text-gray-600  body-font">
     <h1 className="px-5 pb-3 text-xl font-medium">Timeline</h1>
  <div class="container p-5 mx-auto">
        <div class="flex relative pb-20 mb-3 bg-gray-50">
          <div class="h-full w-10 absolute inset-0 -ml-2 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-5 h-5 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-500 mb-1 tracking-wider">10 minutes ago</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div class="flex relative pb-20 mb-3 bg-gray-50">
          <div class="h-full w-10 absolute inset-0 -ml-2 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-5 h-5 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
           
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xs text-gray-500 mb-1 tracking-wider">12 minutes ago</h2>
            <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div>
        <div class="flex relative pb-20 mb-3 bg-gray-50">
          <div class="h-full w-10 absolute inset-0 -ml-2 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-5 h-5 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
           
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xs text-gray-500 mb-1 tracking-wider">20 minutes ago</h2>
            <p class="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div class="flex relative pb-20 mb-3 bg-gray-50">
          <div class="h-full w-10 absolute inset-0 -ml-2 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-5 h-5 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
           
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xs text-gray-500 mb-1 tracking-wider">1 hour ago</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div class="flex relative bg-gray-50 pb-6">
          <div class="flex-shrink-0 w-5 h-5 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xs text-gray-500 mb-1 tracking-wider">4 hours ago</h2>
            <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
  </div>
</section>
 </div>

<div className="h-96 overflow-auto m-4 lg:m-2 p-4 rounded-lg shadow-md">
<h1 className="px-5 pb-3 text-xl font-medium">Timeline-2</h1>
<section class="text-gray-600 body-font">
  <div class="container p-5 mx-auto flex flex-wrap">
    <div class="flex relative pb-20 sm:items-center w-full">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Shooting Stars</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center w-full">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">The Catalyzer</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center w-full">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center w-full">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<div className="h-96 overflow-auto m-4 lg:m-2 p-4 rounded-lg shadow-md divide-y divide-gray-300">
    <h1 className="px-5 pb-3 text-xl font-medium">Notification</h1>
    <div className="p-5 flex items-center justify-between">
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Dr sultan send a photo.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 inline-flex items-center justify-center text-green-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
        <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 inline-flex items-center justify-center text-yellow-800 relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        </div>        
         <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
</div>

<div className="h-96 overflow-auto m-4 lg:m-2 p-4 rounded-lg shadow-md divide-y divide-gray-300">
    <h1 className="px-5 pb-3 text-xl font-medium">Notification-2</h1>
    <div className="p-5 flex items-start justify-between">
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Dr sultan send a photo.</span>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                success
            </span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 inline-flex items-center justify-center text-green-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-start justify-between">
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                danger
            </span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-start justify-between">
        <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 inline-flex items-center justify-center text-yellow-800 relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        </div>        
         <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                pending
            </span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    </div>

<div className="h-96 overflow-auto m-4 lg:m-2 p-4 rounded-lg shadow-md divide-y divide-gray-300">
    <h1 className="px-5 pb-3 text-xl font-medium">Message</h1>
    <div className="p-5 flex items-start justify-between">
        
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Dr sultan send a photo.</span>
            <div className="flex items-center">
                <span className="mr-3 px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-800 text-white">
                    Reply
                </span>
                <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full border border-red-800 text-red-800">
                    Delete
                </span>
            </div>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 inline-flex items-center justify-center text-green-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-start justify-between">
       
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <div className="flex items-center">
                <span className="mr-3 px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-800 text-white">
                    Reply
                </span>
                <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full border border-red-800 text-red-800">
                    Delete
                </span>
            </div>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
            
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-start justify-between">
        <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 inline-flex items-center justify-center text-yellow-800 relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        </div>        
         <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <div className="flex items-center">
                <span className="mr-3 px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-800 text-white">
                    Reply
                </span>
                <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full border border-red-800 text-red-800">
                    Delete
                </span>
            </div>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
</div>

<div className="h-96 overflow-auto m-4 lg:m-2 p-4 rounded-lg shadow-md divide-y divide-gray-300">
    <h1 className="px-5 pb-3 text-xl font-medium">To Do List</h1>
    <div className="p-5 flex items-center justify-between">
    <input type="checkbox" className="text-gray-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Get up.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 inline-flex items-center justify-center text-green-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
    <input type="checkbox" className="text-gray-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Walk</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
    <input type="checkbox" className="text-gray-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>        
         <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Meeting</span>
            <div className="flex items-center">
            </div>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
    <input type="checkbox" className="text-gray-700 focus:ring-gray-900 rounded-sm 2xl:h-5 2xl:w-5"></input>        
         <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Groceries</span>
            <div className="flex items-center">
            </div>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
</div>

</div>
       
       <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-6">
            <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
              <div class="flex-shrink-0 w-20 h-20 rounded-full bg-green-500 inline-flex items-center justify-center text-green-200 relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
                  <div className="ml-4">
                      <span className="text-gray-400 font-medium text-xl block mb-1 uppercase">Patient</span>
                      <div className="flex items-center">
                      <span className="text-gray-900 font-medium text-2xl block mb-1">3280</span>
                      <span className="px-2 py-1 ml-6 inline-block text-sm leading-5 font-semibold rounded-full bg-green-500 text-gray-800">
                        + 3.5%
                    </span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
              <div class="flex-shrink-0 w-20 h-20 rounded-full bg-yellow-500 text-yellow-100 inline-flex items-center justify-center relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            </div>
                  <div className="ml-4">
                      <span className="text-gray-400 font-medium text-xl block mb-1 uppercase">Bills</span>
                      <div className="flex items-center">
                      <span className="text-gray-900 font-medium text-2xl block mb-1">2570</span>
                      <span className="px-2 py-1 ml-6 inline-block text-sm leading-5 font-semibold rounded-full bg-yellow-500 text-yellow-800">
                        + 3.5%
                    </span>
                      </div>
                  </div>
              </div>
          </div>
      
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
              <div class="flex-shrink-0 w-20 h-20 rounded-full bg-red-500 text-red-100 inline-flex items-center justify-center relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
                  <div className="ml-4">
                      <span className="text-gray-400 font-medium text-xl block mb-1 uppercase">Revenue</span>
                      <div className="flex items-center">
                      <span className="text-gray-900 font-medium text-2xl block mb-1">364.50 K</span>
                      <span className="px-2 py-1 ml-6 inline-block text-sm leading-5 font-semibold rounded-full bg-red-500 text-white">
                        + 3.5%
                    </span>
                      </div>
                  </div>
              </div>
          </div>
       
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">

              <div className="flex items-center justify-between">
              <div class="flex-shrink-0 w-20 h-20 rounded-full bg-green-500 text-green-100 inline-flex items-center justify-center relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
            </div>
                  <div className="ml-4">
                      <span className="text-gray-400 font-medium text-xl block mb-1 uppercase">Revenue</span>
                      <div className="flex items-center">
                      <span className="text-gray-900 font-medium text-2xl block mb-1">364.50 K</span>
                      <span className="px-2 py-1 ml-6 inline-block text-sm leading-5 font-semibold rounded-full bg-green-500 text-white">
                        + 3.5%
                    </span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md flex items-center justify-between">
            <div class="flex-shrink-0 w-20 h-20 rounded-full bg-red-500 text-red-100 inline-flex items-center justify-center relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
                <span className="text-gray-400 font-medium text-xl mb-1 uppercase">Appointments</span>
                <div className="flex justify-end">
                    <span className="text-gray-900 font-medium text-2xl block mb-1">76</span>
                </div>
            </div>  
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md flex items-center justify-between">
            <div class="flex-shrink-0 w-20 h-20 rounded-full bg-green-500 text-green-100 inline-flex items-center justify-center relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            </div>
            <div>
                <span className="text-gray-400 font-medium text-xl mb-1 uppercase">Earnings</span>
                <div className="flex justify-end">
                    <span className="text-gray-900 font-medium text-2xl block mb-1">$56 K</span>
                </div>
            </div>  
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md flex items-center justify-between">
            <div class="flex-shrink-0 w-20 h-20 rounded-full bg-blue-500 text-blue-100 inline-flex items-center justify-center relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            </div>
            <div>
                <span className="text-gray-400 font-medium text-xl mb-1 uppercase">Total Patient</span>
                <div className="flex justify-end">
                    <span className="text-gray-900 font-medium text-2xl block mb-1">783 K</span>
                </div>
            </div>  
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md flex items-center justify-between">
            <div class="flex-shrink-0 w-20 h-20 rounded-full bg-green-300 text-white inline-flex items-center justify-center relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
            </svg>
            </div>
            <div>
                <span className="text-gray-400 font-medium text-xl mb-1 uppercase">Chef</span>
                <div className="flex justify-end">
                    <span className="text-gray-900 font-medium text-2xl block mb-1">$ 76</span>
                </div>
            </div>  
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
             <span className="text-gray-900 font-medium text-4xl mb-2">Total Students</span>
             <span className="text-gray-700 font-medium text-2xl block mb-2">3280</span>
             <div class="h-3 relative max-w-xl rounded-full overflow-hidden mb-2">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full bg-green-500 absolute w-1/2"></div>
             </div>
             <span className="mb-2">80% increase in 20 days</span>
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
             <span className="text-gray-900 font-medium text-4xl mb-2">New Students</span>
             <span className="text-gray-700 font-medium text-2xl block mb-2">245</span>
             <div class="h-3 relative max-w-xl rounded-full overflow-hidden mb-2">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full bg-yellow-500 absolute w-1/2"></div>
             </div>
             <span className="mb-2">50% increase in 20 days</span>
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
             <span className="text-gray-900 font-medium text-4xl mb-2">Total Course</span>
             <span className="text-gray-700 font-medium text-2xl block mb-2">28</span>
             <div class="h-3 relative max-w-xl rounded-full overflow-hidden mb-2">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full bg-red-500 absolute w-1/2"></div>
             </div>
             <span className="mb-2">70% increase in 20 days</span>
          </div>
          <div className="h-auto m-4 lg:m-2 p-6 rounded-lg shadow-md">
             <span className="text-gray-900 font-medium text-4xl mb-2">Fee collection</span>
             <span className="text-gray-700 font-medium text-2xl block mb-2">$ 21560</span>
             <div class="h-3 relative max-w-xl rounded-full overflow-hidden mb-2">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full bg-green-800 absolute w-1/2"></div>
             </div>
             <span className="mb-2">70% increase in 20 days</span>
          </div>
       </div>
       
       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
           <div className="h-auto m-4 lg:m-2 p-4 shadow-md rounded-md">
           <div class="w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap ">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">About Me</th>
          </tr>
          <p className="px-4 py-3 leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3">Gender</td>
                <td class="px-4 py-3">Male</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3">Education</td>
                <td class="px-4 py-3">Ph.D</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3">Designation</td>
                <td class="px-4 py-3">Professor</td>
              </div>
          </tr>
         <div className="flex items-center justify-between">
             <div className="p-4 mx-auto"><sapn className="text-2xl">150</sapn><span className="text-gray-500 block">Projects</span></div>
             <div className="p-4 mx-auto"><sapn className="text-2xl">140</sapn><span className="text-gray-500 block">Uploads</span></div>
             <div className="px-4 mx-auto"><sapn className="text-2xl">45</sapn><span className="text-gray-500 block">Tasks</span></div>
         </div>
        </tbody>
      </table>
    </div>
           </div>

           <div className="col-span-2">
             <div className="max-h-full">
               <BarChart/>
               </div>
            </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="h-auto m-4 lg:m-2 p-4 shadow-md rounded-md">
           <div className="w-full mx-auto">
                   <img className="h-32 w-32 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center text-4xl tracking-wide font-medium mt-2">Diego Moss</span>
                   <span className="block text-center tex-lg text-gray-500 mt-1">Blue Studios</span>
                 <div className="flex items-center justify-center mt-2">
                     <button className="text-green-500 border border-green-500 rounded-full px-8 py-2">Follow</button>
                 </div>
            </div>
           <div className="flex items-center justify-between">
             <div className="p-4 mx-auto"><sapn className="text-2xl">150</sapn><span className="text-gray-500 block">Projects</span></div>
             <div className="p-4 mx-auto"><sapn className="text-2xl">140</sapn><span className="text-gray-500 block">Uploads</span></div>
             <div className="px-4 mx-auto"><sapn className="text-2xl">45</sapn><span className="text-gray-500 block">Tasks</span></div>
         </div>
           </div>
           <div className="h-auto m-4 lg:m-2 shadow-md rounded-md">
           <div className="w-full bg-green-200 py-6 mx-auto">
                   <img className="h-32 w-32 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR1bHQlMjBib3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                   <span className="block text-center text-gray-500 text-4xl tracking-wide font-medium mt-2">Diego Moss</span>
                   <span className="block text-center text-gray-500 text-lg mt-1">Blue Studios</span>
            </div>
           <div className="divide-y divide-gray-200">
             <div className="p-4 mx-auto flex justify-between items-center"><sapn className="text-2xl">Patient Gender</sapn><span className="text-gray-500 block">Male</span></div>
             <div className="p-4 mx-auto flex justify-between items-center"><sapn className="text-2xl">Age</sapn><span className="text-gray-500 block">24 Y/O</span></div>
         </div>
           </div>
           <div><DoughnutChart className=""/></div>
       </div>
        
       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
           <div className="h-auto m-4 lg:m-2 p-4 shadow-md rounded-md bg-green-500">
           <div class="w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap ">
        <tbody className="divide-y divide-gray-200">
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-white">Blood type</td>
                <td class="px-4 py-3 text-white">O +</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-white">Allergies</td>
                <td class="px-4 py-3 text-white">Pencillin</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-white">Disease</td>
                <td class="px-4 py-3 text-white">Diabetese</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-white">Temperature</td>
                <td class="px-4 py-3 text-white">34 Degrees</td>
              </div>
          </tr>
        </tbody>
      </table>
    </div>
           </div>
           <div className="h-auto m-4 lg:m-2 p-4 shadow-md rounded-md bg-yellow-500">
           <div class="w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap ">
        <tbody className="divide-y divide-gray-900">
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-gray-900">Blood type</td>
                <td class="px-4 py-3 text-black">O +</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-gray-900">Allergies</td>
                <td class="px-4 py-3 text-black">Pencillin</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-gray-900">Disease</td>
                <td class="px-4 py-3 text-black">Diabetese</td>
              </div>
          </tr>
          <tr>
              <div className="flex items-center justify-between">
                <td class="px-4 py-3 text-gray-900">Temperature</td>
                <td class="px-4 py-3 text-black">34 Degrees</td>
              </div>
          </tr>
        </tbody>
      </table>
    </div>
           </div>
           <div className="h-auto m-4 lg:m-2 py-10 px-4 shadow-md rounded-md lg:col-span-2 xl:col-span-1">
                    <span className="block mt-2 text-center font-medium text-2xl text-gray-500">Don't have badges yet.</span>
                <div className="flex justify-center align-middle">
                    <button className="bg-green-500 text-white px-4 py-2  rounded-full mt-4">Earn Badges</button>
                </div>
           </div>
       </div>

       <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
         <div className="h-auto bg-green-100 m-4 lg:m-2 p-4 shadow-md rounded-md">
           <div>
             <h1 className="text-2xl font-medium text-green-600">MARKET NOW</h1>
             <h1 className="text-2xl font-medium text-green-600">345667</h1>
             <div><SimpleBarChart/></div>
           </div>
         </div>
         <div className="h-auto bg-green-100 m-4 lg:m-2 p-4 shadow-md rounded-md">
           <div>
             <h1 className="text-2xl font-medium text-green-600">SALES ANALYSIS</h1>
             <h1 className="text-2xl font-medium text-green-600">345667</h1>
             <div><LineChart/></div>
           </div>
         </div>
       </div>
       <div className="grid grid-cols-1 gap-6">
       <div className="h-auto m-4 lg:m-2 p-4 rounded-lg shadow-md divide-y divide-gray-300">
    <h1 className="px-5 pb-3 text-xl font-medium">Notification</h1>
    <div className="p-5 flex items-center justify-between">
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Dr sultan send a photo.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 inline-flex items-center justify-center text-green-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
        <img className="h-12 w-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
        <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="p-5 flex items-center justify-between">
        <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 inline-flex items-center justify-center text-yellow-800 relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        </div>        
         <div className="w-1/2 ml-4">
            <span className="text-gray-900 font-medium block">Report created succesfully.</span>
            <span className="block text-gray-500">29th july 2020 - 02:36 PM</span>
        </div>
        <div class="ml-20 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-800 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div> 
    </div>
    <div className="flex justify-center align-middle">
      <div className="w-1/2 ">
      <RadarChart/>
      </div>
    </div>
    
</div>
       </div>
        
        <Footer/>
        </DashboardLayout>
        </>
     );
}
 
export default Widget;