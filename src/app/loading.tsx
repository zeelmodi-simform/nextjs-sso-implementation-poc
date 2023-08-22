import React from 'react'

import PageLoader from '@/components/PageLoader/PageLoader'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="page-layout">
            <PageLoader />
        </div>
    );
};

export default Loading