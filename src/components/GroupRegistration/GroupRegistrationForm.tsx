const GroupRegistrationForm = () => {
  return (
    <div className="member-registration">
      <form action="#">
        <div className="f-form-group">
          <label htmlFor="name">이 름</label>
          <div className="form-input">
            <input type="text" placeholder="홍 길 동" />
            <button className="main-btn">중복 조회</button>
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">이메일 </label>
          <div className="form-input">
            <input type="text" placeholder="hong123@gmail.com" />
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">아이디</label>
          <div className="form-input">
            <input type="text" placeholder="hong***" />
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">아이디</label>
          <div className="form-input">
            <input type="text" placeholder="hong***" />
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">이 름</label>
          <div className="form-input">
            <input type="text" placeholder="홍 길 동" />
            <button className="main-btn">중복 조회</button>
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">이 름</label>
          <div className="form-input">
            <input type="text" placeholder="홍 길 동" />
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">이 름</label>
          <div className="form-input">
            <input type="text" placeholder="홍 길 동" />
            <button className="main-btn">중복 조회</button>
          </div>
        </div>
        <div className="f-form-group">
          <label htmlFor="name">
            sms 및 email 수신동의 (이벤트정보) <span>*</span>
          </label>
          <div className="form-input">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />{" "}
              <label htmlFor="exampleRadios1" className="check-label">
                미입력
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label htmlFor="exampleRadios2" className="check-label">
                남성{" "}
              </label>
            </div>
            <span>*이벤트 및 할인쿠폰 발행시 알려드립니다.</span>
          </div>
        </div>
        <div className="form-btn">
          <button className="main-btn">회원 등록</button>
          <button className="ouline-btn"> 목록으로</button>
        </div>
      </form>
    </div>
  );
};

export default GroupRegistrationForm;
