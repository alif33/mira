import SalesStatisticsCard from "./SalesStatisticsCard";
import StatisticsDetailsCard from "./StatisticsDetailsCard";

const StatisticsDetails = () => {
  return (
    <div className="statistics-details">
      <StatisticsDetailsCard />
      <SalesStatisticsCard />
      <SalesStatisticsCard />
    </div>
  );
};

export default StatisticsDetails;
