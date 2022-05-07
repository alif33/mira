import React from 'react';
import PageDescription from './components/PageDescription';
import PasswrdChangeForm from './components/PasswrdChangeForm';

const PasswordChange = () => {
    return (
        <div className="gnb-container">
        <div className="admin-login-section">
          <img src="img/logo2.png" alt="" />
          <PasswrdChangeForm />
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>
    );
};

export default PasswordChange;