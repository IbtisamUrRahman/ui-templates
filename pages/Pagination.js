import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border  text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border  text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Next
        </a>
      </div>
      <div className="flex justify-evenly">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> ... <span className="font-medium">10</span> out of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div className="ml-96">
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
              className="relative inline-flex items-center px-4 py-2  bg-blue-700 text-sm rounded-lg font-medium text-white hover:bg-blue-500"
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
      </div>
      <div className="ml-96 flex items-center">
          <span className="text-gray-700 text-sm font-medium">Show rows</span>
          <option className="bg-gray-700 text-gray-200 text-sm font-medium ml-4 px-2 py-1 rounded-md hover:bg-gray-600 cursor-pointer">100</option>
      </div>
      </div>
      </div>
    
  )
}