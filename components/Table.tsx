import React, { useEffect, useState } from 'react';
import TableBody from './TableBody';
import { registration } from '@/types';
import Speedometer from './Speedometer';

type Props = {
    data: registration[],
    leaderBoard: boolean
}

function Table({ data, leaderBoard }: Props) {
    const [Participationdata, setParticipationdata] = useState<registration[]>(data);

    useEffect(() => {
        setParticipationdata(data);
    }, [data])


    const tableHeaders: string[] = [
        "Rank",
        "Name",
        "Redemption Status",
        "Completions of both Pathways",
        "No Courses Completed",
        "No Skill Badges Completed",
        "GenAI Game Completed",
        "Score"
    ];

    const searchname = (name: string): void => {
        const filteredParticipants = data.filter((participant) => {
            return (
                participant["Student Name"].toLowerCase().includes(name.toLowerCase())
            );
        });
        setParticipationdata(filteredParticipants);
    }

    return (
        <>
            <div className='w-full relative px-3'>

                <Speedometer completion={data.reduce((count, user) => {
                    if (user["Total Completions of both Pathways"] === "Yes") {
                        return count + 1;
                    }
                    return count;
                }, 0)} />

                <div className="sec m-auto my-10 space-y-8 w-1/2 mob:w-full flex flex-col">
                    <div className="info flex mob:flex-col mob:justify-center mob:items-center mob:space-y-10 mob:p-5 justify-evenly space-x-3 mob:space-x-0">
                        <div className="eligibleforswag w-fit mob:w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-green-50 shadow-lg shadow-green-300/30 border border-green-200">
                            <p className="text-center mob:text-start text-sm text-green-400">Total No of <br /> Active Accounts</p>
                            <p className="no text-2xl border-l-2 border-l-green-700 pl-3 text-green-800">{data.reduce((count, user) => {
                                if (user["Redemption Status"] === "Yes") {
                                    return count + 1;
                                }
                                return count;
                            }, 0)}/{data.length}</p>
                        </div>
                        <div className="eligibleforswag w-fit mob:w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
                            <p className="text-center mob:text-start text-sm text-blue-400">Total No of <br />GenAI Completed</p>
                            <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{data.reduce((count, user) => {
                                if (user["# of GenAI Game Completed"] === '1') {
                                    return count + 1;
                                }
                                return count;
                            }, 0)}</p>
                        </div>
                        <div className="eligibleforswag w-fit mob:w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
                            <p className="text-center mob:text-start text-sm text-blue-400">Total No of <br />GCSJ Completed</p>
                            <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{data.reduce((count, user) => {
                                if (user['Total Completions of both Pathways'] === 'Yes') {
                                    return count + 1;
                                }
                                return count;
                            }, 0)}</p>
                        </div>
                    </div>

                    <div className="search m-auto mt-3 mob:py-3 py-2  space-x-5  flex justify-start items-center shadow-lg shadow-blue-400/30 bg-blue-50 w-full rounded-full">
                        <div className="icon px-3 "><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#3b82f6" /></svg></div>
                        <div className="input w-full">
                            <input
                                onChange={(e) => {
                                    searchname(e.target.value)
                                }}
                                className='bg-transparent mob:text-lg text-base outline-none w-full' type="text" name="searchbar" id="searchbar" placeholder='Search Your Name Here' />
                        </div>
                    </div>
                </div>

                <table className='mx-auto table-fixed m-5  '>
                    <thead className='shadow-md text-sm bg-blue-500 text-gray-200 sticky top-2 z-10'>
                        <tr className='text-center'>
                            {tableHeaders.map((header, index) => (
                                <th
                                    key={index}
                                    className={`p-2 ${index < 4 ? '' : 'mob:hidden'} ${index === 0 ? 'rounded-ss-lg w-fit' : 'mob:rounded-se-lg'
                                        } ${index === tableHeaders.length - 1 ? 'max-w-[150px]' : ''} border-r-2 border-r-gray-300`}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <TableBody
                        Participationdata={Participationdata}
                    />
                </table>

            </div>
        </>
    )
}

export default Table