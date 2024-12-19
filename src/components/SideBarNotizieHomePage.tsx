import { Container } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const SideBarNotizieHomePage = () => {
  return (
    <Container>
      <div className="container-fluid bg-white border rounded-2 p-4">
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

        <p className="text-secondary fs-5">Storie principali</p>

        <div>
          <p className="m-0">
            <strong>Tech: le tendenze del</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">7 ore •</p>
            <p>1.805 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Revolut</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">2 giorni fa • </p>
            <p>679 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Istantanee dal Maximall Pompeii</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">7 ore fa •</p>
            <p>328 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Come sarà il lavoro nel</strong>
          </p>
          <p className="me-1 text-secondary fs-6">5 ore fa</p>
        </div>

        <div>
          <p className="m-0">
            <strong>Big Ideas: 15 spunti per il </strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">7 ore fa •</p>
            <p>4.497 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Unicredit-Banco Bpm</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">6 ore fa • </p>
            <p>3.716 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Che cosa fa Gemini 2.0</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">7 ore fa •</p>
            <p>632 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Approvato il Ddl Lavoro</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">6 ore fa •</p>
            <p>405 lettori</p>
          </div>
        </div>

        <div>
          <p className="m-0">
            <strong>Censis fotografa gli italiani</strong>
          </p>
          <div className="d-flex text-secondary fs-6">
            <p className="me-1">6 ore fa •</p>
            <p>342 lettori</p>
          </div>
        </div>

        <p className="text-secondary fs-5 mt-4">I giochi di oggi</p>

        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ">
            <div className="me-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_29135_360925)">
                  <g clip-path="url(#clip1_29135_360925)">
                    <path d="M1 1H16V16H1V1Z" fill="#7FADED" />
                    <path d="M16 1H31V16H16V1Z" fill="#F5F5F5" />
                    <path d="M1 16H16V31H1V16Z" fill="#F5F5F5" />
                    <path d="M16 16H31V31H16V16Z" fill="#FFBA33" />
                  </g>
                  <path
                    d="M27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223C0.830955 1.63351 0.658359 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.658359 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.658359 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5Z"
                    stroke="black"
                    stroke-opacity="0.9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_29135_360925">
                    <path
                      d="M0 4C0 2.11438 0 1.17157 0.585786 0.585786C1.17157 0 2.11438 0 4 0H28C29.8856 0 30.8284 0 31.4142 0.585786C32 1.17157 32 2.11438 32 4V28C32 29.8856 32 30.8284 31.4142 31.4142C30.8284 32 29.8856 32 28 32H4C2.11438 32 1.17157 32 0.585786 31.4142C0 30.8284 0 29.8856 0 28V4Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip1_29135_360925">
                    <path
                      d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="me-2">
              <p className="m-0 fs-5">Tango</p>
              <p className="text-secondary fs-6 m-0">Armonizza la griglia</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ">
            <div className="me-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12111_176736)">
                  <path
                    d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                    fill="black"
                    fill-opacity="0.9"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(1 1)"
                    fill="#C9B5E8"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(11.168 1)"
                    fill="#C9B5E8"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(21.332 1)"
                    fill="#FFD4A8"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(1 11.1665)"
                    fill="#ABCBFF"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(11.168 11.1665)"
                    fill="#C2E6B3"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(21.332 11.1665)"
                    fill="#FFD4A8"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(1 21.3335)"
                    fill="#ABCBFF"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(11.168 21.3335)"
                    fill="#E5E5E5"
                  />
                  <rect
                    width="9.66667"
                    height="9.66667"
                    transform="translate(21.332 21.3335)"
                    fill="#E5E5E5"
                  />
                </g>
                <path
                  d="M1.23223 1.23223C0.830955 1.63351 0.65836 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.65836 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.65836 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223Z"
                  stroke="black"
                  stroke-opacity="0.9"
                  stroke-linejoin="round"
                />
                <defs>
                  <clipPath id="clip0_12111_176736">
                    <path
                      d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="me-2">
              <p className="m-0 fs-5">Queens</p>
              <p className="text-secondary fs-6 m-0">Incorona ogni regione</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2 ps-3 pt-3 mt-2 mb-3">
        <p className="text-bg-warning mb-2 d-inline-block p-1">SUGGERIMENTO</p>
        <p className="mb-2 text-secondary fs-6">
          Prova LinkedIn sull'app per Windows
        </p>
      </div>
      {/* INIZIO FOOTER */}
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
    </Container>
  )
}

export default SideBarNotizieHomePage
