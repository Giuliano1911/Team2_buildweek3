import { Card, Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import SideBarNotizieHomePage from './SideBarNotizieHomePage'

interface HomePageProps {
  profile: Profile
  isLoading: boolean
  isError: boolean
  APIKEY: string
}

const HomePage = ({ profile, isLoading, isError, APIKEY }: HomePageProps) => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5 ">
        <Col xs={12} lg={10} className="mt-5">
          <Row className="d-flex flex-column flex-lg-row">
            <Col xs={12} lg={2} className="flex-grow-1">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="flex-grow-1">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3} className="flex-grow-1">
              <SideBarNotizieHomePage />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default HomePage
