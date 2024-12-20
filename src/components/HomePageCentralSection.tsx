import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Profile from '../types/Profile'
import Error1 from './Error1'
import Loading from './Loading'
import { useEffect, useState } from 'react'
import Post from '../types/Post'
import SinglePost from './SinglePost'
interface HomePageCentralSectionProps {
  profile: Profile
  APIKEY: string
  isLoading: boolean
  isError: boolean
}

interface InitialAddState {
  text: string
}

const HomePageCentralSection = ({
  profile,
  APIKEY,
  isError,
  isLoading,
}: HomePageCentralSectionProps) => {
  const [post, setPost] = useState<Post[] | null>(null)
  const [isLoadingP, setIsLoadingP] = useState<boolean>(true)
  const [isErrorP, setIsErrorP] = useState<boolean>(false)
  const [restart, setRestart] = useState<boolean>(false)

  const InitialState = {
    text: '',
  }

  const [add, setAdd] = useState<InitialAddState>(InitialState)
  const getPost = async () => {
    fetch('https://striveschool-api.herokuapp.com/api/posts/', {
      headers: { Authorization: APIKEY },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('ERRORE NELLA FETCH')
        }
      })
      .then((Posts: Post[]) => {
        console.log(Posts, 'Posts')
        setPost(Posts.reverse())
        setIsLoadingP(false)
        setRestart(false)
      })
      .catch((error) => {
        console.log(error, 'ERRORE')
        setIsErrorP(true)
      })
  }

  useEffect(() => {
    getPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restart])

  const postPost = async () => {
    console.log(add)
    fetch(`https://striveschool-api.herokuapp.com/api/posts`, {
      method: 'POST',
      body: JSON.stringify(add),
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: APIKEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          setRestart(true)
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Container fluid>
        {isError && <Error1 />}
        {isLoading && <Loading />}
        {!isLoading && !isError && (
          <>
            <Row>
              <Card className=" p-3">
                <div className=" d-flex justify-content-between">
                  <Card.Title>Ti diamo il benvenuto a Linkedin</Card.Title>
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
                    <Button className="rounded-pill">Aggiorna profilo</Button>
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
                      <Form
                        className="d-flex"
                        onSubmit={(e) => {
                          e.preventDefault()
                          postPost()
                        }}
                      >
                        <Form.Control
                          className="rounded-pill"
                          placeholder="Scrivi un post..."
                          value={add?.text}
                          onChange={(e) =>
                            setAdd({ ...add!, text: e.target.value })
                          }
                        ></Form.Control>
                        <Button
                          type="submit"
                          className="ms-3 text-nowrap rounded-pill"
                        >
                          Crea post
                        </Button>
                      </Form>
                    </Col>
                  </div>

                  <Card.Text className="d-flex justify-content-around mt-3">
                    <Button
                      className="fw-semibold centralSection-homePage-button"
                      variant="outline-primary"
                    >
                      🎬 Video
                    </Button>
                    <Button
                      className="fw-semibold centralSection-homePage-button"
                      variant="outline-primary"
                    >
                      🖼️ Foto
                    </Button>
                    <Button
                      className="fw-semibold centralSection-homePage-button"
                      variant="outline-primary"
                    >
                      🖊️ Scrivi un articolo
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              {isErrorP && <Error1 />}
              {isLoadingP && <Loading />}
              {!isLoadingP &&
                !isErrorP &&
                post!.slice(0, 50).map((p) => {
                  return (
                    <SinglePost
                      p={p}
                      key={p._id}
                      profile={profile}
                      APIKEY={APIKEY}
                      setRestart={setRestart}
                    />
                  )
                })}
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default HomePageCentralSection
