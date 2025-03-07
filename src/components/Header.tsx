import React from "react";

const Header: React.FC = () => (
  <nav className="bg-white border-gray-200 sticky top-0 z-50 h-16">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Coffee Shop</h1>
      </div>
      <div className="flex items-center">
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button> */}

        <form className="max-w-md mx-auto w-120">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
    </div>
  </nav>
);

export default Header;
