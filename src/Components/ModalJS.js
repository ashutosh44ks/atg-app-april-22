import { Alert, Modal, ModalBody, Row, Col, Input, Button } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import "./stylesheets/ModalJS.css";
const ModalJS = ({ open, setOpen }) => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Modal isOpen={open} toggle={() => setOpen(false)} size="lg">
        <Alert className="modal-head modal-lg-only">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </Alert>
        <ModalBody className="px-4">
          <Row>
            {tab === 1 ? (
              <Col>
                <div className="modal-rt-head mb-3">Create Account</div>
                <div className="input-name">
                  <Input placeholder="First Name" type="text" />
                  <Input placeholder="Last Name" type="text" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
                <div className="btn-grp-modal">
                  <Button className="mb-3 rounded-pill" color="primary">
                    Create Account
                  </Button>
                  <Button className="border border-1 mb-1" outline>
                    <BsFacebook className="mx-1" /> Sign Up With Facebook
                  </Button>
                  <Button className="border border-1" outline>
                    <FcGoogle className="mx-1" /> Sign up with Google
                  </Button>
                </div>
              </Col>
            ) : (
              <Col>
                <div className="modal-rt-head mb-3">Sign In</div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <div className="btn-grp-modal">
                  <Button className="mb-3 rounded-pill" color="primary">
                    Sign In
                  </Button>
                  <Button className="border border-1 mb-1" outline>
                    <BsFacebook className="mx-1" /> Sign Up With Facebook
                  </Button>
                  <Button className="border border-1" outline>
                    <FcGoogle className="mx-1" /> Sign up with Google
                  </Button>
                </div>
              </Col>
            )}

            <Col className="modal-lg-only">
              {tab === 1 ? (
                <div
                  className="side-info-modal text-end"
                  style={{ cursor: "pointer" }}
                  onClick={() => setTab(2)}
                >
                  Already have an account?{" "}
                  <span className="color-primary">Sign In</span>
                </div>
              ) : (
                <div
                  className="side-info-modal text-end"
                  style={{ cursor: "pointer" }}
                  onClick={() => setTab(1)}
                >
                  Don’t have an account yet?{" "}
                  <span className="color-primary">Create new for free!</span>
                </div>
              )}
              <div className="modal-img"></div>
              {tab === 1 ? (
                <div className="side-info-modal-2 text-center">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalJS;
