import { Card, Col, Container, Row } from 'react-bootstrap'
import Job from '../types/Job'
import stockImage from '../assets/Screenshot 2024-12-18 114210.png'
import { Link } from 'react-router'

interface SingleJobProps {
  j: Job
}

const SingleJob = ({ j }: SingleJobProps) => {
  return (
    <Container fluid className="py-3">
      <Row className="p-0">
        <Col xs={1}>
          <img src={stockImage} className="w-100" alt="experience picture" />
        </Col>

        <Col xs={10} className=" flex-grow-1">
          <Card.Title className="m-0">{j.title}</Card.Title>
          <Link
            to={'/company/' + j.company_name}
            className="m-0 card-title text-decoration-none"
          >
            {j.company_name}
          </Link>
          <Card.Text className="m-0 opacity-75">
            <i className="fas fa-map-marker-alt me-1"></i>
            {j.candidate_required_location}
          </Card.Text>
          <Card.Text className="m-0">{j.job_type.split('_')}</Card.Text>
          <Card.Text className="m-0 opacity-50">
            Annuncio pubblicato in data: {j.publication_date.slice(0, 10)}
          </Card.Text>
        </Col>
      </Row>
    </Container>
  )
}
export default SingleJob
