interface popupProps {
  popupShow: boolean;
  setPopupShow: any;
}
const Popup = (props: popupProps) => {
  return (
    <div className="popup">
      <div className="popup-shadow" onClick={()=> props.setPopupShow(!(props.popupShow))}></div>
      <div className="popup-box">
        <div className="p-header">
          <h4>아이디 찾기</h4>
          <span onClick={()=> props.setPopupShow(!(props.popupShow))}>x</span>
        </div>
        <div className="p-body">
          <h4>
            다음 정보로 가입 된 아이디가 총 개 <span>1</span> 있습니다.
          </h4>
          <form action="#">
            <div className="f-form-group">
              <label htmlFor="name">이 름</label>
              <input type="text" placeholder="홍 길 동" />
            </div>
            <div className="f-form-group">
              <label htmlFor="name">이메일 </label>
              <input type="text" placeholder="hong123@gmail.com" />
            </div>
            <div className="f-form-group">
              <label htmlFor="name">아이디</label>
              <input type="text" placeholder="hong***" />
            </div>
          </form>
        </div>
        <div className="p-footer">
          <button className="main-btn"> 로그인 하기</button>
          <button className="ouline-btn">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
