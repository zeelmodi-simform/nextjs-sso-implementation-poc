import React from 'react';

const PublicPage = () => {
  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Public Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page is a <strong>public page</strong>.
          </span>
          <span>
            <strong>Any visitor can access this page.</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PublicPage;
