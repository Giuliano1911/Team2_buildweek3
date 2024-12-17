import { useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { useLocation } from 'react-router'

import Experience from '../types/Experience'
import Profile from '../types/Profile'
import Error1 from './Error1'
import Loading from './Loading'
import SingleExperience from './SingleExperience'
import ExperienceMod from './ExperienceMod'
import ExperienceAdd from './ExperienceAdd'

interface ExperiencesProps {
  profile: Profile
  APIKEY: string
}

const InitialAddState = {
  role: '',
  company: '',
  startDate: '',
  endDate: '',
  description: '',
  area: '',
}

const Experiences = ({ profile, APIKEY }: ExperiencesProps) => {
  const [experiences, setExperiences] = useState<Experience[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const [isModified, setIsModified] = useState<boolean>(false)
  const [mod, setMod] = useState<Experience | null>(null)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [add, setAdd] = useState<Experience>(InitialAddState)

  // 6694d5f8196d7b0015d6b525
  // ${profile._id}

  const getExperiences = async () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/6694d5f8196d7b0015d6b525/experiences`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: Experience[]) => {
        console.log(data)
        setExperiences(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getExperiences()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mod])

  const location = useLocation()
  return (
    <>
      <Col className=" bg-white border rounded-2 p-3">
        <div className=" d-flex justify-content-between">
          <h4>Esperienze</h4>
          {location.pathname === '/' && (
            <Button
              className=" border-0 bg-white p-0"
              onClick={() => {
                setIsAdd(true)
              }}
            >
              <i className="fas fa-plus text-black"></i>
            </Button>
          )}
        </div>
      </Col>
      <Col>
        {isError && <Error1 />}
        {isLoading && <Loading />}
        {!isLoading &&
          !isError &&
          experiences?.map((e) => {
            return (
              <SingleExperience
                e={e}
                key={e._id}
                setIsModified={setIsModified}
                setMod={setMod}
              />
            )
          })}
      </Col>
      {isModified && !isLoading && (
        <ExperienceMod
          setMod={setMod}
          mod={mod}
          profileid={profile._id}
          APIKEY={APIKEY}
        />
      )}
      {isAdd && !isLoading && (
        <ExperienceAdd
          setAdd={setAdd}
          add={add}
          profileid={profile._id}
          APIKEY={APIKEY}
        />
      )}
    </>
  )
}
export default Experiences
