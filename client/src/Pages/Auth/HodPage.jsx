import React from 'react'
import HodLogin from "../../assets/HodLogin.jpg"

import MainNavbar from '../../components/Navbar/MainNavbar'
import HodAuth from '../../components/Auth/HodAuth'

const TeacherPage = () => {

    return (
        <>
            <MainNavbar />

            <div className='flex items-center'>

                <div className='w-1/2 p-32'>
                    <img
                        src={HodLogin}
                        alt="logo"
                        className='w-full h-full'
                    />
                </div>

                <div className="border border-gray-500 h-[500px]" />

                <div className='w-1/2'>
                    <HodAuth />
                </div>

            </div>


        </>
    )
}

export default TeacherPage
