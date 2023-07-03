import React from 'react'
import HomeworkCard from './HomeworkCard'

const HomeworkProgress = () => {
  return (
    <>
      <h3 className='flex flex-col text-2xl font-semibold my-6 mt-4 ml-20 text-gray-700'>Homework Progress</h3>
      <div className='flex flex-col gap-4'>
        <HomeworkCard
          title="Styling with CSS"
          tasks="12 tasks"
        />
        <HomeworkCard
          title="Basics of programming"
          tasks="10 tasks"
        />
        <HomeworkCard
          title="Learn to code in java"
          tasks="10 tasks"
        />

      </div>

    </>
  )
}

export default HomeworkProgress