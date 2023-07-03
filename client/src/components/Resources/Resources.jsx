import React from 'react'
import Assessments from './Assessments'
import ResourceTypes from './ResourceTypes'
import MyNotes from './MyNotes'

const Resources = () => {
    return (
        <>
            <div>
                <ResourceTypes />
                <MyNotes />
                <Assessments />
            </div>
        </>

    )
}

export default Resources