import React from 'react'

import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar.hod'
import Profile from '../../components/Profile/ProfileBar'
import Notice from '../../components/Notice/Notice'

const NoticePage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />
                </div>

                <div className='w-6/12'>
                    <Notice />
                </div>

                <div className='w-4/12'>
                    <Profile />
                </div>

            </div >

        </>

    )
}

export default NoticePage
