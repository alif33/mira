import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TablePagination = () => {
  return (
    <ul className="table-pagenation">
      <li><AiOutlineLeft/></li>
      <li>1</li>
      <li>2</li>
      <li className="active">3</li>
      <li>...</li>
      <li>9</li>
      <li><AiOutlineRight/></li>
    </ul>
  );
};

export default TablePagination;
