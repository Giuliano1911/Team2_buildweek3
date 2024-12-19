import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Post from '../types/Post'
import Profile from '../types/Profile'
import { useState } from 'react'
import SingleComment from './SingleComment'

interface SinglePostProps {
  p: Post
  profile: Profile
  APIKEY: string
  setRestart: React.Dispatch<React.SetStateAction<boolean>>
}

interface InitialModState {
  text: string
  image?: string
}

const SinglePost = ({ p, profile, APIKEY, setRestart }: SinglePostProps) => {
  const [isComment, setIsComment] = useState<boolean>(false)
  const [isMod, setIsMod] = useState<boolean>(false)

  let modState

  if (p.image) {
    modState = { text: p.text, image: p.image }
  } else {
    modState = { text: p.text }
  }

  const [mod, setMod] = useState<InitialModState>(modState)

  const putPost = async () => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${p?._id}`, {
      method: 'PUT',
      body: JSON.stringify(mod),
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: APIKEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response)
          setRestart(true)
          setIsMod(false)
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deletePost = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${p?._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: APIKEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Eliminato')
          setRestart(true)
        } else {
          throw new Error('No ok')
        }
      })
      .catch((err) => {
        console.log('errore', err)
      })
  }

  return (
    <>
      <Col xs={12} md={12} className="mb-2 p-0">
        <Card>
          <Card.Body>
            <Row>
              <Col md={2}>
                <img
                  className="profilePic-centralSection-hpostHomePage rounded-5 me-3"
                  src={p.user.image}
                  alt="user-image"
                />
              </Col>
              <Col md={10}>
                <div className="d-flex justify-content-between">
                  <h5 className=" mb-0">
                    {p.user.name} {p.user.surname}
                  </h5>
                  {p.user._id === profile._id ? (
                    <div>
                      <a
                        role="button"
                        onClick={() => {
                          setIsMod(true)
                        }}
                      >
                        <i className="fas fa-pencil-alt text-black"></i>
                      </a>
                      <a
                        role="button"
                        onClick={() => {
                          deletePost()
                        }}
                      >
                        <i className="fas fa-times ms-1 text-black ms-2"></i>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="centralSection-hpostHomePage-fontPost">
                  {p.createdAt.slice(0, 10)}{' '}
                  {p.createdAt.split('T')[1].slice(0, 5)}
                </div>
              </Col>
              <Col className="mt-4">{p.text}</Col>
            </Row>
          </Card.Body>
          {p.image && <Card.Img src={p.image} alt="post image" />}
          <Card.Body className="pt-1 pb">
            <div className="d-flex justify-content-center justify-content-around">
              <Button className="centralSection-homePage-button text-black">
                <i className="bi bi-hand-thumbs-up"></i> Consiglia
              </Button>
              <Button
                className="centralSection-homePage-button text-black"
                onClick={() => {
                  setIsComment(true)
                }}
              >
                <i className="bi bi-chat-dots "></i> Commenti
              </Button>
              <Button className="centralSection-homePage-button text-black">
                <i className="bi bi-recycle"></i> Diffondi il post
              </Button>
              <Button className="centralSection-homePage-button text-black">
                <i className="bi bi-send"></i> Invia
              </Button>
            </div>
          </Card.Body>
          {isMod && (
            <Card.Footer>
              <Form
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault()
                  putPost()
                }}
              >
                <Form.Control
                  className="rounded-pill"
                  placeholder="Scrivi un post..."
                  value={mod?.text}
                  onChange={(e) => setMod({ ...mod!, text: e.target.value })}
                ></Form.Control>
                <Button type="submit" className="ms-3 text-nowrap rounded-pill">
                  Modifica post
                </Button>
              </Form>
            </Card.Footer>
          )}
          {isComment && (
            <Card.Footer>
              <SingleComment p={p} setIsComment={setIsComment} />
            </Card.Footer>
          )}
        </Card>
      </Col>
    </>
  )
}

export default SinglePost
