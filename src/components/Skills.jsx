import React from "react";
import background from "../assets/b2.png"
const Skills = () => {
  return (
    <section
      className="bg-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto py-10 px-10 rounded-xl bg-black shadow-2xl" >
        <h2 className="text-3xl text-center mb-4 font-bold">Skills</h2>
        <div className="rounded-md p-4">
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="rotate-[135deg] size-full"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1.5"
                    stroke-dasharray="75 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                    50
                  </span>
                  <span className="text-blue-600 dark:text-blue-500 block">
                    Java
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="rotate-[135deg] size-full"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    strokeWidth="1.5"
                    strokeDasharray="100 100"
                    strokeLinecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    strokeWidth="1.5"
                    strokeDasharray="73 100"
                    strokeLinecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                    73
                  </span>
                  <span className="text-blue-600 dark:text-blue-500 block">
                    PHP, Laravel
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="size-full rotate-180"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    75
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-500 block">
                    Vue.js
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="size-full rotate-180"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    75
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-500 block">
                    React.js, Redux
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="size-full rotate-180"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    75
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-500 block">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="size-full rotate-180"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    75
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-500 block">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="size-full rotate-180"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    75
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-500 block">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-slate-700 rounded-md p-2">
              <div className="relative size-40 mx-auto">
                <svg
                  className="size-full rotate-180"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    stroke-width="1"
                    stroke-dasharray="50 100"
                    stroke-linecap="round"
                  ></circle>

                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="1.5"
                    stroke-dasharray="37.5 100"
                    stroke-linecap="round"
                  ></circle>
                </svg>

                <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    75
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-500 block">
                    C/C++
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
