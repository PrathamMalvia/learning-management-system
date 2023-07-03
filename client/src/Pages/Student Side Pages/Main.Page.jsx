import React from 'react';
import MainNavbar from '../../components/Navbar/MainNavbar';

const MainPage = () => {
    return (
        <>
            <MainNavbar />
            <div className="bg-gray-100 p-4">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Learn Anytime, Anywhere</h2>
                            <p className="text-gray-700">
                                Access a wide range of courses and study materials from the comfort of your home or on the go. Expand your knowledge and skills at your own pace.
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Learning Experience</h2>
                            <p className="text-gray-700">
                                Engage with interactive lessons, quizzes, and multimedia content. Collaborate with instructors and fellow learners through discussion forums and live sessions.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img src="https://img-b.udemycdn.com/course/750x422/222122_ad46_6.jpg" alt="Course 1" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Master SketchUp - A Definitive Guide From Infinite Skills</h3>
                                    <p className="text-gray-700">
                                        This SketchUp 2013 training course from Infinite Skills teaches you how to model a home from scratch using this popular 3D modeling program. This tutorial is designed for the absolute beginner, meaning no prior experience with SketchUP or 3D modeling is required.
                                        You will start by learning the basics of the drawing tools, and then quickly jump into learning to create different roof types. This course will show you how to organize the model, including creating the second floor and additional openings, using the outliner, and viewing layer states of the model. This video tutorial will show you how to create the different parts of a home, including the ceiling, staircase, doors and windows, fireplace, and kitchen.
                                        You will learn how to add furniture using the 3D warehouse and model the furniture from a photograph. You will then move to creating the exterior of the home, from setting the building in place to adding solar panels. Finally, Dan will show you various exporting options and how to create a rendering and animation.

                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img src="https://couponos.me/wp-content/uploads/Artificial-Intelligence-A-Z.jpg" alt="Course 2" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Machine Learning A-Z</h3>
                                    <p className="text-gray-700">
                                        Interested in the field of Machine Learning? Then this course is for you!
                                        This course has been designed by a Data Scientist and a Machine Learning expert so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way.
                                        Over 900,000 students world-wide trust this course.
                                        We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science.
                                        This course can be completed by either doing either the Python tutorials, or R tutorials, or both - Python & R. Pick the programming language that you need for your career.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img src="https://img-c.udemycdn.com/course/480x270/2284600_278b_7.jpg" alt="Course 3" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Sketching for Fashion Design ~ Beginner Course for Designers</h3>
                                    <p className="text-gray-700">
                                        This Fashion Sketching Course (7-videos-modules) is for beginners: young and old, with an interest and passion for designing fashion.  In this Course you will learn how the body moves, body movement, and  balancing the body using the Plumb Line.  You will learn the industry standard "9-Heads Croquis".
                                        We start with a simple exercise using a pencil and learn how to achieve different "shading" effects depending on how you are holding the pencil.  Using the pencil correctly is the foundation of good sketching, whether it's fashion design or not.
                                        You will also look at inspiration as a way to influence sketching: fashion inspiration, using a "fashion diary/journal" - creating a "pool" from which to draw ideas from will definitely affect your ability to draw new fashion designs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainPage;
