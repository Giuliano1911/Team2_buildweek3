import { Card, Col, Container, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import Error1 from './Error1'
import Loading from './Loading'
interface HomePageCentralSectionProps {
  profile: Profile
  APIKEY: string
  isLoading: boolean
  isError: boolean
}

const HomePageCentralSection = ({
  profile,
  APIKEY,
  isError,
  isLoading,
}: HomePageCentralSectionProps) => {
  const getPost = async () => {
    fetch('https://striveschool-api.herokuapp.com/api/posts/')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('ERRORE NELLA FETCH')
        }
      })
      .then((Posts) => {
        console.log(Posts)
      })
      .catch((error) => {
        console.log(error, 'ERRORE')
      })
  }

  return (
    <>
      <Container>
        {isError && <Error1 />}
        {isLoading && <Loading />}
        {!isLoading && !isError && (
          <>
            <Row>
              <Card className=" p-3">
                <div className=" d-flex justify-content-between">
                  <Card.Title>Ti diamo il benvenuto a Linkedin</Card.Title>
                  <span>✖</span>
                </div>

                <div className="border-first-card">
                  <Card.Img
                    variant="top"
                    src="src/assets/image/homepage-pic.png"
                  />
                  <div className="p-3">
                    <Card.Text>
                      Aggiungi la tua esperienza lavorativa e le tue competenze
                      per farti scoprire dai recruiter.
                    </Card.Text>
                    <button className="homepage-aggiorna-profilo">
                      <div> Aggiorna profilo </div>
                    </button>
                  </div>
                </div>
              </Card>
            </Row>

            <Row>
              <Card className=" my-2">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Col xs={2} md={2}>
                      <img
                        className="profilePic-centralSection-homePage rounded-5"
                        src={profile.image}
                        alt="profile-image"
                      />
                    </Col>
                    <Col xs={10} md={10}>
                      <button className="ms-3 homepage-CreaUnPost-button">
                        Crea un post
                      </button>
                    </Col>
                  </div>

                  <Card.Text className="d-flex justify-content-around mt-3">
                    <button className="button-CreaUnPost-centralSection fw-semibold">
                      🎬 Video
                    </button>
                    <button className="button-CreaUnPost-centralSection fw-semibold">
                      🖼️ Foto
                    </button>
                    <button className="button-CreaUnPost-centralSection fw-semibold">
                      🖊️ Scrivi un articolo
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row></Row>
          </>
        )}
      </Container>
    </>
  )
}

export default HomePageCentralSection

{
  /* <Card className=" my-2">
            <Card.Body>
              <div className="d-flex align-items-center">
                <Col xs={2} md={2} lg={2}>
                  <span>
                    <img
                      className="custom-sidebar-profilePicSize rounded-5"
                      src={profile.image}
                      alt="profile-image"
                    />
                  </span>
                </Col>
                <Col xs={10} md={10} lg={10}>
                  <button className="ms-3 homepage-CreaUnPost-button">
                    Crea un post
                  </button>
                </Col>
              </div>
              <Col xs={12}>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's coffff
                </Card.Text>
              </Col>
            </Card.Body>
          </Card> */
}
