import { Container } from 'react-bootstrap'

const SideBarNotizieHomePage = () => {
  return (
    <Container className="container-fluid bg-white border rounded-2 p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="p-0">LinkedIn Notizie</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
      </div>

      <h5>Storie principali</h5>

      <div>
        <p className="m-0">
          <strong>Tech: le tendenze del</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">7 ore •</p>
          <p>1.805 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Revolut</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">2 giorni fa • </p>
          <p>679 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Istantanee dal Maximall Pompeii</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">7 ore fa •</p>
          <p>328 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Come sarà il lavoro nel</strong>
        </p>
        <p className="me-1">5 ore fa</p>
      </div>

      <div>
        <p className="m-0">
          <strong>Big Ideas: 15 spunti per il </strong>
        </p>
        <div className="d-flex">
          <p className="me-1">7 ore fa •</p>
          <p>4.497 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Unicredit-Banco Bpm</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">6 ore fa • </p>
          <p>3.716 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Che cosa fa Gemini 2.0</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">7 ore fa •</p>
          <p>632 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Approvato il Ddl Lavoro</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">6 ore fa •</p>
          <p>405 lettori</p>
        </div>
      </div>

      <div>
        <p className="m-0">
          <strong>Censis fotografa gli italiani</strong>
        </p>
        <div className="d-flex">
          <p className="me-1">6 ore fa •</p>
          <p>342 lettori</p>
        </div>
      </div>
    </Container>
  )
}

export default SideBarNotizieHomePage
