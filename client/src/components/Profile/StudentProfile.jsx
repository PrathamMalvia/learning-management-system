import React, { useState } from 'react';

const StudentProfile = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [updatedDetails, setUpdatedDetails] = useState({});

    const [student, setStudent] = useState({
        name: 'John Doe',
        collegeId: 'VU1F2021048',
        branch: 'Computer Science',
        email: 'johndoe@example.com',
        password: '**********',
        phone: '1234567890',
        address: '123 Main St, City, State',
        dateOfBirth: '2002-01-01',
    });

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Update the student object with the updated details
        const updatedStudent = { ...student, ...updatedDetails };
        setStudent(updatedStudent);
        // Reset the updatedDetails state
        setUpdatedDetails({});
        closeDialog();
    };

    return (
        <div className="container mx-auto">
            <h3 className="text-3xl font-semibold mt-2 mb-6 text-gray-700">Student Profile</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-2xl text-gray-600 font-semibold mb-4">Personal Information</h3>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <p><span className="text-lg font-semibold">Name:</span> {student.name}</p>
                            <p><span className="text-lg font-semibold">College ID:</span> {student.collegeId}</p>
                            <p><span className="text-lg font-semibold">Branch:</span> {student.branch}</p>
                            <p><span className="text-lg font-semibold">Phone:</span> {student.phone}</p>
                            <p><span className="text-lg font-semibold">Address:</span> {student.address}</p>
                            <p><span className="text-lg font-semibold">Date of Birth:</span> {student.dateOfBirth}</p>
                        </div>
                        <button
                            className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none"
                            onClick={openDialog}
                        >
                            Update Details
                        </button>
                    </div>
                    <div>
                        <h3 className="text-2xl text-gray-600 font-semibold mb-4">Account Information</h3>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <p><span className="text-lg font-semibold">Email:</span> {student.email}</p>
                            <p><span className="text-lg font-semibold">Password:</span> {student.password}</p>
                        </div>
                        <button
                            className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none"
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </div>

            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white w-1/2 rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Update Details</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder='eg: John Doe'
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={updatedDetails.name || student.name}
                                    onChange={handleInputChange}
                                />
                                <br></br>
                                <label htmlFor="id" className="block text-gray-700 font-semibold mb-2 mt-3">
                                    College ID
                                </label>
                                <input
                                    type="text"
                                    id="id"
                                    name="collegeId"
                                    placeholder='eg: VU1F2021048'
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={updatedDetails.collegeId || student.collegeId}
                                    onChange={handleInputChange}
                                />
                                <br></br>
                                <label htmlFor="branch" className="block text-gray-700 font-semibold mb-2 mt-3">
                                    Branch
                                </label>
                                <input
                                    type="text"
                                    id="branch"
                                    name="branch"
                                    placeholder='eg: Computer Science'
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={updatedDetails.branch || student.branch}
                                    onChange={handleInputChange}
                                />
                                <br></br>
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 mt-3">
                                    Phone No
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder='eg: 9876543210'
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={updatedDetails.phone || student.phone}
                                    onChange={handleInputChange}
                                />
                                <br></br>
                                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2 mt-3">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder=''
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={updatedDetails.address || student.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Add more fields here for updating other details */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded focus:outline-none"
                                    onClick={closeDialog}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentProfile;









/* import React, { useState } from 'react';

const UpdateProfile = () => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [branch, setBranch] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordUpdate = () => {
        // Perform password update logic here
        // You can make an API call to update the password
        // or implement your own update logic
        console.log('Updating password...');
        console.log('New password:', newPassword);
    };

    return (
        <div className="mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Details</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="name">
                    Full Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder='eg: Esther Horward'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="id">
                    College ID
                </label>
                <input
                    className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    placeholder="eg: VU1F2021048"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="branch">
                    Branch
                </label>
                <input
                    className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="branch"
                    type="text"
                    placeholder="eg: Computer Science"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder='eg: vu1f2021048@pvppcoe.ac.in'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="newPassword">
                    New Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="newPassword"
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handlePasswordUpdate}
                >
                    Update Password
                </button>
            </div>
        </div>
    );
};

export default UpdateProfile;
 */



