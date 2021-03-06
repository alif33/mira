import Link from "next/link";
import OrderStatus from "./OrderStatus";
import Pagination from "./Pagination";
import StatisticsDetails from "./StatisticsDetails";

const MainDashborad = () => {
  return (
    <div className="main-dashborad">
      <div className="dash-nav">
        <button>๋ก๊ทธ์์</button>
      </div>
      <div className="m-d-main-section">
        <Pagination />
        <OrderStatus />
        <StatisticsDetails/>
      </div>
    </div>
  );
};

export default MainDashborad;
