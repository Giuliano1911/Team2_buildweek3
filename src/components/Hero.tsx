import Profile from '../types/Profile'
import CoverImg from '../assets/Generic cover.webp'
import Error1 from './Error1'
import Loading from './Loading'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface HeroProps {
  profile: Profile
  isLoading: boolean
  isError: boolean
}

const HeroSection = ({ profile, isLoading, isError }: HeroProps) => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card position-relative p-0">
          {isError && <Error1 />}
          {isLoading && <Loading />}
          {!isLoading && !isError && (
            <>
              <div className="mb-3">
                <img
                  src={CoverImg}
                  className="card-img-top"
                  alt="Copertina"
                  style={{ objectFit: 'cover', height: '200px' }}
                />

                <div
                  className="position-absolute translate-middle"
                  style={{
                    width: '155px',
                    height: '155px',
                    left: '100px',
                    top: '170px',
                  }}
                >
                  <img
                    src={profile.image}
                    className="rounded-circle border border-4 border-white "
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt="Profilo"
                  />
                </div>
              </div>
              {location.pathname === '/' && (
                <button
                  className="pencil btn position-absolute rounded-circle border-0"
                  onClick={handleShow}
                  style={{
                    right: '15px',
                    top: '215px',
                  }}
                >
                  <i className="bi bi-pencil fs-5"></i>
                </button>
              )}
              <div className="card-body text-start mt-4 px-4">
                <div className="d-flex">
                  <h3 className="card-title fw-bold mb-1">
                    {profile.name} {profile.surname}
                  </h3>
                  <button className="myButton btn ms-3 px-3 py-0 rounded-5 my-auto ">
                    <i className="bi bi-shield-check"></i>{' '}
                    <span className="fw-semibold">
                      Aggiungi badge di verifica
                    </span>
                  </button>
                </div>
                <p className="card-text text-muted">{profile.title}</p>
                <p className="text-muted small">
                  {profile.area}
                  <a href="#" className="text-decoration-none">
                    - Informazioni di contatto
                  </a>
                </p>
              </div>

              <div className="container px-4 pb-4 ">
                <div className="row gx-3 text-center ">
                  <div className="col d-flex flex-wrap">
                    <button className="btn btn-primary fs-6 my-2 me-2 fw-semibold rounded-5">
                      Disponibile per
                    </button>
                    <button className="btn btn-outline-primary fs-6 my-2 me-2 fw-semibold rounded-5">
                      Aggiungi sezione del profilo
                    </button>
                    <button className="btn btn-outline-primary fs-6 my-2 me-2 fw-semibold rounded-5">
                      Migliora Profilo
                    </button>
                    <button className="btn btn btn-outline-dark fs-6 my-2 me-2 fw-semibold rounded-5">
                      Risorse
                    </button>
                  </div>
                </div>

                <div className="row mt-3 text-center">
                  <div className="col-md-12">
                    <div className="alert alert-secondary p-2 mb-0">
                      <small className="text-muted">
                        Disponibile a lavorare:{' '}
                        <strong>Ruoli di Responsabile ufficio tecnico</strong>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                show={showModal}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
