import MainDashborad from "./MainDashborad";
import Sidebar from "./Sidebar";

const Dashborad = () => {
    return (
        <div className="dashborad">
            <Sidebar/>
            <MainDashborad/>
        </div>
    );
};

export default Dashborad;