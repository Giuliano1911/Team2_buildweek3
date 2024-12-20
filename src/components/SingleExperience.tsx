import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'react-bootstrap'
import Experience from '../types/Experience'
import { useLocation } from 'react-router'
import stockImage from '../assets/Screenshot 2024-12-18 114210.png'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { useState } from 'react'
import Profile from '../types/Profile'

interface SingleExperienceProps {
  profile: Profile
  e: Experience
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
  setMod: React.Dispatch<React.SetStateAction<Experience | null>>
  APIKEY: string
  setRestart: React.Dispatch<React.SetStateAction<boolean>>
}
const formData = new FormData()

const SingleExperience = ({
  profile,
  e,
  setIsModified,
  setMod,
  APIKEY,
  setRestart,
}: SingleExperienceProps) => {
  const location = useLocation()
  const [showModalImg, setShowModalImg] = useState(false)
  const handleCloseImg = () => setShowModalImg(false)
  const handleShowImg = () => setShowModalImg(true)
  const handleFileChange = (event) => {
    formData.append('experience', event.target.files[0])
    console.log(formData.get('experience'))
  }

  const deleteExperience = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${e.user}/experiences/${e._id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: APIKEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log('Eliminato')
          setRestart(true)
        } else {
          throw new Error('No ok')
        }
      })
      .catch((err) => {
        console.log('errore', err)
      })
  }

  const putImage = async () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${e._id}/picture`,
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
          formData.delete('experience')
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
    <>
      <Card>
        <Container fluid className="py-3">
          <Row className="p-0">
            <Col xs={1}>
              <img
                src={e.image ? e.image : stockImage}
                className="w-100"
                alt="experience picture"
              />
            </Col>

            <Col xs={10} className=" flex-grow-1">
              <Card.Title>{e.role}</Card.Title>
              <Card.Text className="m-0">{e.company}</Card.Text>
              <div className="d-flex gap-1 small opacity-50">
                <Card.Text className="m-0">
                  {e.startDate.slice(0, 10)} -
                </Card.Text>
                {e.endDate ? (
                  <Card.Text>{e.endDate.slice(0, 10)}</Card.Text>
                ) : (
                  <Card.Text>In corso</Card.Text>
                )}
              </div>
              <Card.Text className="m-0 opacity-50">{e.area}</Card.Text>
              <Card.Text>· {e.description}</Card.Text>
            </Col>
            <Col xs={1} className="d-flex flex-column gap-2">
              {location.pathname === '/' && (
                <Button
                  className=" border-0 bg-white p-0 align-self-end"
                  onClick={() => {
                    setIsModified(true)
                    setMod(e)
                  }}
                >
                  <i className="fas fa-pencil-alt text-black"></i>
                </Button>
              )}
              {location.pathname === '/' && (
                <Button
                  className=" border-0 bg-white p-0 align-self-end"
                  onClick={() => {
                    handleShowImg()
                  }}
                >
                  <i className="bi bi-camera-fill text-black"></i>
                </Button>
              )}
              {location.pathname === '/' && (
                <Button
                  className=" border-0 bg-white p-0 align-self-end"
                  onClick={() => {
                    deleteExperience()
                  }}
                >
                  <i className="fas fa-trash-alt text-black"></i>
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Card>
      <Modal
        show={showModalImg}
        onHide={handleCloseImg}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton className="px-4 py-3">
          <Modal.Title id="contained-modal-title-vcenter" className="fs-5">
            Modifica immagine
          </Modal.Title>
        </ModalHeader>
        <ModalBody className="pt-2 px-4">
          <Form
            className="form"
            onSubmit={(event) => {
              event.preventDefault()
              putImage()
            }}
          >
            <FormGroup className="mb-3">
              <FormLabel className="mb-0">Carica l'immagine</FormLabel>
              <FormControl
                className="form border-dark "
                type="file"
                placeholder="Scegi file"
                onChange={(event) => {
                  handleFileChange(event)
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
  )
}
export default SingleExperience
