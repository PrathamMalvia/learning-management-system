import React, { useRef } from 'react';
import Assessments from './Assessment.Teacher';
import MyNotes from './MyNotes.Teachers';
import { IKUpload, IKContext } from 'imagekitio-react';
import Axios from 'axios';

const Resources = () => {
    const uploadRef = useRef(null);

    const onError = (error) => {
        console.error('Upload error:', error);
    };

    const onSuccess = async (response) => {
        console.log('Upload successful:', response);
        const uploadedFile = response.file;

        try {
            const authToken = localStorage.getItem('Authorization');
            await Axios.post('https://upload.imagekit.io/api/v1/files/upload', {
                file: uploadedFile,
                fileName: uploadedFile.name,
                folder: '/resources',
            }, {
                headers: {
                    Authorization: authToken,
                },
            });
            console.log('File details stored in the database');
        } catch (error) {
            console.error('Failed to store file details in the database:', error);
        }

        // Perform any necessary actions with the uploaded file information
        // For example, you can update the UI
    };

    const handleUpload = () => {
        if (uploadRef.current) {
            uploadRef.current.upload();
        }
    };

    return (
        <>
            <div>
                <MyNotes />
                <Assessments />

                <h3 className="text-2xl font-semibold mx-3 mt-6 mb-2 text-gray-800">Upload Notes</h3>
                <hr className="mb-4" />

                <IKContext
                    publicKey="your_public_key"
                    urlEndpoint="https://ik.imagekit.io/your_imagekit_id"
                    transformationPosition="path"
                    authenticationEndpoint="http://localhost:4000/login"
                >
                    <IKUpload
                        fileName="file-name.jpg"
                        isPrivateFile={false}
                        useUniqueFileName={true}
                        responseFields={['tags']}
                        folder="/resources"
                        ref={uploadRef}
                        onError={onError}
                        onSuccess={onSuccess}
                    />

                    <button onClick={handleUpload}>Upload</button>
                </IKContext>
            </div>
        </>
    );
};

export default Resources;
