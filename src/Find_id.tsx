import { useState } from "react";
import FindId from "./components/findid/FindId";
import Login from "./components/login/Login";
import PageDescription from "./components/pageDescriptionSidebar/PageDescription";
import EmailSendPopup from "./components/popup/EmailSendPopup";
import GroupInquiryPopup from "./components/popup/GroupInquiryPopup";
import Popup from "./components/popup/Popup";

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
        
        {/* {popupShow && (
          <Popup popupShow={popupShow} setPopupShow={setPopupShow} />
        )} */}
        {/* <EmailSendPopup popupShow={popupShow} setPopupShow={setPopupShow}/> */}

        <GroupInquiryPopup popupShow={popupShow} setPopupShow={setPopupShow} />
      </div>
      <div className="page-description">
        <PageDescription />
      </div>
    </div>
  );
};

export default GNB;
