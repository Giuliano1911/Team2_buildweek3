import { Card, Col } from 'react-bootstrap'
import SidebarPersonalProfiles from './SidebarPersonalProfiles'
import Profile from '../types/Profile'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import Error1 from './Error1'
import SideBarImg from '../assets/image/image 1.png'

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
      <Card className="sidebar p-3 mb-2">
        <p className="fs-5 fw-semibold mb-1">Lingua del profilo</p>
        <p className="text-secondary mb-0">Italiano</p>
        <hr className="text-secondary" />
        <p className="fs-5 fw-semibold mb-1">Profilo pubblico e URL</p>

        <a
          className=" text-decoration-none text-secondary mb-0"
          href="www.linkedin.com"
        >
          www.linkedin.com
        </a>
      </Card>
      <Card className="sidebar mb-2">
        <img
          src={SideBarImg}
          alt="image-1"
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </Card>
      <Card className="sidebar p-3 mb-2">
        <div className="pb-0">
          <p className="fs-6 fw-semibold mb-0">
            Persone che potresti conoscere
          </p>
          <p className="text-secondary">Dalla tua scuola o università</p>
          {isError && <Error1 />}
          {isLoading && <Loading />}
          {!isLoading &&
            !isError &&
            profiles?.slice(0, 5).map((p) => {
              return <SidebarPersonalProfiles p={p} key={p._id} />
            })}
        </div>
        <button className="buttonSidebar-mostraAltro">Mostra altro</button>
      </Card>
      <Col sm={12}>
        <img
          className="w-100 rounded-3 custom-sidebar-border margin-sidebar-custom"
          src="src/assets/image/image 1.png"
          alt="image-1"
        />
      </Col>
    </>
  )
}

export default SideBar
