import React from 'react'
import NewCourses from './NewCourses'
import MyCourses from './MyCourses'

const MainContent = () => {
    return (
        <>
            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-6 text-gray-700">Dashboard</h3>
            <NewCourses />
            <MyCourses />
        </>
    )
}

export default MainContent