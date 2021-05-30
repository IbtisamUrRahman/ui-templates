import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = () => {
  return (
   <div className="mx-auto">
     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2  bg-gray-700 text-sm rounded-lg font-medium text-white hover:bg-blue-500"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="hidden md:inline-flex relative items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="hidden md:inline-flex relative items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
   </div>
    
  )
}
export default Pagination;