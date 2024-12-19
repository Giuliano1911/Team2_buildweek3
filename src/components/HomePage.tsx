import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import HomePageCentralSection from './HomePageCentralSection'
import LeftColumn from './LeftColumn'
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
      <Row className="justify-content-center mt-2 mt-lg-5 ">
        <Col xs={12} lg={10} className="mt-5">
          <Row className="d-flex flex-column flex-lg-row">
            <Col xs={12} lg={2} className="flex-grow-1">
              <LeftColumn
                profile={profile!}
                isLoading={isLoading}
                isError={isError}
              />
            </Col>
            <Col xs={12} lg={6} className="flex-grow-1">
              <HomePageCentralSection
                profile={profile}
                APIKEY={APIKEY}
                isLoading={isLoading}
                isError={isError}
              />
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
