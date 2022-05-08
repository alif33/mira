import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import GroupMainDashborad from './GroupMainDashborad';

const GroupManagementDashborad = () => {
    return (
        <div className="dashborad">
        <Sidebar />
        <GroupMainDashborad/>
      </div>
    );
};

export default GroupManagementDashborad;