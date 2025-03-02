import React from "react";

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      {children}
    </div>
  </div>
);

const ContentBox: React.FC = () => (
  <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
    <p className="text-2xl text-gray-400 dark:text-gray-500">
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </p>
  </div>
);

export default MainContent;
