import Pagination from "../Dashboard/Pagination";
import GroupDetailsForm from "./GroupDetailsForm";

const GroupDetailsMainDashborad = () => {
    return (
        <div className="main-dashborad">
        <div className="dash-nav">
          <button>๋ก๊ทธ์์</button>
        </div>
        <div className="m-d-main-section">
          <Pagination />
          <GroupDetailsForm/>
        </div>
      </div>
    );
};

export default GroupDetailsMainDashborad;