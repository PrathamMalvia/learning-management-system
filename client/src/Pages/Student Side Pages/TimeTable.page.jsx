import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TimeTable from '../../components/TimeTable/TimeTable'

const TimeTablePage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />

                </div>

                <div className='w-10/12'>
                    <TimeTable />
                </div>

            </div >

        </>
    )
}

export default TimeTablePage