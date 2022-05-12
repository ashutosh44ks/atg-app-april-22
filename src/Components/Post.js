import "./stylesheets/Post.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { BsThreeDots, BsShareFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";

const PostNormal = ({ post }) => {
  if (post.type === "Education" || post.type === "Article")
    return (
      <Card className="mb-3">
        <div
          className="cardImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/postData/article${post.id}.png)`,
          }}
        ></div>
        <CardBody>
          <CardText className="cardType">{post.svg + " " + post.type}</CardText>
          <CardTitle tag="h5" className="cardTitle">
            {post.title} <BsThreeDots />
          </CardTitle>
          <CardText className="cardContent">{post.content}</CardText>
          <CardText>
            <div className="cardFooter">
              <div className="author">
                <img
                  className="me-2"
                  src={`${process.env.PUBLIC_URL}/postData/author${post.id}.png`}
                  alt="author-pic"
                />
                {post.author}
              </div>
              <div className="footer-right">
                <GrView className="me-2" />
                {post.views}
                <Button
                  className="m-1 ms-4 btn"
                  style={{ backgroundColor: "#EDEEF0", color: "black" }}
                >
                  <BsShareFill />
                </Button>
              </div>
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
  else
    return (
      <Card className="mb-3">
        {post.type === "Meetup" ? (
          <div
            className="cardImg"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/postData/article${post.id}.png)`,
            }}
          ></div>
        ) : (
          ""
        )}
        <CardBody>
          <CardText className="cardType">{post.svg + " " + post.type}</CardText>
          <CardTitle tag="h5" className="cardTitle">
            {post.title} <BsThreeDots />
          </CardTitle>
          <CardText className="cardContent">
            <div>
              {post.info} {post.location}
            </div>
            <Button block color="light" className="my-3 btn-block">
              {post.btnContent}
            </Button>
          </CardText>
          <CardText>
            <div className="cardFooter">
              <div className="author">
                <img
                  className="me-2"
                  src={`${process.env.PUBLIC_URL}/postData/author${post.id}.png`}
                  alt="author-pic"
                />
                {post.author}
              </div>
              <div className="footer-right">
                <GrView className="me-2" />
                {post.views}
                <Button
                  className="m-1 ms-4 btn"
                  style={{ backgroundColor: "#EDEEF0", color: "black" }}
                >
                  <BsShareFill />
                </Button>
              </div>
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
};

export default PostNormal;
