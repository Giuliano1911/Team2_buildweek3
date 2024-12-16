import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Row,
  Col,
  Form,
} from 'react-bootstrap'
import Logo from '../assets/LinkedIn Logo.png'
import ProfileImg from '../assets/Generic profile.png'
import Profile from '../types/Profile'
import { useEffect, useState } from 'react'

interface LinkedInNavbarPops {
  profile: Profile
  isLoading: boolean
  isError: boolean
}

const LinkedInNavbar = ({
  profile,
  isLoading,
  isError,
}: LinkedInNavbarPops) => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondNavbar(true)
      } else {
        setShowSecondNavbar(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar
        expand="lg"
        className="d-flex w-100 bg-body-tertiary shadow-sm fixed-top z-1 "
      >
        <Container fluid className="mx-0 ">
          <Row className="d-flex flex-grow-1 w-100 justify-content-center">
            <Col className="d-flex col-12 col-lg-10 justify-content-between ">
              <div className="d-flex">
                <Navbar.Brand href="#home" className="my-auto">
                  <img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top "
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Form className="my-auto">
                  <Row>
                    <Col xs="auto" className="p-0 m-1">
                      <Form.Control
                        type="text"
                        placeholder="Cerca"
                        className="py-1 px-4 m-0 border-0 bg-body-secondary"
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="d-flex">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#rete">Rete</Nav.Link>
                  <Nav.Link href="#lavoro">Lavoro</Nav.Link>
                  <Nav.Link href="#messaggistica">Messaggistica</Nav.Link>
                  <Nav.Link href="#notifiche">Notifiche</Nav.Link>
                  <NavDropdown
                    title={
                      <>
                        <img
                          src={ProfileImg}
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          alt="Profile"
                        />{' '}
                        Tu
                      </>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <div className="d-flex">
                        <img
                          src={ProfileImg}
                          width="80"
                          height="80"
                          className="d-inline-block align-top rounded-circle"
                          alt="Profile"
                        />
                        <p>Name - Last name</p>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Post e attività
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <a
                  href=""
                  className="text-danger-emphasis d-block text-center d-none d-lg-block"
                >
                  Prova Premium per 0 <span className="d-block">EUR</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        className={`navbar-second d-flex w-100 bg-body-tertiary shadow-sm fixed-top z-0 ${
          showSecondNavbar ? 'show' : ''
        }`}
      >
        <Container fluid className="mx-0 ">
          <Row className="d-flex flex-grow-1 w-100 justify-content-center">
            <Col className="d-flex col-12 col-lg-10 justify-content-between ">
              <Navbar.Brand href="#home" className="my-auto">
                <img
                  src={Logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top "
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default LinkedInNavbar
