import Pagination from "../Dashboard/Pagination";
import GroupRegistrationForm from "./GroupRegistrationForm";

const GroupRegistrationMainDashborad = () => {
    return (
        <div className="main-dashborad">
        <div className="dash-nav">
          <button>๋ก๊ทธ์์</button>
        </div>
        <div className="m-d-main-section">
          <Pagination />
          <GroupRegistrationForm />
        </div>
      </div>
    );
};

export default GroupRegistrationMainDashborad;