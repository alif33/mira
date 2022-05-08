const MemberListTable = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">선택</th>
          <th scope="col">회원명(아이디)</th>
          <th scope="col">휴대폰 번호</th>
          <th scope="col">회원 분류</th>
          <th scope="col">단체명</th>
          <th scope="col">가입일</th>
          <th scope="col">상세보기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1,000</th>
          <td>Mark</td>
          <td>홍길동(abc1234</td>
          <td>010 1234-5678</td>
          <td>일반(무소속)</td>
          <td>@mdo</td>
          <td>2022-02-15</td>
          <td>
            <button className="main-btn">상세 보기</button>
          </td>
        </tr>
        <tr>
          <th scope="row">1,000</th>
          <td>Mark</td>
          <td>홍길동(abc1234</td>
          <td>010 1234-5678</td>
          <td>일반(무소속)</td>
          <td>@mdo</td>
          <td>2022-02-15</td>
          <td>
            <button className="main-btn">상세 보기</button>
          </td>
        </tr>
        <tr>
          <th scope="row">1,000</th>
          <td>Mark</td>
          <td>홍길동(abc1234</td>
          <td>010 1234-5678</td>
          <td>일반(무소속)</td>
          <td>@mdo</td>
          <td>2022-02-15</td>
          <td>
            <button className="main-btn">상세 보기</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MemberListTable;
