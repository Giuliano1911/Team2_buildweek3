import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Experience from '../types/Experience'
import { useLocation } from 'react-router'

interface SingleExperienceProps {
  e: Experience
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
  setMod: React.Dispatch<React.SetStateAction<Experience | null>>
}

const SingleExperience = ({
  e,
  setIsModified,
  setMod,
}: SingleExperienceProps) => {
  const location = useLocation()
  return (
    <Card>
      <Container fluid className="py-3">
        <Row className="p-0">
          <Col xs={2}>
            <img src={e.image} className="w-100" alt="experience picture" />
          </Col>
          <Col xs={9}>
            <Card.Title>{e.role}</Card.Title>
            <Card.Text>{e.company}</Card.Text>
            <Card.Text>Data inizio: {e.startDate}</Card.Text>
            {e.endDate ? (
              <Card.Text>Data fine: {e.endDate}</Card.Text>
            ) : (
              <Card.Text>In corso</Card.Text>
            )}
            <Card.Text>{e.description}</Card.Text>
            <Card.Text>{e.area}</Card.Text>
          </Col>
          <Col xs={1}>
            {location.pathname === '/' && (
              <Button
                className=" border-0 bg-white p-0"
                onClick={() => {
                  setIsModified(true)
                  setMod(e)
                }}
              >
                <i className="fas fa-pencil-alt text-black"></i>
              </Button>
            )}
          </Col>
        </Row>
        <hr />
      </Container>
    </Card>
  )
}
export default SingleExperience
