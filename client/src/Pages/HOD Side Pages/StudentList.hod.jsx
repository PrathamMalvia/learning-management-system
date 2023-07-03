import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar.hod'
import StudentList from '../../components/Student List/TeacherList'
import Profile from '../../components/Profile/Hod.profile'

const StudentListPage = () => {
  return (
    <>
      <DashboardNavbar />

      <div className='flex flex-row'>

        <div className='w-2/12'>
          <Sidebar />

        </div>

        <div className='w-6/12'>
          <StudentList />
        </div>

        <div className='w-4/12'>
          <Profile />
        </div>

      </div >

    </>
  )
}

export default StudentListPage
