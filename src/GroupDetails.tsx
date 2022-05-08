import GroupDetailsDashborad from "./components/GroupDetails/GroupDetailsDashborad";
import PageDescription from "./components/PageDescription";

const GroupDetails = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
            <GroupDetailsDashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div> 
    );
};

export default GroupDetails;