import React, { useState } from 'react';

const MyNotes = () => {
    const [files, setFiles] = useState([]);

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles([...files, ...uploadedFiles]);
    };

    const handleDeleteFile = (file) => {
        const updatedFiles = files.filter((f) => f !== file);
        setFiles(updatedFiles);
    };

    const handleReadFile = (file) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const fileContent = event.target.result;
            const newWindow = window.open('', '_blank');
            newWindow.document.write(`<pre>${fileContent}</pre>`);
        };

        reader.readAsText(file);
    };

    return (
        <>
            <h3 className='text-2xl font-semibold mx-3 mt-6 mb-2 text-gray-800'>Upload Notes</h3>
            <hr className='mb-4' />

            <div className="container mx-auto p-4 mb-8 flex flex-col">
                <label className="text-lg text-gray-600 font-base mb-4">File Upload:</label>
                <input
                    type="file"
                    className="mb-4 w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    name="upload_file"
                    onChange={handleFileUpload}
                />

                {files.length > 0 && (
                    <ul className="bg-gray-100 p-4">
                        {files.map((file, index) => (
                            <li
                                key={index}
                                className="border-b border-gray-300 py-2 flex items-center justify-between"
                            >
                                <span>{file.name}</span>
                                <div className="">
                                    <button
                                        className="w-20 bg-purple-500 text-white hover:bg-purple-600 font-semibold rounded-md p-2"
                                        onClick={() => handleReadFile(file)}
                                    >
                                        Read
                                    </button>
                                    <button
                                        className="w-20 bg-red-500 text-white hover:bg-red-600 font-semibold rounded-md p-2 ml-2"
                                        onClick={() => handleDeleteFile(file)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default MyNotes;
