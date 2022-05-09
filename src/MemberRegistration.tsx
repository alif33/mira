import MemberRegistrationMainDashborad from "./components/MemberRegistration/MemberRegistrationMainDashborad";
import PageDescription from "./components/pageDescriptionSidebar/PageDescription";

const MemberRegistration = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
            <MemberRegistrationMainDashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>
    );
};

export default MemberRegistration;