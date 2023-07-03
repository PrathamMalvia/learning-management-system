import React from 'react'
import { VscVerifiedFilled } from 'react-icons/vsc'

const Avatar = () => {

    const src = "https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg"


    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='w-28'>
                    <img
                        src={src}
                        alt="avatar"
                        className="w-full h-full border rounded-full"
                    />
                </div>

                <div className='flex items-end'>
                    <div className="font-semibold text-x1 mt-2">Esther Horward&nbsp;</div>
                    <span className='pb-1'><VscVerifiedFilled /></span>
                </div>

                <div className="text-sm text-gray-500 mb-2">Elementary</div>
            </div>


        </>
    )
}

export default Avatar