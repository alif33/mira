import Link from 'next/link';
import {AiOutlineRight} from 'react-icons/ai';

const Pagination = () => {
    return (
        <div className="pagination-nav">
        <h3>메인 페이지</h3>
        <div className="pagination">
            <ul>
                <li>
                    <Link href="/">Admin</Link>
                    <span><AiOutlineRight/></span>
                </li>
                <li>
                    <Link href="/">메인 페이지</Link>
                    <span><AiOutlineRight/></span>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Pagination;