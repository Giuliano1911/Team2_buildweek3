import { Col, Container, Row } from "react-bootstrap";
import SidebarPersonalProfiles from "./SidebarPersonalProfiles";

const SideBar = () => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items flex-column align-items-end">
          <Col
            sm={12}
            md={4}
            lg={4}
            className=" bg-white p-3 mt-3 m-2 rounded-3 custom-sidebar-border"
          >
            <h4>Lingua del profilo</h4>
            <p>Italiano</p>
            <hr />
            <h4>Profilo pubblico e URL</h4>
            <p>
              <a href="www.linkedin.com">www.linkedin.com</a>
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} className="d-flex align-items-center">
            <img
              className="w-100 rounded-3 custom-sidebar-border"
              src="src/assets/image/image 1.png"
              alt="image-1"
            />
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className=" bg-white p-3 m-2 rounded-3 custom-sidebar-border"
          >
            <h4>Persone che potresti conoscere</h4>
            <p>Dalla tua scuola o università</p>
            <SidebarPersonalProfiles />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img
              className="w-100 rounded-3 custom-sidebar-border"
              src="src/assets/image/image 1.png"
              alt="image-1"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideBar;
