import React from 'react'

const TasksComponents = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 text-black dark:text-white md:grid-cols-2 xl:grid-cols-3">
      <div className="md:col-span-2 xl:col-span-3">
        <h3 className="text-lg font-semibold">
          Task summaries of recent sprints
        </h3>
      </div>
      <div className="md:col-span-2 xl:col-span-1">
        <div className="rounded bg-gray-200 p-3 dark:bg-gray-800">
          <div className="flex justify-between py-1 text-black dark:text-white">
            <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
            <svg
              className="fill-current h-4 cursor-pointer text-gray-600 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
            </svg>
          </div>
          <div className="mt-2 text-sm text-black dark:text-gray-50">
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Delete all references from the wiki
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Remove analytics code
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Do a mobile first layout
              <div className="mt-2 ml-2 flex items-start justify-between text-gray-500 dark:text-gray-200">
                <span className="flex items-center text-xs">
                  <svg
                    className="fill-current mr-1 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                  </svg>
                  3/5
                </span>
                <img
                  src="https://i.imgur.com/OZaT7jl.png"
                  className="rounded-full"
                  alt="img"
                />
              </div>
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Check the meta tags
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Think more tasks for this example
              <div className="mt-2 ml-2 flex items-start justify-between text-gray-500 dark:text-gray-200">
                <span className="flex items-center text-xs">
                  <svg
                    className="fill-current mr-1 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                  </svg>
                  0/3
                </span>
              </div>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Add a card...
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded bg-gray-200 p-3 dark:bg-gray-800">
          <div className="flex justify-between py-1 text-black dark:text-white">
            <h3 className="text-sm font-semibold">Tasks in DEVELOPMENT</h3>
            <svg
              className="fill-current h-4 cursor-pointer text-gray-600 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
            </svg>
          </div>
          <div className="mt-2 text-sm text-black dark:text-gray-50">
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Delete all references from the wiki
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Remove analytics code
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Do a mobile first layout
              <div className="mt-2 ml-2 flex items-start justify-between text-xs text-white">
                <span className="flex items-center rounded bg-pink-600 p-1 text-xs">
                  <svg
                    className="fill-current h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z" />
                  </svg>
                  2
                </span>
              </div>
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Check the meta tags
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Think more tasks for this example
              <div className="mt-2 ml-2 flex items-start justify-between text-gray-500">
                <span className="flex items-center text-xs">
                  <svg
                    className="fill-current mr-1 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                  </svg>
                  0/3
                </span>
              </div>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Add a card...
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded bg-gray-200 p-3 dark:bg-gray-800">
          <div className="flex justify-between py-1 text-black dark:text-white">
            <h3 className="text-sm font-semibold">Tasks in QA</h3>
            <svg
              className="fill-current h-4 cursor-pointer text-gray-600 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
            </svg>
          </div>
          <div className="mt-2 text-sm text-black dark:text-gray-50">
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Delete all references from the wiki
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Remove analytics code
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Do a mobile first layout
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Check the meta tags
            </div>
            <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
              Think more tasks for this example
              <div className="mt-2 ml-2 flex items-start justify-between text-gray-500 dark:text-gray-200">
                <span className="flex items-center text-xs">
                  <svg
                    className="fill-current mr-1 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                  </svg>
                  0/3
                </span>
              </div>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Add a card...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksComponents