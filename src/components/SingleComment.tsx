import { Button, Card, Form } from 'react-bootstrap'
import Comment from '../types/Comment'
import { useState } from 'react'

interface SingleCommentProps {
  c: Comment
  setRestart: React.Dispatch<React.SetStateAction<boolean>>
  APIKEY: string
}

const SingleComment = ({ c, setRestart, APIKEY }: SingleCommentProps) => {
  const [isMod, setIsMod] = useState<boolean>(false)
  const [mod, setMod] = useState<Comment>(c)

  const putComment = async () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${c._id}`, {
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

  const deleteComment = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${c._id}`, {
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
      <div className=" d-flex justify-content-between">
        <Card.Title className="m-0">{c.author}</Card.Title>
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
              deleteComment()
            }}
          >
            <i className="fas fa-times ms-1 text-black ms-2"></i>
          </a>
        </div>
      </div>
      <Card.Text className="m-0 opacity-50">
        {c.createdAt.slice(0, 10)} {c.createdAt.split('T')[1].slice(0, 5)}
      </Card.Text>
      <Card.Text>{c.comment}</Card.Text>
      {isMod && (
        <Card.Footer>
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault()
              putComment()
              setIsMod(false)
            }}
          >
            <Form.Control
              className="rounded-pill"
              placeholder="Scrivi un post..."
              value={mod?.comment}
              onChange={(e) => setMod({ ...mod!, comment: e.target.value })}
            ></Form.Control>
            <Button type="submit" className="ms-3 text-nowrap rounded-pill">
              Modifica comento
            </Button>
            <a
              role="button"
              onClick={() => {
                setIsMod(false)
              }}
            >
              <i className="fas fa-times ms-1 text-black ms-2"></i>
            </a>
          </Form>
        </Card.Footer>
      )}
    </>
  )
}
export default SingleComment
