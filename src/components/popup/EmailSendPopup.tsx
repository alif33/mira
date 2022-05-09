interface popupProps {
  popupShow: boolean;
  setPopupShow: any;
}
const EmailSendPopup = (props: popupProps) => {
  return (
    <div className="popup">
      <div
        className="popup-shadow"
        onClick={() => props.setPopupShow(!props.popupShow)}
      ></div>
      <div className="popup-box">
        <div className="p-header">
          <h4>아이디 찾기</h4>
          <span onClick={() => props.setPopupShow(!props.popupShow)}>x</span>
        </div>
        <div className="p-body">
            <p>비밀번호 수정 링크를 성공적으로 발송하였습니다.</p>
          <p className="btn-margin-top">
           <span>hong123@gmail.com</span> 으로 발송된 메일을 확인해주시기 바랍니다.
            <br />
            메일이 정상적으로 수신되지 않을 경우
            <br />
            스팸메일함을 확인해 주시기 바랍니다.
          </p>
        </div>
        <div className="p-footer">
          <button className="main-btn">확 인</button>
        </div>
      </div>
    </div>
  );
};

export default EmailSendPopup;
