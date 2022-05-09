import GroupManagementDashborad from "./components/GroupManagement/GroupManagementDashborad";
import PageDescription from "./components/pageDescriptionSidebar/PageDescription";

const GroupManagement = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
        <GroupManagementDashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>
    );
};

export default GroupManagement;