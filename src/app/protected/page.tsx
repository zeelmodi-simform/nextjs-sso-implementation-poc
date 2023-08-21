import AuthWrapper from '@/components/AuthWrapper/AuthWrapper'
import React from 'react'

type Props = {}

const Protected = (props: Props) => {
  return (
    <>
      <AuthWrapper >
        <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Protected Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page is a <strong>protected page</strong>.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
        </div>
      </div>
      </AuthWrapper>
    </>
  )
};

export default Protected