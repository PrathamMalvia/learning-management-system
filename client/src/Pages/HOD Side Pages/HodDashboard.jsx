import React from 'react'
import DashboardNavbar from '../../components/Navbar/HodAndTeacherDashNavbar'
import MainContent from '../../components/Dashboard/HodMainContent'
import Sidebar from '../../components/Sidebar/Sidebar.hod'
import Profile from '../../components/Profile/Hod.profile'

const DashboardPage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />
                </div>

                <div className='w-6/12'>
                    <MainContent />
                </div>

                <div className='w-4/12'>
                    <Profile />
                </div>

            </div >

        </>
    )
}

export default DashboardPage