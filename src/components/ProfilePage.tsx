import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'

interface ProfilePagePops {
  profile: Profile
  isLoading: boolean
  isError: boolean
  APIKEY: string
}

const ProfilePage = ({
  profile,
  isLoading,
  isError,
  APIKEY,
}: ProfilePagePops) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={10}></Col>
      </Row>
    </Container>
  )
}
export default ProfilePage
