import { Card } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import FooterPiccolo from './FooterPiccolo'

const SideBarNotizieHomePage = () => {
  return (
    <>
      <Card className="mt-2 mt-lg-0">
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
                  <g clipPath="url(#clip0_29135_360925)">
                    <g clipPath="url(#clip1_29135_360925)">
                      <path d="M1 1H16V16H1V1Z" fill="#7FADED" />
                      <path d="M16 1H31V16H16V1Z" fill="#F5F5F5" />
                      <path d="M1 16H16V31H1V16Z" fill="#F5F5F5" />
                      <path d="M16 16H31V31H16V16Z" fill="#FFBA33" />
                    </g>
                    <path
                      d="M27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223C0.830955 1.63351 0.658359 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.658359 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.658359 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5Z"
                      stroke="black"
                      strokeOpacity="0.9"
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
                  fillRule="evenodd"
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
                  <g clipPath="url(#clip0_12111_176736)">
                    <path
                      d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                      fill="black"
                      fillOpacity="0.9"
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
                    strokeOpacity="0.9"
                    strokeLinejoin="round"
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
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </div>
          </div>
        </div>
      </Card>
      <Card className="bg-white border rounded-2 ps-3 pt-3 my-2">
        <div>
          <p className="text-bg-warning mb-2 d-inline-block p-1">
            SUGGERIMENTO
          </p>
          <p className="mb-2 text-secondary fs-6">
            Prova LinkedIn sull'app per Windows
          </p>
        </div>
      </Card>

      <FooterPiccolo />
    </>
  )
}

export default SideBarNotizieHomePage
