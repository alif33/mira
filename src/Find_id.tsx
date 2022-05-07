import { useState } from "react";
import FindId from "./components/FindId";
import Login from "./components/Login";
import PageDescription from "./components/PageDescription";
import Popup from "./components/Popup";

interface popupProps {
  popupShow: boolean;
  setPopupShow: any;
}

const GNB = () => {
  const [popupShow, setPopupShow] = useState(false);
  return (
    <div className="gnb-container">
      <div className="admin-login-section">
        <img src="img/logo2.png" alt="" />
        <FindId popupShow={popupShow} setPopupShow={setPopupShow} />
        {popupShow && (
          <Popup popupShow={popupShow} setPopupShow={setPopupShow} />
        )}
      </div>
      <div className="page-description">
        <PageDescription />
      </div>
    </div>
  );
};

export default GNB;
