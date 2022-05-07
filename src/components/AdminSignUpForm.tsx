const AdminSignUpForm = () => {
  return (
    <div className="login">
      <h2>비밀번호 변경</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">아이디</label>
          <input type="text" placeholder="이름을 입력해주세요" />
        </div>
        <div className="form-group">
          <label htmlFor="email">비밀번호</label>
          <input type="text" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div className="form-group">
          <label htmlFor="email">비밀번호 확인</label>
          <input type="text" placeholder="비밀번호를 다시 입력해주세요" />
        </div>
        <div className="form-group">
          <label htmlFor="email">이름</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">휴대폰번호</label>
          <input
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
          />
        </div>
      </form>
      <button className="main-btn">회원 가입 하기</button>
      <button className="transparent-btn">로그인 페이지로</button>
    </div>
  );
};

export default AdminSignUpForm;
