import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar.hod'
import Resources from '../../components/Resources/Resources.hod'

const ResourcesPage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />

                </div>

                <div className='w-10/12'>
                    <Resources />
                </div>

            </div >

        </>
    )
}

export default ResourcesPage