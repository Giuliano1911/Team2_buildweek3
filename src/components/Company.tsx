import { useParams } from 'react-router'
import JobsResponse from '../types/JobsResponse'
import { useEffect, useState } from 'react'
import Job from '../types/Job'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import stockImage from '../assets/Screenshot 2024-12-18 114210.png'
import Error1 from './Error1'
import Loading from './Loading'
import SingleJob from './SingleJob'
import CompanySideBar from './CompanySideBar'

interface CompanyProps {
  APIKEY: string
}

const Company = ({ APIKEY }: CompanyProps) => {
  const [company, setCompany] = useState<Job[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const params = useParams()

  const getCompany = async () => {
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?company=${params.name}`,
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
        setCompany(data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={10} md={8}>
          <Card className="mt-3">
            {isError && <Error1 />}
            {isLoading && <Loading />}
            {!isLoading && !isError && company![0]._id && (
              <Container fluid>
                <Row>
                  <Col xs={3}>
                    <Card.Img src={stockImage} className="p-4" />
                  </Col>
                  <Col xs={9}>
                    <Card.Title className="mt-4">{params.name}</Card.Title>
                    <div className="d-flex gap-1">
                      <Card.Text>{company![0].category} Company, </Card.Text>
                      <Card.Text className=" opacity-75">
                        {company![0].candidate_required_location
                          .replace('Only', '')
                          .replace('only', '')}
                      </Card.Text>
                    </div>
                    <Button className="rounded-pill me-2 px-4">
                      <i className="fas fa-plus"></i> Segui
                    </Button>
                    <Button
                      className="rounded-pill px-4"
                      variant="outline-primary"
                    >
                      <i className="fas fa-paper-plane"></i>Invia messaggio
                    </Button>
                  </Col>
                </Row>
              </Container>
            )}
          </Card>
          <Card className="mt-3">
            <Container>
              <Row>
                <Col>
                  {isError && <Error1 />}
                  {isLoading && <Loading />}
                  {!isLoading &&
                    !isError &&
                    company?.map((j) => {
                      return <SingleJob j={j} key={j._id} />
                    })}
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col xs={10} md={4}>
          <CompanySideBar />
        </Col>
      </Row>
    </Container>
  )
}
export default Company
