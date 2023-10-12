import { registration } from '@/types'
import React from 'react'
import TableRow from './TableRow'

type Props = {
    Participationdata: registration[]
}

function TableBody({Participationdata }: Props) {
    return (
        <tbody className='text-xs'>
            {Participationdata.length > 0 ? Participationdata.map((participant, index) => {

                return <TableRow rank={index} key={participant["Student Email"] || 1} participant={participant} />
            }) : <div className='text-lg'>No Data Found</div>}
        </tbody >
    )
}

export default TableBody