import { GrSearch } from "react-icons/gr";

interface popupProps {
  popupShow: boolean;
  setPopupShow: any;
}
const GroupInquiryPopup = (props: popupProps) => {
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
          <form action="#">
            <div className="f-form-group">
              <label htmlFor="name">단체명</label>
              <input type="text" placeholder="홍 길 동" />
              <span>
                <GrSearch />
              </span>
            </div>
          </form>
          <div className="popup-table">
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>선택</th>
                  <th>단체명</th>
                  <th>담당자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>[]</td>
                  <td>OO그룹</td>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>[]</td>
                  <td>OO그룹</td>
                  <td>홍길동</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-footer">
          <button className="main-btn">확 인</button>
        </div>
      </div>
    </div>
  );
};

export default GroupInquiryPopup;
