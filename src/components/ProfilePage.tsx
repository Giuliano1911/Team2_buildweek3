import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import SideBar from './SideBar'
import Experiences from './Experiences'
import HeroSection from './Hero'

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
      <Row className=" justify-content-center">
        <Col xs={12} lg={10} className=" mt-5">
          <Row className="mt-5">
            <Col xs={12} lg={8}>
              <HeroSection
                profile={profile}
                isLoading={isLoading}
                isError={isError}
              />
              {!isError && !isLoading && (
                <Experiences profile={profile} APIKEY={APIKEY} />
              )}
            </Col>
            <Col xs={12} lg={4}>
              <SideBar APIKEY={APIKEY} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default ProfilePage
