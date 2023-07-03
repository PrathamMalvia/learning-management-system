import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar.teacher'
import Profile from '../../components/Profile/ProfileBar'
import Settings from '../../components/Settings/SettingsComponent'

const SettingsPage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />

                </div>

                <div className='w-6/12'>
                    <Settings />
                </div>

                <div className='w-4/12'>
                    <Profile />
                </div>

            </div >

        </>
    )
}

export default SettingsPage