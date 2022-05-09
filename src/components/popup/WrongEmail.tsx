interface popupProps {
    popupShow: boolean;
    setPopupShow: any;
  }
const WrongEmail = (props: popupProps) => {
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
          <p>
            입력하신 정보로 가입 된 회원이
            <br />
            존재하지 않습니다.
          </p>
        </div>
        <div className="p-footer">
          <button className="main-btn">확 인</button>
        </div>
      </div>
    </div>
    );
};

export default WrongEmail;