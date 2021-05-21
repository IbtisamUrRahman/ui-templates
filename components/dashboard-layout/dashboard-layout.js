const DashboardLayout = ({children}) => {
  return ( 
      <>
      <div id="app" class="h-screen flex">
<div
class="hidden lg:block w-64 bg-gray-100 border-r  px-8 py-4 overflow-auto"
>
<svg class="h-4 w-4 " xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" /></svg>
<nav class="mt-8">
  <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Issues</h3>
  <div class="mt-2 -mx-3">
    <a href="#" class="flex justify-between items-center bg-gray-200 rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-900">All</span>
      <span class="text-sm text-gray-700 font-semibold">36 </span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Assigned to me</span>
      <span class="text-sm text-gray-600 font-semibold">2 </span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Created by me</span>
      <span class="text-sm text-gray-600 font-semibold">4 </span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Archived</span>
      <span class="text-sm text-gray-600 font-semibold"></span>
    </a>
  </div>
  {/* <!-- second part --> */}
  <h3 class="mt-8 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Tags</h3>
  <div class="mt-2 -mx-3">
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Bug</span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Feature request</span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Marketing</span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Enhancement</span>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <span class="text-sm font-medium text-gray-600">Design</span>
    </a>
  </div>
  <button class="flex items-center text-sm font-medium text-gray-60 mt-2 hover:bg-gray-300 px-2 py-2 rounded">
    <svg class="text-gray-500" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.279 5.333v14M5.279 12.334h14"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="text-sm text-gray-500 ml-2">New Project</span>
  </button>
</nav>
</div>

{/* <!-- side bar ends --> */}

<div class="flex-1 min-w-0 flex flex-col bg-white">
<div class="flex-shrink-0 border-b-2 border-gray-200">
  <header class="px-6">
    <div class="flex justify-between items-center border-gray-200 py-3">
      <div class="flex-1 flex">
        <button class="lg:hidden">
          <svg class="text-gray-600" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.5 10.407H3.14M21.14 6.407h-18M15.5 14.407H3.14M12.5 18.407H3.14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div class="ml-3 relative w-64 lg:ml-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
            <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                d="M11.508 19.479a8 8 0 100-16 8 8 0 000 16zM21.508 21.478l-4.35-4.35"
              />
            </svg>
          </span>
          <input
            placeholder="Search"
            class="rounded-md border border-gray-400 pl-12 pr-4 py-3 text-sm leading-tight placeholder-gray-600 text-gray-900"
          />
        </div>
      </div>

      <div class="flex items-center">
        <button>
          <svg class="text-gray-600" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.62 8.05a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9zM14.35 21.05a1.999 1.999 0 01-3.46 0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button class="ml-6">
          <img
            class="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
            alt="profile"
          />
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between py-2">
      {/* <div class="flex items-center">
        <h2 class="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>

        <div class="ml-6 flex flex-center">
          <span class="-ml-2 rounded-full border-2 border-white">
            <img
              class="h-6 w-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
              alt="avatar1"
            />
          </span>
          <span class="-ml-2 rounded-full border-2 border-white">
            <img
              class="h-6 w-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
              alt="avatar2"
            />
          </span>
          <span class="-ml-2 rounded-full border-2 border-white">
            <img
              class="h-6 w-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
              alt="avatar3"
            />
          </span>
          <span class="-ml-2 rounded-full border-2 border-white">
            <img
              class="h-6 w-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1555435024-2c4d456b63be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
              alt="avatar4"
            />
          </span>
        </div>
      </div> */}

      {/* <!-- all issue and avatar ends --> */}
      {/* <div class="hidden md:flex">
        <span class="p-1 inline-flex border bg-gray-200 rounded-md">
          <button class="px-2 py-1 rounded">
            <svg class="text-gray-600" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <button class="px-2 py-1 bg-white rounded shadow">
            <svg class="text-gray-600" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                d="M12.933 3.555v18m0-18h7a2 2 0 012 2v14a2 2 0 01-2 2h-7v-18zm0 0h-7a2 2 0 00-2 2v14a2 2 0 002 2h7v-18z"
              />
            </svg>
          </button>
        </span>
        <button
          class="ml-3 flex items-center justify-between text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
        >
          <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              d="M12.279 5.333v14M5.279 12.334h14"
            />
          </svg>
          <span class="text-sm text-gray-200">New Issue</span>
        </button>
      </div> */}
    </div>
  </header>
</div>

 {/* header components ends */}

{children}
 
</div>
</div>
      </>
   );
}






export default DashboardLayout;