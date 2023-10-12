import { registration } from '@/types'
import React from 'react'

type Props = {
    participant: registration,
    rank: number
}

export default function TableRow({ participant, rank}: Props) {
    return (
        <tr className={`border ${rank >= 80 ? 'bg-red-200' : 'odd:bg-white even:bg-gray-50'} border-b-slate-200`}>
            <td className="Rank p-3 text-center">
                {rank + 1}
            </td>

            <td className="Student_Name p-3 w-80 uppercase">{participant["Student Name"]}
                {(participant["Total Completions of both Pathways"] == "Yes") && rank < 80 &&  (participant['Redemption Status'] == "Yes") ? '🏅' : ''}
            </td>

            <td className="Redemption_Status p-3 relative">
                <div
                    className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${participant["Redemption Status"] == "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["Redemption Status"] == "Yes" ? "Done" : "Error !"}
                </div>
            </td>



            
            <td className="Completions_both_Pathways_relative p-3 text-center">
                <div
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${participant["Total Completions of both Pathways"] == "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["Total Completions of both Pathways"] == "Yes"
                        ? "Yes"
                        : "No !"}
                </div>
            </td>
            <td className="no_Courses_Completed mob:hidden p-3 text-center">
                {participant["# of Courses Completed"]}
            </td>

            <td className="no_Skill_Badges_Completed mob:hidden p-3 text-center">
                {participant["# of Skill Badges Completed"]}
            </td>

            <td className="GenAI_Game_Completed mob:hidden p-3 text-center">
                {participant["# of GenAI Game Completed"]}
            </td>
            <td className="GenAI_Game_Completed mob:hidden p-3 text-center">
                {participant["score"]}
            </td>
        </tr>
    )
}