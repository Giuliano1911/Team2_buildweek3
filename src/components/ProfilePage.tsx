import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import SideBar from './SideBar'

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
        <Col xs={12} lg={10} className=" mt-5">
          <SideBar APIKEY={APIKEY} />
        </Col>
      </Row>
    </Container>
  )
}
export default ProfilePage
