import React from 'react'
import ResourceTypesComponent from './ResourceTypesComponent'
import { BsBookHalf } from "react-icons/bs"
import { VscLayersActive } from "react-icons/vsc"
import { BsTrophyFill } from "react-icons/bs"
import { HiDocument } from "react-icons/hi"

const ResourceTypes = () => {
    return (
        <>
            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-6 text-gray-700">Resources</h3>


            <div className='ml-4 flex items-center gap-6 mb-8'>
                <ResourceTypesComponent
                    icon={<BsBookHalf />}
                    resourceName="Enrolled Courses"
                    resourceNo="12"
                />
                <ResourceTypesComponent
                    icon={<VscLayersActive />}
                    resourceName="Active Courses"
                    resourceNo="8"
                />
                <ResourceTypesComponent
                    icon={<BsTrophyFill />}
                    resourceName="Completed Courses"
                    resourceNo="1"
                />
                <ResourceTypesComponent
                    icon={<HiDocument />}
                    resourceName="Notes"
                    resourceNo="4"
                />
            </div>

        </>
    )
}

export default ResourceTypes