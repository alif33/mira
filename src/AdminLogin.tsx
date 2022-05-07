import Login from "./components/Login";
import PageDescription from "./components/PageDescription";

const AdminLogin = () => {
    return (
        <div className="gnb-container">
        <div className="admin-login-section">
            <img src="img/logo2.png" alt="" />
            <Login/>
        </div>
        <div className="page-description">
            <PageDescription />
        </div>
     </div>
    );
};

export default AdminLogin;