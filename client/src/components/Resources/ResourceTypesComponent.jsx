import React from 'react'

const ResourceTypesComponent = (props) => {
    return (
        <>
            <div className='flex flex-col items-center gap-1 w-72 h-1/2 bg-white border border-gray-200 p-8 rounded-md'>
                <div className='bg-purple-300 rounded-full mt-4 text-3xl p-6'>
                    {props.icon}
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-base font-semibold'>{props.resourceName}</p>
                    <p className='text-sm font-normal'>{props.resourceNo}</p>
                </div>
            </div>
        </>
    )
}

export default ResourceTypesComponent