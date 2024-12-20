import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useLocation } from 'react-router'

const ConsigliatiSection = () => {
  const location = useLocation()
  return (
    <Container className="container-fluid bg-white border rounded-2 mt-2 p-4">
      <Row className="row justify-content-center">
        <h3 className="p-0">Consigliato per te</h3>
        {location.pathname === '/' && (
          <div className="d-flex align-items-center p-0">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill text-secondary"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
            </div>
            <p className="mb-0 ms-2 text-secondary">Solo per te</p>
          </div>
        )}
      </Row>
      <Row>
        <Col className="col-12 col-lg-5 me-4 justify-content-between bg-white border rounded-2 p-3 mt-4 ">
          <div className="d-flex mb-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="camera-small"
                aria-hidden="true"
                role="none"
                data-supported-dps="48x48"
                width="48"
                height="48"
              >
                <path
                  d="M46 8H30.52l-2.59-3.27a2.33 2.33 0 00-1.7-.73h-4.46c-.64 0-1.26.26-1.7.73L17 8H2a2.42 2.42 0 00-2 2v30a2.42 2.42 0 002 2h44a2.42 2.42 0 002-2V10a2.42 2.42 0 00-2-2z"
                  fill="#56687a"
                />
                <path fill="#788fa5" d="M0 10h48v30H0z" />
                <path fill="#fdc2b1" d="M0 15h48v20H0z" />
                <path
                  d="M24 13c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z"
                  fill="#fff"
                />
                <path
                  d="M24 15c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"
                  fill="#56687a"
                />
                <path
                  d="M24 19c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                  fill="#23292f"
                />
                <circle cx="24" cy="25" r="2" fill="#fff" />
              </svg>
            </div>
            <h6 className="mb-0 ms-2">
              Aggiungi una foto al tuo profilo per aiutare gli altri a
              riconoscerti
            </h6>
          </div>
          <div>
            <p>
              Gli utenti con una foto del profilo ricevono fino a 2,3 volte più
              visualizzazioni del profilo.
            </p>
          </div>
          <button className="btn btn-outline-secondary rounded-5">
            Aggiungi foto
          </button>
        </Col>
        <Col className="col-12 col-lg-6 justify-content-between bg-white border rounded-2 p-3 mt-4">
          <div className="d-flex mb-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="ui-feed-profile-small"
                aria-hidden="true"
                role="none"
                data-supported-dps="48x48"
                width="48"
                height="48"
              >
                <path fill="#fff" d="M2 8h44v38H2z" />
                <path fill="#dde7f1" d="M46 8v38H2V8H0v40h48V8h-2z" />
                <path
                  d="M48 2.55V8H0V2.55A2.58 2.58 0 012.61 0h42.77A2.593 2.593 0 0148 2.54z"
                  fill="#9db3c8"
                />
                <circle cx="4" cy="4" r="2" fill="#fff" />
                <path fill="#f8c77e" d="M6 34h36v6H6z" />
                <path
                  d="M41 30H7c-.55 0-1-.45-1-1s.45-1 1-1h34c.55 0 1 .45 1 1s-.45 1-1 1zM41 24H23c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zM41 18H23c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zM16.36 23.12A5.944 5.944 0 0018 19c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.6.63 3.04 1.64 4.12C9 22.38 10.5 22 12 22s3 .37 4.36 1.12z"
                  fill="#56687a"
                />
                <path
                  d="M12 25c1.72 0 3.26-.73 4.36-1.88C15 22.38 13.5 22 12 22s-3 .37-4.36 1.12A5.96 5.96 0 0012 25z"
                  fill="#f8c77e"
                />
                <circle cx="12" cy="18" r="3" fill="#f8c77e" />
              </svg>
            </div>
            <h6 className="mb-0 ms-2">
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </h6>
          </div>
          <div>
            <p>
              Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
              più visualizzazioni del profilo.
            </p>
          </div>
          <button className="btn btn-outline-secondary rounded-5">
            Aggiungi un riepilogo
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default ConsigliatiSection
