import React from 'react'
import CourseStrip from './CourseStrip'

const MyCourses = () => {
  return (
    <>
      <h3 className='text-2xl font-semibold mx-3 mt-6 mb-2 text-gray-800'>Courses Available</h3>
      <hr className='mb-4' />

      <div className='flex items-center gap-48 mx-2'>
        <div className='flex items-center gap-3 mx-2 my-4'>
          <span>Course Name</span>
        </div >

        <div className='flex items-left gap-32 place-content-right'>
          <span>Start</span>
          <span>Rate</span>
          <span>Level</span>
        </div>
      </div>

      <div className='flex flex-col items-left gap-3 mx-2'>
        <CourseStrip
          stripImage="https://img.icons8.com/ios7/600w/000000/web-design.png"
          courseName="Web Design"
          numOfLessons="10 lessons"
          start="May 12"
          rate="4.8"
          level="Elementary"
        />
        <CourseStrip
          stripImage="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/html_tag2.png"
          courseName="Development Basics"
          numOfLessons="8 lessons"
          start="May 14"
          rate="4.4"
          level="Intermediate"
        />
        <CourseStrip
          stripImage="https://icons-for-free.com/iconfiles/png/512/super+tiny+icons+python-1324450764865983278.png"
          courseName="Data with Python"
          numOfLessons="5 lessons"
          start="May 17"
          rate="4.6"
          level="Intermediate"
        />
        <CourseStrip
          stripImage="https://cdn-icons-png.flaticon.com/512/266/266141.png"
          courseName="Html Basics"
          numOfLessons="26 lessons"
          start="May 12"
          rate="4.7"
          level="Elementary"
        />
        <CourseStrip
          stripImage="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-7.jpg"
          courseName="JavaScript"
          numOfLessons="8 lessons"
          start="May 30"
          rate="4.9"
          level="Elementary"
        />
        <CourseStrip
          stripImage="https://cdn-icons-png.flaticon.com/512/266/266141.png"
          courseName="Cloud Computing"
          numOfLessons="24 lessons"
          start="May 15"
          rate="4.9"
          level="Elementary"
        />
        <CourseStrip
          stripImage="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-7.jpg"
          courseName="Data Science"
          numOfLessons="20 lessons"
          start="June 2"
          rate="4.7"
          level="Elementary"
        />
      </div>
    </>
  )
}

export default MyCourses