import Image from 'next/image';
import React from 'react'

type Props = {}

const PageLoader = (props: Props) => {

    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

    return (
        <div className='loader'>
            <Image src={ loadingImg } alt='Loading...' height={ 50 } width={ 50 } />
        </div>
    );
};

export default PageLoader