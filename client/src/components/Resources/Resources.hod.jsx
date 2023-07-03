import React from 'react'
import Assessments from './Assessment.Teacher'
// import ResourceTypes from './ResourceTypes'
import MyNotes from './MyNotes.Teachers'

const Resources = () => {
    return (
        <>
            <div>
                {/* <ResourceTypes /> */}
                <MyNotes />
                <Assessments />
            </div>
        </>

    )
}

export default Resources