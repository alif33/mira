import Link from "next/link";
import Pagination from "./Pagination";

const MainDashborad = () => {
    return (
        <div className="main-dashborad">
            <div className="dash-nav">
                <button>로그아웃</button>
            </div>
          <div className="m-d-main-section">
              <Pagination/>
          </div>
        </div>
    );
};

export default MainDashborad;