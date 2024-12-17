import { Container, Alert, Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container className="text-center mt-5">
      <Row className="mt-5"></Row>
      <Alert className="mt-5" variant="danger">
        Pagina non trovata!
      </Alert>
      <Button
        variant="success"
        onClick={() => {
          navigate('/')
        }}
      >
        Torna alla home
      </Button>
    </Container>
  )
}

export default NotFound
