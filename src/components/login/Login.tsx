import Link from "next/link";

const Login = () => {
  return (
    <div className="login">
      <h2>관리자 로그인
</h2>
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
      <button className="main-btn">로그인 하기</button>
      <button className="ouline-btn">관리자 회원 가입</button>
      <button className="ouline-btn">
          <Link href="/find_id">아이디 / 비밀번호 찾기</Link>
      </button>
    </div>
  );
};

export default Login;
