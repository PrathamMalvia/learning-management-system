import React from 'react'

const People = (props) => {
    return (
        <div className='flex items-center gap-3 mt-4'>
            <div className='w-10 h-10 rounded-full border border-2 border-gray-900'>
                <img
                    src={props.profile}
                    alt="profile"
                    className='w-full h-full rounded-full'
                />
            </div>
            <p className='text-base font-semibold text-gray-600'>{props.name}</p>
        </div>
    )
}

export default People