'use client'

import React from 'react'

import { useUser } from '@auth0/nextjs-auth0/client'

import PageLoader from '../PageLoader/PageLoader'
import Navbar from '../Navbar/Navbar'

type Props = {
    children: React.ReactNode
}

const AuthWrapper = ({ children }: Props) => {

    const { isLoading } = useUser()
  
    if (isLoading) {
        return (<div className="page-layout">
            <PageLoader />
        </div>)
    }
    return (
        <div className='page-layout'>
            <Navbar />
            <div className='page-layout__content'>{ children }</div>
        </div>
    );
};

export default AuthWrapper