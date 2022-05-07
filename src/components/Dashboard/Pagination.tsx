import Link from 'next/link';

const Pagination = () => {
    return (
        <div className="pagination-nav">
        <h3>회원 관리</h3>
        <div className="pagination">
            <ul>
                <li>
                    <Link href="/">Admin</Link>
                    <span></span>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Pagination;