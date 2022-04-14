import "./stylesheets/GroupHead.css";
import { BsArrowLeft } from "react-icons/bs";
const GroupHead = () => {
  return (
    <div className="grp-head">
      <BsArrowLeft className="grp-head-back-btn" />
      <div className="grp-title">Computer Engineering</div>
      <div className="grp-info">142,765 Computer Engineers follow this</div>
    </div>
  );
};

export default GroupHead;
