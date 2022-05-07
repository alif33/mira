import AdminSignUpForm from "./components/AdminSignUpForm";
import PageDescription from "./components/PageDescription";

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