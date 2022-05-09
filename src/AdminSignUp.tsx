import AdminSignUpForm from "./components/adminSignUpForm/AdminSignUpForm";
import PageDescription from "./components/pageDescriptionSidebar/PageDescription";

const AdminSignUp = () => {
    return (
        <div className="gnb-container">
        <div className="admin-login-section">
          <img src="img/logo2.png" alt="" />
          <AdminSignUpForm/>
        </div>
        <div className="page-description">
          <PageDescription />
        </div>
      </div>
    );
};

export default AdminSignUp;