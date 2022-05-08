import Sidebar from "../Dashboard/Sidebar";
import GroupDetailsMainDashborad from "./GroupDetailsMainDashborad";

const GroupDetailsDashborad = () => {
    return (
        <div className="dashborad">
        <Sidebar />
        <GroupDetailsMainDashborad/>
      </div>
    );
};

export default GroupDetailsDashborad;