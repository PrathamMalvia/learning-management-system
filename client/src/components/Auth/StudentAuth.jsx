import { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function SignupForm({ toggleForm }) {

    const [values, setValues] = useState({
        name: '',
        id: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userType = 'student'; // Set the user type based on your logic
        Axios.post(`http://localhost:4000/signup?type=${userType}`, values)
            .then((response) => {
                alert("Sign Up Successful. Please login to your account");

                // Optionally, you can reset the form fields after successful signup
                setValues({
                    name: '',
                    email: '',
                    id: '',
                    password: ''
                });
            })
            .catch((err) => {
                console.log(err);
                // Handle the error here or display an appropriate error message to the user
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 w-80 ">Student Sign Up</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="id" className="block mb-2">
                    College ID
                </label>
                <input
                    type="text"
                    name="id"
                    value={values.id}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex justify-between items-center gap-2">
                <button
                    type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md"
                >
                    Sign Up
                </button>
                <button
                    type="button"
                    onClick={toggleForm}
                    className="text-purple-600 hover:underline"
                >
                    Already have an account? Log In
                </button>
            </div>
        </form>
    );
}


function LoginForm({ toggleForm }) {

    const navigate = useNavigate();

    const navigateToDashboard = () => {
        // 👇️ navigate to /
        navigate('/student/dashboard');
    };

    const navigateToStudent = () => {
        // 👇️ navigate to /
        navigate('/student');
    };


    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event, isLoggedIn) => {
        event.preventDefault();
        const userType = 'student'; // Set the user type based on your logic
        Axios.post(`http://localhost:4000/login?type=${userType}`, values)
            .then((response) => {
                alert('Login successful');

                // Store the token in localStorage
                const token = "Bearer " + response.data.token;
                localStorage.setItem('Authorization', token);
                localStorage.setItem('userType', userType);

                // Optionally, you can reset the form fields after successful login
                setValues({
                    email: '',
                    password: ''
                });

                if (userType === 'student') {
                    navigateToDashboard();
                } else {
                    navigateToStudent();
                }
            })
            .catch((err) => {
                console.log(err);
                // Handle the error here or display an appropriate error message to the user
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 w-80">Student Log In</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex justify-between items-center gap-1">
                <button
                    type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md"
                >
                    Log In
                </button>
                <button
                    type="button"
                    onClick={toggleForm}
                    className="text-purple-600 hover:underline"
                >
                    Create an account
                </button>
            </div>
        </form>
    );
}

function StudentAuth() {
    const [isSignup, setIsSignup] = useState(true);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {isSignup ? (
                <SignupForm toggleForm={toggleForm} />
            ) : (
                <LoginForm toggleForm={toggleForm} />
            )}
        </div>
    );
}

export default StudentAuth;