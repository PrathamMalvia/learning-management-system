import React, { useEffect, useState } from 'react';

// Integrate the SDK
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';
import { APP_ID, SERVER_SECRET } from './Constants';

const ChatComponent = () => {

    const id = Math.floor(Math.random() * 1000)

    const [state, setState] = useState(
        {
            appConfig: {
                appID: APP_ID,        // The AppID you get from the ZEGOCLOUD admin console.
                serverSecret: SERVER_SECRET,   // The serverSecret you get from ZEGOCLOUD Admin Console.
            },
            // The userID and userName is a strings of 1 to 32 characters.
            // Only digits, letters, and the following special characters are supported: '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '`', ';', '’', ',', '.', '<', '>', '/', '\'
            userInfo: {
                // Your ID as a user.
                userID: `user${id}`,
                // Your name as a user.
                userName: `user${id}`,
                // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
                userAvatarUrl: 'https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png'
            }
        }
    )

    useEffect(() => {
        const init = async () => {
            try {
                const zimKit = new ZIMKitManager();
                const token = zimKit.generateKitTokenForTest(
                    state.appConfig.appID,
                    state.appConfig.serverSecret,
                    state.userInfo.userID
                );

                await zimKit.init(state.appConfig.appID).catch((error) => {
                    throw new Error(`Failed to initialize ZIMKit: ${error.message}`);
                });

                await zimKit.connectUser(state.userInfo, token).catch((error) => {
                    throw new Error(`Failed to connect user: ${error.message}`);
                });
            } catch (error) {
                console.log('Error occurred:', error);
                // Handle the error here or display an appropriate error message to the user
            }
        };


        init();
    }, []);



    return (
        <div>
            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-6 text-gray-700">Welcome Back {state.userInfo.userID}</h3>
            <Common></Common>
        </div>
    )
}

export default ChatComponent