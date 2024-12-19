import { Col } from 'react-bootstrap'
import SidebarPersonalProfiles from './SidebarPersonalProfiles'
import Profile from '../types/Profile'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import Error1 from './Error1'
import img1 from '../assets/image/image 1.png'

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
      <Col
        sm={12}
        className=" bg-white p-3 mx-2 mb-2 rounded-3 custom-sidebar-border m-0"
      >
        <h4>Lingua del profilo</h4>
        <p>Italiano</p>
        <hr />
        <h4>Profilo pubblico e URL</h4>
        <p>
          <a className=" text-decoration-none" href="www.linkedin.com">
            www.linkedin.com
          </a>
        </p>
      </Col>
      <Col sm={12}>
        <img
          className="w-100 rounded-3 custom-sidebar-border margin-sidebar-custom"
          src={img1}
          alt="image-1"
        />
      </Col>
      <Col
        sm={12}
        className=" bg-white m-2 rounded-3 custom-sidebar-border d-flex flex-column p-0"
      >
        <div className="p-3 pb-0">
          <h4>Persone che potresti conoscere</h4>
          <p>Dalla tua scuola o università</p>
          {isError && <Error1 />}
          {isLoading && <Loading />}
          {!isLoading &&
            !isError &&
            profiles?.slice(0, 5).map((p) => {
              return <SidebarPersonalProfiles p={p} key={p._id} />
            })}
        </div>
        <button className="buttonSidebar-mostraAltro">Mostra altro</button>
      </Col>
      <Col sm={12}>
        <img
          className="w-100 rounded-3 custom-sidebar-border margin-sidebar-custom"
          src={img1}
          alt="image-1"
        />
      </Col>
    </>
  )
}

export default SideBar
