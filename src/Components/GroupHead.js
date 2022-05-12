import "./stylesheets/GroupHead.css";
import { BsArrowLeft } from "react-icons/bs";
const GroupHead = ({name, pronoun}) => {
  return (
    <div className="grp-head">
      <BsArrowLeft className="grp-head-back-btn" />
      <div className="grp-title">{name}</div>
    <div className="grp-info">{Math.floor(Math.random()*10000)} {pronoun} follow this</div>
    </div>
  );
};

export default GroupHead;
