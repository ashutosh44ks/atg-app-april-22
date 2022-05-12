import Header from "../Components/Header";
import GroupHead from "../Components/GroupHead";
import Main from "../Components/Main";
import ModalJS from "../Components/ModalJS";
import LoginCardMobile from "../Components/LoginCardMobile";
import { useState, useEffect } from "react";

function Group({ name, pronoun }) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", resizeSetter);
    return () => {
      window.removeEventListener("resize", resizeSetter);
    };
  }, [width]);
  const resizeSetter = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <GroupHead name={"Computer Engineering"} pronoun={"Computer Engineers"} />
      <Main open={open} setOpen={setOpen} />
      {width >= 550 ? (
        <ModalJS open={open} setOpen={setOpen} />
      ) : (
        <LoginCardMobile open={open} setOpen={setOpen} />
      )}
    </div>
  );
}

export default Group;
