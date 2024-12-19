import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const AnalisiSection = () => {
  return (
    <Container className="container-fluid bg-white border rounded-2 mt-4 pt-4">
      <Row className="row justify-content-center">
        <h3 className="p-0  ps-4">Analisi</h3>
        <div className="d-flex align-items-center p-0  ps-4">
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
      </Row>
      <Row className=" ps-3 pb-4">
        <Col className="col-12 col-lg-4 me-4 justify-content-between mt-4 ">
          <div className="d-flex mb-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </div>
            <div className="mb-0 ms-2">
              <h6 className="mb-0 ms-2">0 visualizzazioni del profilo</h6>
              <p className="mb-0 ms-2">
                Aggiorna il tuo profilo per attrarre visitatori.
              </p>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 me-4 justify-content-between mt-4 ">
          <div className="d-flex mb-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-graph-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                />
              </svg>
            </div>
            <div className="mb-0 ms-2">
              <h6 className="mb-0 ms-2">25 impressioni del post</h6>
              <p className="mb-0 ms-2">
                Scopri chi sta interagendo con i tuoi post.
              </p>
              <p className="mb-0 ms-2">Ultimi 7 giorni</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className=" bg-white border-top rounded-bottom rounded-2 border-secondary-subtl d-flex flex-column p-0">
          <button className="buttonSidebar-mostraAltro">Mostra altro</button>
        </Col>
      </Row>
    </Container>
  )
}

export default AnalisiSection
