import "./stylesheets/Header.css";
import { MdArrowDropDown } from "react-icons/md";
const Header = ({ open, setOpen }) => {
  return (
    <div id="navbar" className="p-3">
      <div id="brand"></div>
      <input
        name="search"
        placeholder="🔎 Search for your favorite groups in ATG"
        id="search-bar"
        className="pe-4 ps-3 py-1"
      />
      <div id="navbar-right" onClick={() => setOpen(true)}>
        Create account. <span>It’s free!</span> <MdArrowDropDown />
      </div>
    </div>
  );
};

export default Header;
