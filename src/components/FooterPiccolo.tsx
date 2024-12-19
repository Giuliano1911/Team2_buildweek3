import { Dropdown } from 'react-bootstrap'

const FooterPiccolo = () => {
  return (
    <>
      <div className="d-flex text-align-center justify-content-center justify-content-evenly justify-content-evenly">
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Informazioni
          </a>
        </p>
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Accesibilità
          </a>
        </p>
      </div>
      <div className="d-flex text-align-center justify-content-center justify-content-evenly">
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Centro sicurezza
          </a>
        </p>
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="p-0 mb-3 text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Privacy e condizioni
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Informativa sulla privacy
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Contratto di licenza
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Termini e condizioni delle pagine
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              Informativa sui cookie
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Informativa sul copyright
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Opzioni relative all'Informativa <br />
              sulla Privacy
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex text-align-center justify-content-center justify-content-evenly">
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Opzioni per gli annunci pubblicitari
          </a>
        </p>
      </div>

      <div className="d-flex text-align-center justify-content-center justify-content-evenly">
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Pubblicità
          </a>
        </p>
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="p-0 mb-3 text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Servizi alle aziende
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <p className="m-0 fs-6">
                <strong>Assumi su LinkedIn</strong>
              </p>
              <p className="m-0 text-secondary">Trova, attrai e assumi</p>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <p className="m-0 fs-6">
                <strong>Vendi con LinkedIn</strong>
              </p>
              <p className="m-0 text-secondary">
                Sblocca nuove opprtunità di <br />
                vendita
              </p>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <p className="m-0 fs-6">
                <strong>Offerta di lavoro gratuita</strong>
              </p>
              <p className="m-0 text-secondary">
                Ottieni rapidamente candidati <br />
                qualificati
              </p>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <p className="m-0 fs-6">
                <strong>Fai pubblicità con LinkedIn</strong>
              </p>
              <p className="m-0 text-secondary">
                Acquisisci clienti e fai crescere la
                <br />
                tua azienda
              </p>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <p className="m-0 fs-6">
                <strong>Inizia con Premium</strong>
              </p>
              <p className="m-0 text-secondary">Amplia e sfrutta la tua rete</p>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <p className="m-0 fs-6">
                <strong>Impara con LinkedIn</strong>
              </p>
              <p className="m-0 text-secondary">
                Corsi per formare i tuoi dipendenti
              </p>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <p className="m-0 fs-6">
                <strong>Admin Center</strong>
              </p>
              <p className="m-0 text-secondary">
                Gestisci i dettagli di fatturazione e <br /> account
              </p>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex justify-content-center justify-content-evenly">
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Scarica l'app di LinkedIn
          </a>
        </p>
        <p>
          <a
            href="#"
            className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Altro
          </a>
        </p>
      </div>

      <div className="d-flex  justify-content-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 14"
            id="linkedin-logo-blue-xxsmall"
            aria-hidden="true"
            role="none"
            data-supported-dps="56x14"
            width="60"
            height="18"
            className="me-1"
          >
            <g>
              <path
                d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.7 2.7 0 0011.89 6V5H10v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a3.23 3.23 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.3 4.3 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.26 4 4 0 010-.49 3.58 3.58 0 013.5-3.65h.26C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.45 1.45 0 00-1.51-1.4h-.08a1.63 1.63 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.45 2.45 0 01-2 .9 3.41 3.41 0 01-3.32-3.5 1.41 1.41 0 010-.2 3.35 3.35 0 013-3.68h.3a2.61 2.61 0 011.9.7zm.15 6.5a1.64 1.64 0 00-1.4-1.84h-.22A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.62 1.62 0 001.63-1.63.81.81 0 00-.01-.22zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2A1.25 1.25 0 1045 4.25 1.25 1.25 0 0046.25 3zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C51.82 6.8 52 7.94 52 8.73V12h2z"
                fill="#0a66c2"
              />
            </g>
          </svg>
        </div>
        <p>LinkedIn Corporation &copy; </p>
      </div>
    </>
  )
}

export default FooterPiccolo
