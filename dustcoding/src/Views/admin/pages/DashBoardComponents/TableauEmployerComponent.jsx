import React from 'react'

const TableauEmployerComponent = () => {
  return (
    <div className="mx-4 mt-4">
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y bg-white dark:divide-gray-700 dark:bg-gray-800">
              <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Hans Burger</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        10x Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$855.85</td>
                <td className="px-4 py-3 text-xs">
                  <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">15-01-2021</td>
              </tr>
              <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Jolina Angelie</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Unemployed
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$369.75</td>
                <td className="px-4 py-3 text-xs">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 font-semibold leading-tight text-yellow-700">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">23-03-2021</td>
              </tr>
              <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Dave Li</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Influencer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$775.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="rounded-full bg-gray-100 px-2 py-1 font-semibold leading-tight text-gray-700 dark:bg-gray-700 dark:text-gray-100">
                    Expired
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">09-02-2021</td>
              </tr>
              <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Rulia Joberts</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Actress
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$1276.75</td>
                <td className="px-4 py-3 text-xs">
                  <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">17-04-2021</td>
              </tr>
              <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Hitney Wouston</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Singer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$863.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700 dark:bg-red-700 dark:text-red-100">
                    Denied
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">11-01-2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:grid-cols-9">
          <span className="col-span-3 flex items-center">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>
          <span className="col-span-4 mt-2 flex sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="focus:shadow-outline-purple rounded-md rounded-l-lg px-3 py-1 focus:outline-none"
                    aria-label="Previous"
                  >
                    <svg
                      aria-hidden="true"
                      className="fill-current h-4 w-4"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                    1
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                    2
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline-purple rounded-md border border-r-0 border-blue-600 bg-blue-600 px-3 py-1 text-white transition-colors duration-150 focus:outline-none dark:border-gray-100 dark:bg-gray-100 dark:text-gray-800">
                    3
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                    8
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="focus:shadow-outline-purple rounded-md rounded-r-lg px-3 py-1 focus:outline-none"
                    aria-label="Next"
                  >
                    <svg
                      className="fill-current h-4 w-4"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TableauEmployerComponent