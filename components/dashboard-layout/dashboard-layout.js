import styles from "./dashboard-layout.module.css"
import Link from 'next/link';
import {RiDashboardLine, RiBook3Line} from 'react-icons/ri';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineShopping, AiOutlineLayout} from 'react-icons/ai';
import {BsGear} from 'react-icons/bs';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {FiChevronDown} from 'react-icons/fi';





const DashboardLayout = ({children}) => {
 
  return ( 
      <>
      <div id="app" class="h-screen flex font-body">
<div
class="hidden lg:block h-full w-64 bg-gray-900 overflow-hidden  px-8 py-4 lg:fixed lg:top-0  lg:overflow-y-auto"
>
  <div className="ml-10">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300 h-20 w-20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" /></svg>
  </div>
<nav class="mt-4">
  <div class="mt-2 -mx-3">
    <a href="#" class="flex justify-between items-center px-3 py-2 mt-3 group rounded-md border-l-8 border-indigo-300">
      <div className="flex items-center group ">
        <RiDashboardLine className="h-5 w-5 mr-2 text-gray-300 group-hover:text-indigo-300 transform group-hover:scale-125"/>
        <Link href="/fasto-admin/dashboard"><span class="text-lg font-medium text-gray-300 active:pl-2 cursor-pointer group-hover:text-indigo-300 transform group-hover:scale-125">Dashboard</span></Link>
      </div>
      <FiChevronDown className="h-4 w-4 fill-current text-gray-300 group-hover:text-indigo-300"/>
    </a>
    <div className="ml-10 my-3">
       <Link href="/fasto-admin/projects"><span className="font-medium text-sm text-gray-300 cursor-pointer block transform hover:text-indigo-300">Projects</span></Link> 
      <Link href="/fasto-admin/Contacts"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Contact</span></Link>
      <Link href="/fasto-admin/messages"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Chats</span></Link>
      <Link href="/fasto-admin/kanban"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Kanban</span></Link> 
    </div>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2 group">
      <div className="flex items-center group">
        <HiOutlineMail className="h-5 w-5 mr-3 text-gray-300 group-hover:text-indigo-300"/>
      <span class="text-lg font-medium text-gray-300 group-active:border-l-8 group-hover:text-indigo-300">Email</span>
      </div>
      <FiChevronDown className="h-4 w-4 fill-current text-gray-300 group-hover:text-indigo-300"/>
    </a>
    <div className="ml-10 my-3">
       <Link href="/fasto-admin/apps/email/compose"><span className="font-medium text-sm text-gray-300 hover:text-indigo-300 cursor-pointer block">Compose</span></Link>
      <Link href="/fasto-admin/apps/email/inbox"><span className="font-medium text-sm text-gray-300 hover:text-indigo-300 block cursor-pointer mt-2">Inbox</span></Link>
      <Link href="/fasto-admin/apps/email/read"><span className="font-medium text-sm text-gray-300 hover:text-indigo-300 block cursor-pointer mt-2">Read</span></Link> 
    </div>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2 group">
      <div className="flex items-center group">
        <AiOutlineShopping className="h-5 w-5 mr-3 text-gray-300 group-hover:text-indigo-300"/>
        <span class="text-lg font-medium text-gray-300 group-hover:text-indigo-300">Shop</span>
      </div>
      <FiChevronDown className="h-4 w-4 fill-current text-gray-300 group-hover:text-indigo-300"/>
    </a>
    <div className="ml-10 my-3">
      <Link href="/fasto-admin/apps/shop/profile"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Profile</span></Link>
      <Link href="/fasto-admin/apps/shop/shop-product-grid"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Product Grid</span></Link>
      <Link href="/fasto-admin/apps/shop/shop-product-list"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Product List</span></Link>
      <Link href="/fasto-admin/apps/shop/shop-product-details"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Product Details</span></Link>
      <Link href="/fasto-admin/apps/shop/orders"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Orders</span></Link>
      <Link href="/fasto-admin/apps/shop/checkout"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Checkout</span></Link>
      <Link href="/fasto-admin/apps/shop/invoice"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Invoice</span></Link>
      <Link href="/fasto-admin/apps/shop/customers"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Customers</span></Link> 
    </div>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
      <div className="flex items-center group">
        <BsGear className="h-5 w-5 mr-3 text-gray-300 group-hover:text-indigo-300"/>
        <Link href="/fasto-admin/widget"><span class="text-lg font-medium cursor-pointer text-gray-300 hover:text-indigo-300">Widget</span></Link>
      </div>
    </a>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2 group">
      <div className="flex items-center group">
        <HiOutlineDocumentText className="h-5 w-5 mr-3 text-gray-300 group-hover:text-indigo-300"/>
        <span class="text-lg font-medium text-gray-300 group-hover:text-indigo-300">Forms</span>
      </div>
      <FiChevronDown className="h-4 w-4 fill-current text-gray-300 group-hover:text-indigo-300"/>
    </a>
    <div className="ml-10 my-3">
     <Link href="/fasto-admin/form-wizard"><span className="font-medium text-sm text-gray-300 cursor-pointer block hover:text-indigo-300">Wizard</span></Link> 
    </div> 
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2 group">
      <div className="flex items-center group">
        <RiBook3Line className="h-5 w-5 mr-3 text-gray-300 group-hover:text-indigo-300"/>
        <span class="text-lg font-medium text-gray-300 group-hover:text-indigo-300">Pages</span>
      </div>
      <FiChevronDown className="h-4 w-4 fill-current text-gray-300 group-hover:text-indigo-300"/>
    </a>
    <div className="ml-10 my-3">
     <Link href="/fasto-admin/pages/register"><span className="font-medium text-sm text-gray-300 cursor-pointer block hover:text-indigo-300">Register</span></Link> 
      <Link href="/fasto-admin/pages/login"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Login</span></Link>
      <Link href="/fasto-admin/pages/lockscreen"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Lockscreen</span></Link>
      <Link href="/fasto-admin/pages/error"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Error</span></Link>
    </div>
    <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2 group">
      <div className="flex items-center group">
        <AiOutlineLayout className="h-5 w-5 mr-3 text-gray-300 group-hover:text-indigo-300"/>
        <span class="text-lg font-medium text-gray-300 group-hover:text-indigo-300">Tables</span>
      </div>
      <FiChevronDown className="h-4 w-4 fill-current text-gray-300 group-hover:text-indigo-300"/>
    </a>
    <div className="ml-10 my-3">
     <Link href="/fasto-admin/tables/bootstrap"><span className="font-medium text-sm text-gray-300 cursor-pointer block hover:text-indigo-300">Bootstrap table</span></Link> 
     <Link href="/fasto-admin/tables/datatables"><span className="font-medium text-sm text-gray-300 cursor-pointer block mt-2 hover:text-indigo-300">Datatable</span></Link>
    </div>
  </div>
  <button class="w-full text-gray-60 mt-2 border border-blue-500 p-2 rounded transform hover:-translate-y-0.5">
    <span class="text-sm font-medium text-center text-blue-500 ml-2">New Project</span>
  </button>
</nav>
</div>
<div className="hidden bg-gray-50 lg:block lg:w-2/6 lg:-ml-20 xl:-ml-44 2xl:-ml-64 3xl:w-1/6 3xl:-ml-44 4xl:-ml-56"></div>

{/* <!-- side bar ends --> */}

<div class="flex-1 min-w-0 flex flex-col bg-white">
<div class="flex-shrink-0 border-b-2 border-gray-200">
  <header class="px-6 bg-white">
    <div class="flex justify-between items-center border-gray-200 py-3">
      <div class="flex-1 flex">
        <button class="lg:hidden">
          <svg class="text-gray-300" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <svg class="text-gray-800" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg class="text-gray-300" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <button class="px-2 py-1 bg-white rounded shadow">
            <svg class="text-gray-300" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span class="text-sm text-gray-300">New Issue</span>
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