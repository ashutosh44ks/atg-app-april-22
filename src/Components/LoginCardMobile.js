import { Card, CardBody, Input, Button } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import "./stylesheets/ModalJS.css";
const LoginCardMobile = ({ open, setOpen }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div
        className={open ? "bg-card" : ""}
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      {open ? (
        <div className="login-card-container">
          <Card isOpen={open} toggle={() => setOpen(false)} size="lg">
            <CardBody className="px-4">
              {tab === 1 ? (
                <>
                  <div className="modal-rt-head mb-3">Create Account</div>
                  <div className="input-name">
                    <Input placeholder="First Name" type="text" />
                    <Input placeholder="Last Name" type="text" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Password" type="password" />
                  <Input placeholder="Confirm Password" type="password" />
                  <div className="btn-grp-modal">
                    <div className="card-btn-login">
                      <Button className="mb-3 rounded-pill" color="primary">
                        Create Account
                      </Button>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setTab(2)}
                      >
                        or, Sign In
                      </span>
                    </div>
                    <Button className="border border-1 mb-1" outline>
                      <BsFacebook className="mx-1" /> Sign Up With Facebook
                    </Button>
                    <Button className="border border-1" outline>
                      <FcGoogle className="mx-1" /> Sign up with Google
                    </Button>
                  </div>
                  <div className="side-info-modal-2 text-center">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </div>
                </>
              ) : (
                <>
                  <div className="modal-rt-head mb-3">Sign In</div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Password" type="password" />
                  <div className="btn-grp-modal">
                    <div className="card-btn-login">
                      <Button className="mb-3 rounded-pill" color="primary">
                        Sign In
                      </Button>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setTab(1)}
                      >
                        or, Create Account
                      </span>
                    </div>
                    <Button className="border border-1 mb-1" outline>
                      <BsFacebook className="mx-1" /> Sign Up With Facebook
                    </Button>
                    <Button className="border border-1" outline>
                      <FcGoogle className="mx-1" /> Sign up with Google
                    </Button>
                  </div>
                  <div className="side-info-modal-2 text-center">
                    Forgot Password?
                  </div>
                </>
              )}
            </CardBody>
          </Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginCardMobile;
