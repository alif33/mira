import Pagination from "../Dashboard/Pagination";
import MemberListTable from "./MemberListTable";
import TablePagination from "./TablePagination";

const MemberMainDashborad = () => {
  return (
    <div className="main-dashborad">
      <div className="dash-nav">
        <button>로그아웃</button>
      </div>
      <div className="m-d-main-section">
        <Pagination />
        <div className="empty-box"></div>
        <div className="text-right btn-right border-bottom">
          <button className="main-btn">조 회 </button>
          <button className="ouline-btn">초기화</button>
        </div>
        <div className="member-category-selection">
          <div className=" btn-right">
            <button className="ouline-btn">회원 분류 선택</button>
            <button className="main-btn">전체 체크</button>
            <button className="ouline-btn">SMS 발송</button>
          </div>
          <div className=" btn-right">
            <button className="main-btn">회원 등록 </button>
            <button className="ouline-btn red-btn">회원 삭제</button>
          </div>
        </div>
        <MemberListTable />
        <div className="table-footer">
          <div className="btn-left">
            <button className="ouline-btn">10개씩 보기</button>
            <button className="transparent-btn">총 1,000명의 회원</button>
            </div> <TablePagination />
        </div>
      </div>
    </div>
  );
};

export default MemberMainDashborad;
