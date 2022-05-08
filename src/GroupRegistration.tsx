import GroupRegistrationDashborad from "./components/GroupRegistration/GroupRegistrationDashborad";
import PageDescription from "./components/PageDescription";

const GroupRegistration = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
            <GroupRegistrationDashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>
    );
};

export default GroupRegistration;