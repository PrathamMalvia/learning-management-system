import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar.teacher'
import TimeTable from '../../components/TimeTable/TimeTableTeacher'

const TimeTablePage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />

                </div>

                <div className=''>
                    <TimeTable />
                </div>

            </div >

        </>
    )
}

export default TimeTablePage