import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const ConsigliatiSection = () => {
  return (
    <Container className="container-fluid  ">
      <Row className="row justify-content-center">
        <h3>Consigliato per te</h3>
        <div className="d-flex align-content-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>
          <p>Solo per te</p>
        </div>
      </Row>
      <Row>
        <Col className="col-12 col-lg-2 justify-content-between ">
          <div>
            <div></div>
            <h4>
              Aggiungi una foto al tuo profilo per aiutare gli altri a
              riconoscerti
            </h4>
          </div>
          <div>
            <p>
              Gli utenti con una foto del profilo ricevono fino a 2,3 volte più
              visualizzazioni del profilo.
            </p>
          </div>
          <button className="btn btn-outline-secondary rounded-5 mx-2">
            Aggiungi foto
          </button>
        </Col>
        <Col className="col-12 col-lg-2 justify-content-between ">
          <div>
            <div></div>
            <h4>
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </h4>
          </div>
          <div>
            <p>
              Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
              più visualizzazioni del profilo.
            </p>
          </div>
          <button className="btn btn-outline-secondary rounded-5 mx-2">
            Aggiungi un riepilogo
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default ConsigliatiSection
