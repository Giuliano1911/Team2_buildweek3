import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import SideBarImg from '../assets/image/image 1.png'
import Burger from '../assets/image/Burger.svg'
import Oranye from '../assets/image/Oranye.svg'
import bunny from '../assets/image/bunny.png'

const CompanySideBar = () => {
  return (
    <Container className="mt-3">
      <Card className="sidebar mb-2">
        <img
          src={SideBarImg}
          alt="image-1"
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </Card>
      <Card>
        <Container fluid className="p-0">
          <h4 className="p-2">Pagine affiliate</h4>
          <Row>
            <Col xs={3} md={3} className="p-0 position-relative">
              <img
                className="biggerimg position-absolute"
                src={Burger}
                alt="family-logo"
              />
            </Col>
            <Col xs={9} md={9}>
              <div>
                <h4 className="mb-1">Orange Burger | Restaurant</h4>
                <p className="mb-2">Servizio di consegne a domicilio</p>
                <p>Affiliata</p>
                <button className=" fs-6 fw-medium rounded-5 py-1 px-3 bg-white btn-outline-dark">
                  <i className=" bi bi-plus"> </i>Segui
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container fluid className="p-0">
          <Row>
            <Col xs={3} md={3} className="p-0 position-relative">
              <img
                className="position-absolute w-100 ms-2"
                src={Oranye}
                alt="family-logo"
              />
            </Col>
            <Col xs={9} md={9}>
              <div>
                <h4 className="mb-1">Big Bold Food</h4>
                <p className="mb-2">Servizio catering</p>
                <p>Affiliata</p>
                <button className=" fs-6 fw-medium rounded-5 py-1 px-3 bg-white btn-outline-dark">
                  <i className=" bi bi-plus"> </i>Segui
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container fluid className="p-0 mb-2">
          <Row>
            <Col xs={3} md={3} className="p-0 position-relative">
              <img
                className="w-100 position-absolute ms-2"
                src={bunny}
                alt="family-logo"
              />
            </Col>
            <Col xs={9} md={9}>
              <div>
                <h4 className="mb-1">Graffiti Store</h4>
                <p className="mb-2">Negozio sneakers</p>
                <p>Affiliata</p>
                <button className=" fs-6 fw-medium rounded-5 py-1 px-3 bg-white btn-outline-dark">
                  <i className=" bi bi-plus"> </i>Segui
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  )
}

export default CompanySideBar
