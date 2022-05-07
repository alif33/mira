import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="img/logo2.png" alt="" />
      <ul>
        <li>
          <Link href="/">회원 관리</Link>
        </li>
        <li>
          <Link href="/">상품 관리</Link>
        </li>
        <li>
          <Link href="/">주문 관리</Link>
        </li>
        <li>
          <Link href="/">예약 관리</Link>
        </li>
        <li>
          <Link href="/">이벤트 관리</Link>
        </li>
        <li>
          <Link href="/">커뮤니티 관리</Link>
        </li>
        <li>
          <Link href="/">통계 관리</Link>
        </li>
        <li>
          <Link href="/">관리자 권한</Link>
        </li>
        <li>
          <Link href="/">SMS 관리</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
