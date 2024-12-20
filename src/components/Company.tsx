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
import FooterSection from './footer'
import CoverImg from '../assets/Generic cover.webp'

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
    <Container fluid>
      <Row className=" justify-content-center">
        <Col xs={12} md={10} className="p-0">
          <Container className="mt-5" fluid>
            <Row className=" justify-content-center">
              <Col xs={10} md={8}>
                <Card className="mt-3">
                  {isError && <Error1 />}
                  {isLoading && <Loading />}
                  {!isLoading && !isError && company![0]._id && (
                    <Container fluid className="">
                      <Row>
                        <img
                          src={CoverImg}
                          className="card-img-top p-0"
                          alt="Copertina"
                          style={{ objectFit: 'cover', height: '200px' }}
                        />
                      </Row>
                      <Row>
                        <div>
                          <div className="mb-3">
                            <div
                              className="position-absolute translate-middle"
                              style={{
                                width: '155px',
                                height: '155px',
                                left: '100px',
                                top: '200px',
                              }}
                            >
                              <img
                                src={stockImage}
                                className="rounded-circle border border-4 border-white "
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                                alt="Profilo"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            paddingTop: '70px',
                            paddingLeft: '30px',
                            paddingBottom: '30px',
                          }}
                        >
                          <Card.Title className="mt-4">
                            {params.name}
                          </Card.Title>
                          <div className="d-flex gap-1">
                            <Card.Text>
                              {company![0].category} Company,{' '}
                            </Card.Text>
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
                            className="rounded-pill px-3 me-2"
                            variant="outline-primary"
                          >
                            <i className="fas fa-paper-plane me-2"></i>Invia
                            messaggio
                          </Button>
                          <Button
                            className="rounded-pill px-2"
                            variant="outline-primary"
                          >
                            <i className="bi bi-three-dots"></i>
                          </Button>
                        </div>
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
                <Container className="container-fluid bg-white border rounded-2 mt-2 pt-4">
                  <h4>Panoramica</h4>
                  <div className="mb-4">{company![0].description}</div>
                  <Row>
                    <Col className=" bg-white border-top rounded-bottom rounded-2 border-secondary-subtl d-flex flex-column p-0">
                      <button className="buttonSidebar-mostraAltro d-flex justify-content-center align-items-center">
                        Mostra tutti i dettagli
                        <i className="bi bi-arrow-right-short fs-4"></i>
                      </button>
                    </Col>
                  </Row>
                </Container>
                <div className="mt-5">
                  <FooterSection />
                </div>
              </Col>
              <Col xs={10} md={4}>
                <CompanySideBar />
              </Col>
            </Row>
          </Container>
          <div className=" d-none d-md-block">
            <FooterSection />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Company
