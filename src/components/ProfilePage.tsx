import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import SideBar from './SideBar'
import Experiences from './Experiences'
import HeroSection from './Hero'
import FooterSection from './footer'
import ConsigliatiSection from './ConsigliatoSection'
import AnalisiSection from './AnalisiSection'

interface ProfilePageProps {
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
}: ProfilePageProps) => {
  return (
    <Container fluid>
      <Row className=" justify-content-center">
        <Col xs={12} lg={10} className=" mt-5">
          <Row className="mt-5">
            <Col xs={12} lg={8} className="flex-grow-1">
              <HeroSection
                profile={profile}
                isLoading={isLoading}
                isError={isError}
              />
              {!isError && !isLoading && (
                <Experiences profile={profile} APIKEY={APIKEY} />
              )}
              <ConsigliatiSection />
              <AnalisiSection />
            </Col>
            <Col xs={12} lg={3} className="flex-grow-1">
              <SideBar APIKEY={APIKEY} />
            </Col>
          </Row>
          <FooterSection />
        </Col>
      </Row>
    </Container>
  )
}
export default ProfilePage
