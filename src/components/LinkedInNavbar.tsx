import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Row,
  Col,
  Form,
} from 'react-bootstrap'
import Logo from '../assets/Logo.png'
import ProfileImg from '../assets/Generic profile.png'
import SearchIcon from '../assets/Search Icon.png'
import HomeIcon from '../assets/Home Icon.png'
import WebIcon from '../assets/Web Icon.png'
import JobIcon from '../assets/Job Icon.png'
import MessageIcon from '../assets/Message Icon.png'
import NotificationIcon from '../assets/Notification Icon.png'
import FirmIcon from '../assets/Firm Icon.png'
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
        className="d-flex w-100 bg-body-tertiary shadow-sm fixed-top z-1 py-0"
      >
        <Container fluid className="mx-0 ">
          <Row className="d-flex flex-grow-1 w-100 justify-content-center">
            <Col className="d-flex col-12 col-lg-10 justify-content-between ">
              <div className="d-flex">
                <Navbar.Brand href="#home" className="my-auto">
                  <img
                    src={Logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top rounded-1"
                    alt="LinkedIn Logo"
                  />
                </Navbar.Brand>
                <Form className="my-auto d-none d-lg-block">
                  <Row>
                    <Col xs="auto" className="p-0 m-1 position-relative">
                      <img
                        src={SearchIcon}
                        width="15"
                        height="15"
                        className="position-absolute top-50 start-0 translate-middle-y ms-3"
                        alt="Search Icon"
                      />
                      <Form.Control
                        type="text"
                        placeholder="Cerca"
                        className="textform py-2 m-0 border-0 bg-body-secondary px-5 d-none d-lg-block"
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="d-flex flex-grow-1 justify-content-end me-lg-auto">
                <Nav className="d-flex flex-row justify-content-evenly w-100 justify-content-lg-end">
                  <Nav.Link href="#home" className="my-auto p-0">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={HomeIcon}
                        height="20"
                        className="mx-4 px-2"
                        alt="Home Icon"
                      />
                      <p className="m-0 d-none d-lg-block mt-1">Home</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#rete" className="my-auto p-0">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={WebIcon}
                        height="20"
                        className="mx-4 px-2"
                        alt="Web Icon"
                      />
                      <p className="m-0 d-none d-lg-block mt-1">Rete</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#lavoro" className="my-auto p-0">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={JobIcon}
                        height="20"
                        className="mx-4 px-2"
                        alt="Job Icon"
                      />
                      <p className="m-0 d-none d-lg-block mt-1">Lavoro</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#messaggistica" className="my-auto p-0">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={MessageIcon}
                        height="20"
                        className="mx-4 px-2"
                        alt="Message Icon"
                      />
                      <p className="m-0 d-none d-lg-block mt-1">
                        Messaggistica
                      </p>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#notifiche" className="my-auto p-0">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={NotificationIcon}
                        height="20"
                        className="mx-4 px-2"
                        alt="Notification Icon"
                      />
                      <p className="m-0 d-none d-lg-block mt-1">Notifiche</p>
                    </div>
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <div className="d-flex flex-column align-items-center p-0">
                        {!isError && !isLoading ? (
                          <img
                            src={profile.image}
                            width="20"
                            height="20"
                            className="d-inline-block align-top rounded-circle mx-4"
                            alt="Profile"
                          />
                        ) : (
                          <img
                            src={ProfileImg}
                            width="20"
                            height="20"
                            className="d-inline-block align-top mx-4"
                            alt="Profile"
                          />
                        )}

                        <div className="d-flex align-items-center d-none d-lg-block mt-1">
                          Tu
                        </div>
                      </div>
                    }
                    id="basic-nav-dropdown"
                    className="dropdown-toggle-no-caret my-auto p-0"
                  >
                    {!isError && !isLoading ? (
                      <>
                        <NavDropdown.Item href="#action/3.1">
                          <div className="d-flex">
                            <img
                              src={profile.image}
                              width="80"
                              height="80"
                              className="d-inline-block align-top rounded-circle"
                              alt="Profile"
                            />
                            <p>
                              {profile.name} {profile.surname}
                            </p>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Esci
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          Post e attività
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          Esci
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Esci
                        </NavDropdown.Item>
                      </>
                    ) : null}
                  </NavDropdown>

                  <NavDropdown
                    title={
                      <>
                        <div className="d-flex flex-column align-items-center p-0">
                          <img
                            src={FirmIcon}
                            width="20"
                            height="20"
                            className="d-inline-block align-top"
                            alt="Profile"
                          />
                          <div className="d-flex align-items-center d-none d-lg-block mt-1">
                            Per le aziende
                          </div>
                        </div>
                      </>
                    }
                    id="basic-nav-dropdown"
                    className="d-none d-lg-block my-auto p-0"
                  >
                    <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
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
                  className="text-danger-emphasis d-block text-center d-none d-lg-block my-auto"
                >
                  Prova Premium per 0 <span className="d-block px-5">EUR</span>
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
