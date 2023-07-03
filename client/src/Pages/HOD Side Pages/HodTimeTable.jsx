import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import TimeTable from '../../components/TimeTable/TimeTableTeacher'
import Sidebar from '../../components/Sidebar/Sidebar.hod'

const DashboardPage = () => {
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

export default DashboardPage