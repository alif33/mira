import Pagination from "../Dashboard/Pagination";
import DetailsForm from "./DetailsForm";

const DetailsMainDashborad = () => {
    return (
        <div className="main-dashborad">
        <div className="dash-nav">
          <button>로그아웃</button>
        </div>
        <div className="m-d-main-section">
          <Pagination />
          <DetailsForm/>
        </div>
      </div>
    );
};

export default DetailsMainDashborad;