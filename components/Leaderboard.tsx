import { registration } from '@/types'
import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';

type Props = {
  data: registration[],
  sortData: (type: string) => void,
}

function Leaderboard({ data, sortData }: Props) {

  const [modal, setModal] = useState(false);

  return (
    <div className='h-full min-h-screen w-full'>

      <div className="absolute right-0 mr-5 inline-block text-left z-10">
        <div>
          <button onClick={() => { setModal((prev) => !prev) }} type="button" className="border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
            Sort
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
              </path>
            </svg>
          </button>
        </div>
        {modal && <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => { sortData("courses"); setModal((prev) => !prev) }} className="w-full text-left block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>
                  Courses
                </span>
              </span>
            </button>
            <button onClick={() => { sortData("badges"); setModal((prev) => !prev) }} className="w-full text-left block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>
                  Skill Badges
                </span>
              </span>
            </button>
            <button onClick={() => { sortData("genai"); setModal((prev) => !prev) }} className="w-full text-left block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>
                  GenAi Game
                </span>
              </span>
            </button>
            <button className="w-full text-left block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <span className="flex flex-col">
                <span>
                  LeaderBoard (coming soon)
                </span>
              </span>
            </button>
          </div>
        </div>}
      </div>


      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      User
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      # of Courses Completed
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      # of Skill Badges Completed
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      # of GenAI Game Completed
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      Total Completion of Both Paths
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      Account Status
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {data.map((item, index) => {
                    return (<>
                      <tr key={index}>
                        <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item['Student Name']}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item['# of Courses Completed']}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item['# of Skill Badges Completed']}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item['# of GenAI Game Completed']}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap flex justify-center">
                            {item['Total Completions of both Pathways'] === 'Yes' ? <BsCheckCircleFill color={'#5cb85c'} size={30} /> : <IoIosCloseCircle color={'#d9534f'} size={30} />}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${item['Redemption Status'] === 'Yes' ? 'text-green-900' : 'text-white'}`}>
                            <span aria-hidden="true" className={`absolute inset-0 ${item['Redemption Status'] === 'Yes' ? 'bg-green-200' : 'bg-red-600'} rounded-full opacity-50`}>
                            </span>
                            <span className="relative">
                              {item['Redemption Status'] === 'Yes' ? 'active' : 'inactive'}
                            </span>
                          </span>
                        </td>
                      </tr>
                    </>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Leaderboard