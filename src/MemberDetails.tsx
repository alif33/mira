import React from 'react';
import MemberDetailsMainDashborad from './components/MemberDetails/MemberDetailsMainDashborad';
import PageDescription from './components/pageDescriptionSidebar/PageDescription';

const MemberDetails = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
          <MemberDetailsMainDashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>  
    );
};

export default MemberDetails;