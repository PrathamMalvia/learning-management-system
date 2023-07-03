import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Instructions from '../../components/Resources/Instructions'

const AssessmentsPage = () => {
  return (
    <>
      <DashboardNavbar />

      <div className='flex flex-row'>

        <div className='w-2/12'>
          <Sidebar />

        </div>

        <div className='w-10/12'>
          <Instructions />
        </div>

      </div >

    </>
  )
}

export default AssessmentsPage