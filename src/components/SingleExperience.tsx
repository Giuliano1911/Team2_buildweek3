import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Experience from '../types/Experience'
import { useLocation } from 'react-router'
import stockImage from '../assets/Screenshot 2024-12-18 114210.png'

interface SingleExperienceProps {
  e: Experience
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
  setMod: React.Dispatch<React.SetStateAction<Experience | null>>
  APIKEY: string
}

const SingleExperience = ({
  e,
  setIsModified,
  setMod,
  APIKEY,
}: SingleExperienceProps) => {
  const location = useLocation()

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
        } else {
          throw new Error('No ok')
        }
      })
      .catch((err) => {
        console.log('errore', err)
      })
  }

  return (
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
  )
}
export default SingleExperience
