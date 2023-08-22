'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {

    
    const defaultPicture =
        "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png";
    const { user } = useUser();

    if (!user) {
        return null;
    }

    return (
        <div className='content-layout'>
            <h1 id="page-title" className="content__title">
                Profile Page
            </h1>
            
            <div className='content__body'>
                <p id="page-description">
                    <span>
                        You can use the <strong>ID Token</strong> to get the profile
                        information of an authenticated user.
                    </span>
                    <span>
                        <strong>Only authenticated users can access this page.</strong>
                    </span>
                </p>
                <div className="profile-grid">
                    <div className="profile__header">
                        <Image
                            src={ user.picture || defaultPicture }
                            alt="Profile"
                            className="profile__avatar"
                            width={ 80 }
                            height={ 80 }
                        />
                        <div className="profile__headline">
                            <h2 className="profile__title">{ user.name }</h2>
                            <span className="profile__description">{ user.email }</span>
                        </div>
                    </div>
                    <div className="profile__details">                        
                        <div className="code-snippet">
                            <span className="code-snippet__title">Decoded ID User  </span>
                            <div className="code-snippet__container">
                                <div className="code-snippet__wrapper">
                                    <pre className="code-snippet__body">{ JSON.stringify(user, null, 2) }</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile