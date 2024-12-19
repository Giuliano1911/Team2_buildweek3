import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Row,
  Col,
  Form,
  Dropdown,
} from 'react-bootstrap'
import Logo from '../assets/LinkedIn Logo.png'
import ProfileImg from '../assets/Generic profile.png'
import SearchIcon from '../assets/Search Icon.png'
import HomeIcon from '../assets/Home Icon.png'
import WebIcon from '../assets/Web Icon.png'
import JobIcon from '../assets/Job Icon.png'
import MessageIcon from '../assets/Message Icon.png'
import NotificationIcon from '../assets/Notification Icon.png'
import FirmIcon from '../assets/Firm Icon.png'
import Profile from '../types/Profile'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

interface LinkedInNavbarProps {
  profile: Profile
  isLoading: boolean
  isError: boolean
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const LinkedInNavbar = ({
  profile,
  isLoading,
  isError,
  setSearch,
}: LinkedInNavbarProps) => {
  const [searchJobs, setSearchJobs] = useState<string>('')
  const [showSecondNavbar, setShowSecondNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowSecondNavbar(true)
      } else {
        setShowSecondNavbar(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef(null)
  const handleSearchClick = () => {
    setShowSearch(true)
  }
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearch(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <Navbar
        expand="lg"
        className="d-flex w-100 bg-body-tertiary shadow-sm fixed-top z-2 py-0 z-3"
      >
        <Container fluid className="mx-0">
          <Row className="d-flex flex-grow-1 w-100 justify-content-center">
            <Col className="d-flex col-12 col-lg-10 justify-content-between py-1 ">
              <div className="d-flex">
                <Link
                  to="/homepage"
                  className="my-auto me-1 me-lg-3 py-0 nav-link"
                >
                  <img
                    src={Logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top rounded-1 p-0"
                    alt="LinkedIn Logo"
                  />
                </Link>
                <Form
                  className="my-auto d-none d-lg-block"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSearch(searchJobs)
                  }}
                >
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
                        value={searchJobs}
                        className="textform py-2 m-0 border-0 bg-body-secondary px-5 d-none d-lg-block"
                        onChange={(e) => {
                          setSearchJobs(e.target.value)
                        }}
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="d-flex flex-grow-1 justify-content-end me-lg-auto">
                <Nav className="d-flex flex-row justify-content-around w-100 justify-content-lg-end">
                  <Form
                    className={`my-auto ${
                      showSearch ? 'd-block' : 'd-none'
                    } d-lg-none`}
                    ref={searchRef}
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSearch(searchJobs)
                    }}
                  >
                    <Row>
                      <Col xs="auto" className="p-0 m-1">
                        <Form.Control
                          type="text"
                          placeholder="Cerca"
                          value={searchJobs}
                          className="textform py-2 m-0 border-0 bg-body-secondary px-5 d-none d-lg-block"
                          onChange={(e) => {
                            setSearchJobs(e.target.value)
                          }}
                        />
                      </Col>
                    </Row>
                  </Form>
                  {!showSearch && (
                    <>
                      <Nav.Link
                        href="#home"
                        className="my-auto p-0 pt-1"
                        onClick={handleSearchClick}
                      >
                        <div className="d-flex flex-grow-1 flex-column align-items-center d-lg-none">
                          <img
                            src={SearchIcon}
                            height="20"
                            className="mx-lg-4 px-2"
                            alt="Home Icon"
                          />
                        </div>
                      </Nav.Link>
                      <Link
                        to="/homepage"
                        className="my-auto p-0 pt-1 nav-link"
                      >
                        <div className="icons d-flex flex-grow-1 flex-column align-items-center">
                          <img
                            src={HomeIcon}
                            height="20"
                            className="mx-lg-4 px-2"
                            alt="Home Icon"
                          />
                          <p className=" m-0 d-none text-dark d-lg-block mt-1">
                            Home
                          </p>
                        </div>
                      </Link>
                      <Nav.Link href="" className="my-auto p-0 pt-1">
                        <div className="icons d-flex flex-grow-1 flex-column align-items-center">
                          <img
                            src={WebIcon}
                            height="20"
                            className="mx-lg-4 px-2"
                            alt="Web Icon"
                          />
                          <p className="m-0 d-none text-dark d-lg-block mt-1">
                            Rete
                          </p>
                        </div>
                      </Nav.Link>
                      <Link to="/jobs" className="my-auto p-0 pt-1 nav-link">
                        <div className="icons d-flex flex-grow-1 flex-column align-items-center">
                          <img
                            src={JobIcon}
                            height="20"
                            className="mx-lg-4 px-2"
                            alt="Job Icon"
                          />
                          <p className="m-0 d-none text-dark d-lg-block mt-1">
                            Lavoro
                          </p>
                        </div>
                      </Link>
                      <Nav.Link href="" className="my-auto p-0 pt-1">
                        <div className="icons d-flex flex-grow-1 flex-column align-items-center">
                          <img
                            src={MessageIcon}
                            height="20"
                            className="mx-lg-4 px-2"
                            alt="Message Icon"
                          />
                          <p className="m-0 d-none text-dark d-lg-block mt-1">
                            Messaggistica
                          </p>
                        </div>
                      </Nav.Link>
                      <Nav.Link href="" className="my-auto p-0 pt-1">
                        <div className="icons d-flex flex-grow-1 flex-column align-items-center">
                          <img
                            src={NotificationIcon}
                            height="20"
                            className="mx-lg-4 px-2"
                            alt="Notification Icon"
                          />
                          <p className="m-0 d-none text-dark d-lg-block mt-1">
                            Notifiche
                          </p>
                        </div>
                      </Nav.Link>
                      <NavDropdown
                        title={
                          <div className="d-flex flex-grow-1 flex-column align-items-center py-0 ">
                            {!isError && !isLoading ? (
                              <img
                                src={profile.image}
                                width="20"
                                height="20"
                                className="d-inline-block align-top rounded-circle mx-lg-4"
                                alt="Profile"
                              />
                            ) : (
                              <img
                                src={ProfileImg}
                                width="20"
                                height="20"
                                className="d-inline-block align-top mx-lg-4"
                                alt="Profile"
                              />
                            )}

                            <div className="icons d-flex text dark align-items-center d-none d-lg-block mt-1">
                              Tu
                              <span className="ms-1 dropdown-caret">
                                <i className="bi bi-caret-down-fill"></i>
                              </span>
                            </div>
                          </div>
                        }
                        id="basic-nav-dropdown"
                        className="m-0 p-0 pt-1 border-end  my-lg-0"
                      >
                        {!isError && !isLoading ? (
                          <>
                            <NavDropdown.Item className="p-2 m-0 pb-0 bg-transparent">
                              <Link to="/" className="nav-link p-0">
                                <div className="d-flex text-dark">
                                  <img
                                    src={profile.image}
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-top rounded-circle"
                                    alt="Profile"
                                  />
                                  <div className="ps-2">
                                    <p className="fs-6 fw-semibold mb-0">
                                      {profile.name} {profile.surname}
                                    </p>
                                    <p>{profile.title}</p>
                                  </div>
                                </div>
                              </Link>
                              <Link to="/">
                                <button className="btn btn-outline-primary w-100 my-2 fw-semibold rounded-5">
                                  Visualizza profilo
                                </button>
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className="my-0" />
                            <NavDropdown.Item className="p-2 m-0">
                              <div className="ps-2">
                                <p className="fs-6 fw-semibold mb-2">Account</p>
                                <div className="mb-1">
                                  <i className="bi bi-square-fill me-2"></i>
                                  <span>Prova 1 mese di Premium per 0</span>
                                  <p className="ms-4 mb-2">EUR</p>
                                </div>
                                <p className="mb-2 text-secondary">
                                  Impostazioni e privacy
                                </p>
                                <p className="mb-2 text-secondary">Guida</p>
                                <p className="mb-0 text-secondary">Lingua</p>
                              </div>
                            </NavDropdown.Item>

                            <NavDropdown.Divider className="my-0" />
                            <NavDropdown.Item className="p-2 m-0">
                              <div className="ps-2">
                                <p className="fs-6 fw-semibold mb-2">
                                  Gestisci
                                </p>
                                <p className="mb-2 text-secondary">
                                  Post e attività
                                </p>
                                <p className="mb-0 text-secondary">
                                  Account per la pubblicazione di off..
                                </p>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className="my-0" />
                            <NavDropdown.Item className="p-2 m-0">
                              <div className="ps-2">
                                <p className="mb-0 text-secondary">Esci</p>
                              </div>
                            </NavDropdown.Item>
                          </>
                        ) : null}
                      </NavDropdown>
                    </>
                  )}

                  <NavDropdown
                    title={
                      <>
                        <div className="icons d-flex flex-column align-items-center p-0">
                          <img
                            src={FirmIcon}
                            width="20"
                            height="20"
                            className="d-inline-block align-top"
                            alt="Profile"
                          />
                          <div className="d-flex text-dark align-items-center d-none d-lg-block mt-1">
                            Per le aziende
                            <span className="ms-1 dropdown-caret">
                              <i className="bi bi-caret-down-fill"></i>
                            </span>
                          </div>
                        </div>
                      </>
                    }
                    id="basic-nav-dropdown"
                    className="dropdown-toggle-no-caret my-auto py-0 pt-1 px-2 d-none d-lg-block"
                  >
                    <Dropdown.Item href="#/action-1">
                      <p className="m-0 fs-6">
                        <strong>Assumi su LinkedIn</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Trova, attrai e assumi
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <p className="m-0 fs-6">
                        <strong>Vendi con LinkedIn</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Sblocca nuove opprtunità di <br />
                        vendita
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <p className="m-0 fs-6">
                        <strong>Offerta di lavoro gratuita</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Ottieni rapidamente candidati <br />
                        qualificati
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <p className="m-0 fs-6">
                        <strong>Fai pubblicità con LinkedIn</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Acquisisci clienti e fai crescere la
                        <br />
                        tua azienda
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <p className="m-0 fs-6">
                        <strong>Inizia con Premium</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Amplia e sfrutta la tua rete
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <p className="m-0 fs-6">
                        <strong>Impara con LinkedIn</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Corsi per formare i tuoi dipendenti
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <p className="m-0 fs-6">
                        <strong>Admin Center</strong>
                      </p>
                      <p className="m-0 text-secondary">
                        Gestisci i dettagli di fatturazione e <br /> account
                      </p>
                    </Dropdown.Item>
                  </NavDropdown>
                </Nav>

                <a className="premium  d-block text-center d-none d-lg-block my-auto">
                  Prova Premium per 0 <span className="d-block px-5">EUR</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
      {!isError && !isLoading ? (
        <Navbar
          expand="lg"
          className={`navbar-second d-flex w-100 bg-body-tertiary d-none pb-0 d-lg-block shadow-sm fixed-top z-1 ${
            showSecondNavbar ? 'show' : ''
          }`}
        >
          <Container fluid className="mx-0 ">
            <Row className="d-flex flex-grow-1 w-100 justify-content-center">
              <Col className="d-flex col-12 col-lg-10 justify-content-between ">
                <Link to="/" className="nav-link p-0 d-flex">
                  <Navbar.Brand className="my-auto">
                    <img
                      src={profile.image}
                      width="30"
                      height="30"
                      className="d-inline-block align-top rounded-circle"
                      alt="Profile"
                    />
                  </Navbar.Brand>
                  <div className="my-auto">
                    <p className="fs-6 fw-semibold mb-0">
                      {profile.name} {profile.surname}
                    </p>
                    <p className="mb-0">{profile.title}</p>
                  </div>
                </Link>

                <div className="d-flex ">
                  <button className="btn btn-outline-dark fs-6 my-2 ms-2 fw-semibold rounded-5">
                    Risorse
                  </button>
                  <button className="btn btn-outline-primary fs-6 my-2 ms-2 fw-semibold rounded-5">
                    Aggiungi sezione del profilo
                  </button>
                  <button className="btn btn-primary fs-6 my-2 ms-2 fw-semibold rounded-5">
                    Disponibile per
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      ) : null}
    </>
  )
}

export default LinkedInNavbar
