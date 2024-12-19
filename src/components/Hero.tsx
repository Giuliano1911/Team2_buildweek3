import Profile from '../types/Profile'
import CoverImg from '../assets/Generic cover.webp'
import Error1 from './Error1'
import Loading from './Loading'
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from 'react-bootstrap'

interface HeroProps {
  profile: Profile
  isLoading: boolean
  isError: boolean
  setMod: React.Dispatch<React.SetStateAction<Profile | null>>
  mod: Profile | null
  APIKEY: string
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
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

const HeroSection = ({ profile, isLoading, isError, APIKEY }: HeroProps) => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  const [restart, setRestart] = useState<boolean>(false)
  const [mod, setMod] = useState<Profile | null>(null)
  // const InitialModState = {
  //   name: mod!.name,
  //   surname: mod!.surname,
  //   email: mod!.email,
  //   username: mod!.username,
  //   bio: mod!.bio,
  //   title: mod!.title,
  //   area: mod!.area,
  //   image: mod!.image,
  // }

  // const [formv, setFormv] = useState<InitialState>(InitialModState)

  const putProfile = async () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      method: 'PUT',
      body: JSON.stringify(formv),
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

  // useEffect(() => {
  //   getProfile()
  // }, [restart])

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
                <Modal.Header closeButton className="px-4 py-3">
                  <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="fs-5"
                  >
                    Modifica presentazione
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-2 px-4">
                  <p className="text-secondary " style={{ fontSize: '0.7rem' }}>
                    * indica che è obbligatorio
                  </p>
                  <Form
                    className="form"
                    // onSubmit={(e) => {
                    //   e.preventDefault()
                    //   setMod({ ...mod, formv })
                    //   putProfile()
                    // }}
                  >
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                      <FormLabel className="mb-0">Nome*</FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="text"
                        placeholder={profile.name}
                        // value={formv?.name}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, name: e.target.value })
                        // }
                      />
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel className="mb-0">Cognome*</FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="text"
                        placeholder={profile.surname}
                        // value={formv?.surname}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, surname: e.target.value })
                        // }
                      />
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicEmail">
                      <FormLabel className="mb-0">Email*</FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="email"
                        placeholder={profile.email}
                        // value={formv?.email}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, email: e.target.value })
                        // }
                      />
                      <FormText
                        className="text-secondary"
                        style={{ fontSize: '0.7rem' }}
                      >
                        Il tuo indirizzo email non sarà visibile agli altri
                      </FormText>
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel className="mb-0">Username*</FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="text"
                        placeholder={profile.username}
                        // value={formv?.username}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, username: e.target.value })
                        // }
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel className="mb-0">Biografia*</FormLabel>
                      <Form.Control
                        className="form border-dark "
                        as="textarea"
                        placeholder={profile.bio}
                        rows={3}
                        // value={formv?.bio}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, bio: e.target.value })
                        // }
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel className="mb-0">
                        Posizione lavorativa*
                      </FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="text"
                        placeholder={profile.title}
                        // value={formv?.title}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, title: e.target.value })
                        // }
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel className="mb-0">
                        Paese/Area geografica*
                      </FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="text"
                        placeholder={profile.area}
                        // value={formv?.area}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, area: e.target.value })
                        // }
                      />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                      <FormLabel className="mb-0">Foto profilo</FormLabel>
                      <FormControl
                        className="form border-dark "
                        type="text"
                        placeholder={profile.image}
                        // value={formv?.image}
                        // onChange={(e) =>
                        //   setFormv({ ...formv!, image: e.target.value })
                        // }
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
