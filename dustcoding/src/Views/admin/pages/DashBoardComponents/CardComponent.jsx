import React from 'react'

const CardComponent = () => {
  return (
    <div className="relative mb-4 flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-gray-800 lg:mb-0">
      <div className="mb-0 rounded-t border-0 px-0">
        <div className="flex flex-wrap items-center px-4 py-2">
          <div className="relative w-full max-w-full flex-1 flex-grow">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
              Social Traffic
            </h3>
          </div>
          <div className="relative w-full max-w-full flex-1 flex-grow text-right">
            <button
              className="mr-1 mb-1 rounded bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600 dark:bg-gray-100 dark:text-gray-800 dark:active:text-gray-700"
              type="button"
            >
              See all
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="w-full border-collapse items-center bg-transparent">
            <thead>
              <tr>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                  Referral
                </th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                  Visitors
                </th>
                <th className="min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700 dark:text-gray-100">
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                  Facebook
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  5,480
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  <div className="flex items-center">
                    <span className="mr-2">70%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                        <div
                          style={{ width: "70%" }}
                          className="flex flex-col justify-center whitespace-nowrap bg-blue-600 text-center text-white shadow-none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-700 dark:text-gray-100">
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                  Twitter
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  3,380
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  <div className="flex items-center">
                    <span className="mr-2">40%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                        <div
                          style={{ width: "40%" }}
                          className="flex flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-700 dark:text-gray-100">
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                  Instagram
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  4,105
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  <div className="flex items-center">
                    <span className="mr-2">45%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden rounded bg-pink-200 text-xs">
                        <div
                          style={{ width: "45%" }}
                          className="flex flex-col justify-center whitespace-nowrap bg-pink-500 text-center text-white shadow-none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-700 dark:text-gray-100">
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                  Google
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  4,985
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                        <div
                          style={{ width: "60%" }}
                          className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-700 dark:text-gray-100">
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                  Linkedin
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  2,250
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                  <div className="flex items-center">
                    <span className="mr-2">30%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                        <div
                          style={{ width: "30%" }}
                          className="flex flex-col justify-center whitespace-nowrap bg-blue-700 text-center text-white shadow-none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardComponent