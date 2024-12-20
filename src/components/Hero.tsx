import Profile from '../types/Profile'
import CoverImg from '../assets/Generic cover.webp'
import Error1 from './Error1'
import Loading from './Loading'
import { useState } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from 'react-bootstrap'

interface HeroProps {
  personalProfile: Profile
  isLoading: boolean
  isError: boolean
  APIKEY: string
  setRestart: React.Dispatch<React.SetStateAction<boolean>>
}

interface InitialState {
  name: string
  surname: string
  email: string
  username: string
  bio: string
  title: string
  area: string
  image: string
}

const formData = new FormData()

const HeroSection = ({
  personalProfile,
  isLoading,
  isError,
  APIKEY,
  setRestart,
}: HeroProps) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalImg, setShowModalImg] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  const handleCloseImg = () => setShowModalImg(false)
  const handleShowImg = () => setShowModalImg(true)
  const handleFileChange = (e) => {
    formData.append('profile', e.target.files[0])
    console.log(formData.get('profile'))
  }

  const InitialModState = {
    name: personalProfile!.name,
    surname: personalProfile!.surname,
    email: personalProfile!.email,
    username: personalProfile!.username,
    bio: personalProfile!.bio,
    title: personalProfile!.title,
    area: personalProfile!.area,
    image: personalProfile!.image,
  }

  const [mod, setMod] = useState<InitialState>(InitialModState)

  const putProfile = async () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: 'PUT',
      body: JSON.stringify(mod),
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: APIKEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response)
          setRestart(true)
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const putImage = async () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${personalProfile._id}/picture`,
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: APIKEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          setRestart(true)
          formData.delete('profile')
          console.log(formData)
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
                    src={personalProfile.image}
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
              {location.pathname === '/' && (
                <button
                  className="camera btn position-absolute rounded-circle px-1 py-0 border-3 border-light"
                  onClick={handleShowImg}
                  style={{
                    left: '135px',
                    top: '100px',
                  }}
                >
                  <i className="bi bi-camera fs-6"></i>
                </button>
              )}
              <div className="card-body text-start mt-4 px-4">
                <div className="d-flex">
                  <h3 className="card-title fw-bold mb-1">
                    {personalProfile.name} {personalProfile.surname}
                  </h3>
                  <button className="myButton btn ms-3 px-3 py-0 rounded-5 my-auto ">
                    <i className="bi bi-shield-check"></i>{' '}
                    <span className="fw-semibold">
                      Aggiungi badge di verifica
                    </span>
                  </button>
                </div>
                <p className="card-text text-muted">{personalProfile.title}</p>
                <p className="text-muted small">
                  {personalProfile.area}
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
              {location.pathname === '/' && (
                <>
                  <Modal
                    show={showModal}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton className="px-4 py-3">
                      <Modal.Title
                        id="contained-modal-title-vcenter"
                        className="fs-5"
                      >
                        Modifica presentazione
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pt-2 px-4">
                      <p
                        className="text-secondary "
                        style={{ fontSize: '0.7rem' }}
                      >
                        * indica che è obbligatorio
                      </p>
                      <Form
                        className="form"
                        onSubmit={(e) => {
                          e.preventDefault()
                          setMod({ ...personalProfile, mod })
                          putProfile()
                        }}
                      >
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                          <FormLabel className="mb-0">Nome*</FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="text"
                            placeholder={personalProfile.name}
                            value={mod.name}
                            onChange={(e) =>
                              setMod({ ...mod!, name: e.target.value })
                            }
                          />
                        </FormGroup>

                        <FormGroup
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <FormLabel className="mb-0">Cognome*</FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="text"
                            placeholder={personalProfile.surname}
                            value={mod?.surname}
                            onChange={(e) =>
                              setMod({ ...mod!, surname: e.target.value })
                            }
                          />
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicEmail">
                          <FormLabel className="mb-0">Email*</FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="email"
                            placeholder={personalProfile.email}
                            value={mod?.email}
                            onChange={(e) =>
                              setMod({ ...mod!, email: e.target.value })
                            }
                          />
                          <FormText
                            className="text-secondary"
                            style={{ fontSize: '0.7rem' }}
                          >
                            Il tuo indirizzo email non sarà visibile agli altri
                          </FormText>
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <FormLabel className="mb-0">Username*</FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="text"
                            placeholder={personalProfile.username}
                            value={mod?.username}
                            onChange={(e) =>
                              setMod({ ...mod!, username: e.target.value })
                            }
                          />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <FormLabel className="mb-0">Biografia*</FormLabel>
                          <Form.Control
                            className="form border-dark "
                            as="textarea"
                            placeholder={personalProfile.bio}
                            rows={3}
                            value={mod?.bio}
                            onChange={(e) =>
                              setMod({ ...mod!, bio: e.target.value })
                            }
                          />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <FormLabel className="mb-0">
                            Posizione lavorativa*
                          </FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="text"
                            placeholder={personalProfile.title}
                            value={mod?.title}
                            onChange={(e) =>
                              setMod({ ...mod!, title: e.target.value })
                            }
                          />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <FormLabel className="mb-0">
                            Paese/Area geografica*
                          </FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="text"
                            placeholder={personalProfile.area}
                            value={mod?.area}
                            onChange={(e) =>
                              setMod({ ...mod!, area: e.target.value })
                            }
                          />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <FormLabel className="mb-0">Foto profilo</FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="text"
                            placeholder={personalProfile.image}
                            value={mod?.image}
                            onChange={(e) =>
                              setMod({ ...mod!, image: e.target.value })
                            }
                          />
                        </FormGroup>

                        <div className="d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary fs-6 fw-semibold rounded-5"
                            onClick={handleClose}
                          >
                            Salva
                          </button>
                        </div>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  <Modal
                    show={showModalImg}
                    onHide={handleCloseImg}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton className="px-4 py-3">
                      <Modal.Title
                        id="contained-modal-title-vcenter"
                        className="fs-5"
                      >
                        Modifica immagine
                      </Modal.Title>
                    </Modal.Header>
                    <ModalBody className="pt-2 px-4">
                      <Form
                        className="form"
                        onSubmit={(e) => {
                          e.preventDefault()
                          putImage()
                        }}
                      >
                        <FormGroup className="mb-3">
                          <FormLabel className="mb-0">
                            Carica l'immagine
                          </FormLabel>
                          <FormControl
                            className="form border-dark "
                            type="file"
                            placeholder="Scegi file"
                            onChange={(e) => {
                              handleFileChange(e)
                            }}
                          />
                        </FormGroup>
                        <div className="d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary fs-6 fw-semibold rounded-5"
                            onClick={handleCloseImg}
                          >
                            Salva
                          </button>
                        </div>
                      </Form>
                    </ModalBody>
                  </Modal>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
