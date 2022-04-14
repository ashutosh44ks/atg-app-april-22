import React from "react";
import MainNav from "./MainNav";

const Main = ({ open, setOpen }) => {
  return (
    <div id="main">
      <MainNav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Main;
