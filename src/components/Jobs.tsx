import { useEffect, useState } from 'react'
import Job from '../types/Job'
import JobsResponse from '../types/JobsResponse'
import JobsCentralColumn from './JobsCentralColumn'
import { Col, Container, Row } from 'react-bootstrap'
import LeftColumn from './LeftColumn'
import Profile from '../types/Profile'
import FooterPiccolo from './FooterPiccolo'

interface JobsProps {
  APIKEY: string
  setJobs: React.Dispatch<React.SetStateAction<Job[] | null>>
  search: string
  jobs: Job[] | null
  profile: Profile
  isLoadingP: boolean
  isErrorP: boolean
}

const Jobs = ({
  APIKEY,
  setJobs,
  search,
  jobs,
  profile,
  isErrorP,
  isLoadingP,
}: JobsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const getJobs = async () => {
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${search}&limit=10`,
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
      .then((data: JobsResponse) => {
        console.log(data)
        setJobs(data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <Container fluid>
      <Row className="justify-content-center mt-2 mt-lg-5 ">
        <Col xs={12} lg={10} className="mt-5">
          <Row className="d-flex flex-column flex-lg-row">
            <Col xs={12} lg={2} className="flex-grow-1">
              <LeftColumn
                profile={profile!}
                isLoading={isLoadingP}
                isError={isErrorP}
              />
            </Col>
            <Col xs={12} lg={6} className="flex-grow-1">
              <JobsCentralColumn
                jobs={jobs}
                isLoading={isLoading}
                isError={isError}
                profile={profile!}
                isLoadingP={isLoadingP}
                isErrorP={isErrorP}
              />
            </Col>
            <Col xs={12} lg={3} className="flex-grow-1">
              <FooterPiccolo />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Jobs
