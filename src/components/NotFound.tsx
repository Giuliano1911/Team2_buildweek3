import { Container, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container className="text-center mt-4">
      <Alert variant="danger">Pagina non trovata!</Alert>
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
