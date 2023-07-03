import React from 'react'
import StudentLogin from "../../assets/StudentLogin.png"

import MainNavbar from '../../components/Navbar/MainNavbar'
import StudentAuth from '../../components/Auth/StudentAuth'

const StudentPage = () => {

    return (
        <>
            <MainNavbar />

            <div className='flex items-center'>

                <div className='w-1/2 p-32'>
                    <img
                        src={StudentLogin}
                        alt="logo"
                        className='w-full h-full'
                    />
                </div>

                <div className="border border-gray-500 h-[500px]" />

                <div className='w-1/2'>
                    <StudentAuth />
                </div>

            </div>


        </>
    )
}

export default StudentPage
