import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import Axios from 'axios';

const NewCourses = () => {

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const res = await Axios.get('http://localhost:4000/newcourses', {
          headers: {
            'Authorization': `${localStorage.getItem('Authorization')}`,
            'Content-Type': 'application/json'
          }
        })
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllCourses();
  }, [])


  return (
    <>
      <h3 className='text-2xl font-semibold mx-3 mt-6 mb-2 text-gray-800'>New Courses</h3>
      <hr className='mb-4' />
      <div className="grid grid-cols-3 gap-10 mx-3">
        {courses.map((course) => (
          <CourseCard
            subject={course.name}
            lesson={course.lessons}
            cardImage={course.image}
            key={course.id}
            videoUrl={course.videolink}
          />
        ))}
      </div>
    </>

  )
}

export default NewCourses