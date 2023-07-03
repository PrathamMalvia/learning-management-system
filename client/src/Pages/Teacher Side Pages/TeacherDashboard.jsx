import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import MainContent from '../../components/Dashboard/MainContent'
import Sidebar from '../../components/Sidebar/Sidebar.teacher'
import Profile from '../../components/Profile/ProfileBar'

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