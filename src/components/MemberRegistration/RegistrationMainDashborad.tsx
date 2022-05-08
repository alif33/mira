import Pagination from "../Dashboard/Pagination";
import RegistrationForm from "./RegistrationForm";

const RegistrationMainDashborad = () => {
    return (
        <div className="main-dashborad">
        <div className="dash-nav">
          <button>로그아웃</button>
        </div>
        <div className="m-d-main-section">
          <Pagination />
          <RegistrationForm />
        </div>
      </div>
    );
};

export default RegistrationMainDashborad;