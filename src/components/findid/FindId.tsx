interface popupProps {
  popupShow: boolean;
  setPopupShow: any;
}

const FindId = (props: popupProps) => {
  return (
    <div className="login">
      <h2>아이디 찾기</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input type="text" placeholder="이름을 입력해주세요" />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input type="text" placeholder="이메일을 입력해주세요" />
        </div>
      </form>
      <button className="main-btn btn-margin-top">아이디 찾기</button>
      <button className="ouline-btn btn-margin-top">비밀번호 찾기</button>
      <button
        className="transparent-btn"
        onClick={() => props.setPopupShow(!props.popupShow)}
      >
        <p>로그인 페이지로</p>
      </button>
    </div>
  );
};

export default FindId;
