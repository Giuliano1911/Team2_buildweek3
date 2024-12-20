import Post from '../types/Post'
import Comment from '../types/Comment'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import Error1 from './Error1'
import SingleComment from './SingleComment'
import { Button, Card, Form } from 'react-bootstrap'

const APIKEY =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGQ4MjBlYTI4NjAwMTUyOGI5NTciLCJpYXQiOjE3MzQzNDgxNjIsImV4cCI6MTczNTU1Nzc2Mn0.I3Ul7VXyl9Z9CTkVeCHJAKY27VZPTmdJBhs3Wtg-oj8'

interface CommentsProps {
  p: Post
  setIsComment: React.Dispatch<React.SetStateAction<boolean>>
}

interface InitialAddState {
  comment: string
  rate: string
  elementId: string
}

const Comments = ({ p, setIsComment }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [restart, setRestart] = useState<boolean>(false)

  const InitialState = {
    comment: '',
    rate: '5',
    elementId: `${p._id}`,
  }

  const [add, setAdd] = useState<InitialAddState>(InitialState)

  const getComments = async () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      headers: { Authorization: APIKEY },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: Comment[]) => {
        console.log(data, 'data')
        setComments(data.filter((c) => p._id === c.elementId))
        console.log(comments)
        setIsLoading(false)
        setRestart(false)
      })
      .catch((error) => {
        console.log(error)
        setIsError(true)
      })
  }

  useEffect(() => {
    getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restart])

  const postComment = async () => {
    console.log(add)
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
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
          setAdd(InitialState)
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
      <div className="d-flex justify-content-between">
        {!isLoading && !isError && !comments.length && (
          <h5>Non ci sono commenti</h5>
        )}
        <div> </div>
        <a
          role="button"
          onClick={() => {
            setIsComment(false)
          }}
        >
          <i className="fas fa-times text-black"></i>
        </a>
      </div>
      {isError && <Error1 />}
      {isLoading && <Loading />}
      {!isLoading &&
        !isError &&
        comments.map((c) => {
          return (
            <SingleComment
              c={c}
              key={c._id}
              setRestart={setRestart}
              APIKEY={APIKEY}
            />
          )
        })}
      <Card.Footer>
        <Form
          className="d-flex"
          onSubmit={(e) => {
            e.preventDefault()
            postComment()
          }}
        >
          <Form.Control
            className="rounded-pill"
            placeholder="Scrivi un commento..."
            value={add?.comment}
            onChange={(e) => setAdd({ ...add!, comment: e.target.value })}
          ></Form.Control>
          <Button type="submit" className="ms-3 text-nowrap rounded-pill">
            Pubblica
          </Button>
        </Form>
      </Card.Footer>
    </>
  )
}
export default Comments
