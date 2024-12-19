import { Card, Col, Row } from "react-bootstrap";
import Post from "../types/Post";

interface SinglePostProps {
  p: Post;
}

const SinglePost = ({ p }: SinglePostProps) => {
  return (
    <>
      <Col xs={12} md={12} className="mb-2">
        <Card>
          <Card.Body>
            <Row>
              <Col md={2}>
                <img
                  className="profilePic-centralSection-hpostHomePage rounded-5 me-3"
                  src={p.user.image}
                  alt="user-image"
                />
              </Col>
              <Col md={10}>
                <h5 className=" mb-0">
                  {p.user.name} {p.user.surname}
                </h5>
                <div className="centralSection-hpostHomePage-fontPost">
                  {p.createdAt}
                </div>
              </Col>
              <Col className="mt-4">{p.text}</Col>
            </Row>
          </Card.Body>
          <Card.Body className="pt-1 pb">
            <div className="d-flex justify-content-center justify-content-around">
              <button className="centralSection-homePage-button">
                <i className="bi bi-hand-thumbs-up"></i> Consiglia
              </button>
              <button className="centralSection-homePage-button">
                <i className="bi bi-chat-dots"></i> Commenta
              </button>
              <button className="centralSection-homePage-button">
                <i className="bi bi-recycle"></i> Diffondi il post
              </button>
              <button className="centralSection-homePage-button">
                <i className="bi bi-send"></i> Invia
              </button>
            </div>
          </Card.Body>
        </Card>
        {/* <div>
            <button>Mostra altro di aggiornamenti del feed</button>
        </div> */}
      </Col>
    </>
  );
};

export default SinglePost;

{
  /* <Card>
  <Card.Body>
    <Row>
      <Col md={2}></Col>
      <Col md={10}></Col>
    </Row>
    <div>
      <img
        className="profilePic-centralSection-hpostHomePage rounded-5 me-3"
        src={p.user.image}
        alt=""
      />
      {p.user.name} {p.user.surname}
      <div className=" ms-5 fs-6">{p.createdAt}</div>
    </div>
    <Card.Text>{p.text}</Card.Text>
  </Card.Body>
  <Card.Body>
    <div className="d-flex justify-content-center">
      <button>Consiglia</button>
      <button>Commenta</button>
      <button>Diffondi il post</button>
      <button>Invia</button>
    </div>
  </Card.Body>
</Card>; */
}
