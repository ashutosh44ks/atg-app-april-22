import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Row,
  Col,
  List,
} from "reactstrap";
import PostsContainer from "./PostsContainer";
import { MdArrowDropDown, MdEdit } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";

const MainNav = ({ open, setOpen }) => {
  const [dd, setDD] = useState(false);
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <Nav tabs className="main-nav">
        <NavItem className="nav-item-active">
          <NavLink className="nav-link active">All Posts(32)</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link">Article</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link">Event</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link">Education</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link">Job</NavLink>
        </NavItem>
        <NavItem className="nav-item-dd">
          <Button
            style={{ backgroundColor: "#EDEEF0", color: "black" }}
            onClick={() => setDD(!dd)}
          >
            Filter: {filter} <MdArrowDropDown />
          </Button>
          {dd ? (
            <List className="filter-dd">
              <li
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  setDD(false);
                }}
              >
                All
              </li>
              <li
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  setDD(false);
                }}
              >
                Article
              </li>
              <li
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  setDD(false);
                }}
              >
                Event
              </li>
              <li
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  setDD(false);
                }}
              >
                Education
              </li>
              <li
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  setDD(false);
                }}
              >
                Job
              </li>
            </List>
          ) : (
            ""
          )}
        </NavItem>
        <div className="ms-auto btn-grp-main-nav">
          <Button
            className="m-1 btn btn-post"
            style={{ backgroundColor: "#EDEEF0", color: "black" }}
          >
            Write a Post <MdArrowDropDown />
          </Button>
          <Button
            className="m-1 btn btn-join"
            color="primary"
            onClick={() => setOpen(true)}
          >
            <AiOutlineUsergroupAdd style={{ margin: "0px 5px 0 0" }} />
            Join Group
          </Button>
        </div>
      </Nav>
      <TabContent activeTab="1">
        <TabPane tabId="1">
          <Row>
            <Col md="9" className="post-container-parent">
              <PostsContainer />
            </Col>
            <Col className="pt-4 side-main">
              <div className="location py-2">
                <span>
                  <GoLocation /> Noida, India
                </span>
                <MdEdit />
              </div>
              <div className="location-info py-4">
                <RiErrorWarningLine /> Your location will help us serve better
                and extend a personalised experience.
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">2</TabPane>
        <TabPane tabId="3">3</TabPane>
        <TabPane tabId="4">4</TabPane>
        <TabPane tabId="5">5</TabPane>
      </TabContent>
    </div>
  );
};

export default MainNav;
