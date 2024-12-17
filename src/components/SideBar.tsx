import { Col, Container, Row } from 'react-bootstrap'
import SidebarPersonalProfiles from './SidebarPersonalProfiles'
import Profile from '../types/Profile'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import Error1 from './Error1'

interface SideBarProps {
  APIKEY: string
}

const SideBar = ({ APIKEY }: SideBarProps) => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const getProfiles = async () => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/', {
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
      .then((data: Profile[]) => {
        console.log(data)
        setProfiles(data.reverse())
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getProfiles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container className=" d-none d-md-block mt-5">
        <Row className="d-flex align-items flex-column align-items-end">
          <Col
            sm={12}
            md={4}
            lg={4}
            className=" bg-white p-3 mt-3 m-2 rounded-3 custom-sidebar-border m-0"
          >
            <h4>Lingua del profilo</h4>
            <p>Italiano</p>
            <hr />
            <h4>Profilo pubblico e URL</h4>
            <p>
              <a href="www.linkedin.com">www.linkedin.com</a>
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} className="d-flex align-items-center p-0">
            <img
              className="w-100 rounded-3 custom-sidebar-border"
              src="src/assets/image/image 1.png"
              alt="image-1"
            />
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className=" bg-white p-3 m-2 rounded-3 custom-sidebar-border"
          >
            <h4>Persone che potresti conoscere</h4>
            <p>Dalla tua scuola o università</p>
            {isError && <Error1 />}
            {isLoading && <Loading />}
            {!isLoading &&
              !isError &&
              profiles?.slice(0, 5).map((p) => {
                return <SidebarPersonalProfiles p={p} key={p._id} />
              })}
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img
              className="w-100 rounded-3 custom-sidebar-border"
              src="src/assets/image/image 1.png"
              alt="image-1"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SideBar
