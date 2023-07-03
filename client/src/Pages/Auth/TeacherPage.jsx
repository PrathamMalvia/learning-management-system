import React from 'react'
import TeacherLogin from "../../assets/TeacherLogin.png"

import MainNavbar from '../../components/Navbar/MainNavbar'
import TeacherAuth from '../../components/Auth/TeacherAuth'

const TeacherPage = () => {

    return (
        <>
            <MainNavbar />

            <div className='flex items-center'>

                <div className='w-1/2 p-32'>
                    <img
                        src={TeacherLogin}
                        alt="logo"
                        className='w-full h-full'
                    />
                </div>

                <div className="border border-gray-500 h-[500px]" />

                <div className='w-1/2'>
                    <TeacherAuth />
                </div>

            </div>


        </>
    )
}

export default TeacherPage
