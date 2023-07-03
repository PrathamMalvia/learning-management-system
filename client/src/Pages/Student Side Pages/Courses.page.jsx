import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Courses from '../../components/Courses/Courses'
import Sidebar from '../../components/Sidebar/Sidebar'
import Profile from '../../components/Profile/ProfileBar'

const CoursesPage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />

                </div>

                <div className='w-6/12'>
                    <Courses />
                </div>

                <div className='w-4/12'>
                    <Profile />
                </div>

            </div >

        </>
    )
}

export default CoursesPage