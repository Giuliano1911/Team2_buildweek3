import { Button, Card, Col, Row } from 'react-bootstrap'
import Post from '../types/Post'
import Profile from '../types/Profile'
import { useState } from 'react'
import SingleComment from './SingleComment'

interface SinglePostProps {
  p: Post
  profile: Profile
}

const SinglePost = ({ p, profile }: SinglePostProps) => {
  const [isComment, setIsComment] = useState<boolean>(false)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [isMod, setIsMod] = useState<boolean>(false)

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
                    <>
                      <a
                        onClick={() => {
                          setIsMod(true)
                        }}
                      >
                        <i className="fas fa-pencil-alt text-black"></i>
                      </a>
                      <a>
                        <i className="fas fa-pencil-alt ms-1 text-black"></i>
                      </a>
                    </>
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
