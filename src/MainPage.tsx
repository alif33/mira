import Dashborad from "./components/Dashboard/Dashborad";
import PageDescription from "./components/pageDescriptionSidebar/PageDescription";

const MainPage = () => {
    return (
        <div className="gnb-container">
        <div className="main-dashborad">
          <Dashborad/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>
    );
};

export default MainPage;