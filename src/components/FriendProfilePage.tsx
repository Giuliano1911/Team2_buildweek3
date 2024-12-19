import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import SideBar from './SideBar'
import Experiences from './Experiences'
import HeroSection from './Hero'
import FooterSection from './footer'
import ConsigliatiSection from './ConsigliatoSection'
import AnalisiSection from './AnalisiSection'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

interface ProfilePageProps {
  APIKEY: string
}

const FriendProfilePage = ({ APIKEY }: ProfilePageProps) => {
  const [friendProfile, setFriendProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const params = useParams()

  const getFriendProfile = async () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${params.id}`, {
      headers: {
        Authorization: APIKEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: Profile) => {
        console.log(data)
        setFriendProfile(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getFriendProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  return (
    <Container fluid>
      <Row className=" justify-content-center">
        <Col xs={12} lg={10} className=" mt-5">
          <Row className="mt-5">
            <Col xs={12} lg={8} className="flex-grow-1">
              <HeroSection
                profile={friendProfile!}
                isLoading={isLoading}
                isError={isError}
              />
              {!isError && !isLoading && (
                <Experiences profile={friendProfile!} APIKEY={APIKEY} />
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
export default FriendProfilePage
