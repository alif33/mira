import Navbar from "../src/components/navbar/Navbar";
import Find_id from "../src/Find_id";

const gnb = () => {
    return (
       <div className="gnb">
           <Navbar/>
           <Find_id/>
       </div>
    );
};

export default gnb;