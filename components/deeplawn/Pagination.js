import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between rounded-lg sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between sm:flex-row-reverse">
        <div>
            <div className="border border-green-900 rounded-full px-8 py-1 mt-3 mr-5">
                <label for="cars">Display items:</label>
                    <select  className="ml-3 border-none" id="cars">
                    <option value="volvo">10</option>
                    <option value="saab">20</option>
                    <option value="opel">50</option>
                    <option value="audi">100</option>
                </select>
            </div>
          {/* <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p> */}
        </div>
        <div className="absolute left-96 mt-3">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative border-none inline-flex items-center px-2 py-2 rounded-l-md border  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white  text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-green-900 text-white border-none rounded-full relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 border-none relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 border-none hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center border-none px-4 py-2 border  bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 border-none hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 border-none relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 border-none relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 border-none rounded-r-md border  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}