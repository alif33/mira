
import MemberManagementDashborad from "./components/MemberManagement/MemberManagementDashborad";
import PageDescription from "./components/pageDescriptionSidebar/PageDescription";

const MemberManagement = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
          <MemberManagementDashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>                                                      
    );
};

export default MemberManagement;