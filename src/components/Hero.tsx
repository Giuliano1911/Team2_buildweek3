import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-9">
          <div className="card position-relative">
            <div className="mb-3">
              {' '}
              {/* Immagine di copertina */}
              <img
                src="https://media.licdn.com/dms/image/v2/D4E16AQG5Bl3WdJPu8Q/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1706041180519?e=1740009600&v=beta&t=GxIvX1dol3SJnlpZ0j1gYtPtqmkw_A-5CxDRmMCbOHc" // Sostituisci con l'immagine desiderata
                className="card-img-top"
                alt="Copertina"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              {/* Immagine profilo */}
              <div
                className="position-absolute translate-middle"
                style={{
                  width: '150px',
                  height: '150px',
                  left: '12vh',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGc6RH6KeJqHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714508430409?e=1740009600&v=beta&t=gbpKiXK4YUrcnDSc91Z53irPvDRoHWoIunD-3XtVJGk" // Sostituisci con l'immagine del profilo
                  className="rounded-circle border border-4 border-white shadow"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt="Profilo"
                />
              </div>
            </div>
            {/* Contenuto della card */}
            <div className="card-body text-start mt-5">
              <div className="d-flex">
                <h3 className="card-title fw-bold mb-1">Luca Capasso</h3>
                <a
                  href="#"
                  class=" ms-3 myButton ps-2 pe-2 align-self-center d-flex"
                >
                  <svg
                    className=" align-self-center me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-patch-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                    />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                  </svg>
                  Aggiungi badge di verifica
                </a>
              </div>
              <p className="card-text text-muted">Ufficio Tecnico</p>
              <p className="text-muted small">
                Mestre, Veneto, Italia ·{' '}
                <a href="#" className="text-decoration-none">
                  Informazioni di contatto
                </a>
              </p>
            </div>

            {/* Bottoni Sottosezione */}
            <div className="container px-4 pb-4 ">
              <div className="row gx-3 text-center ">
                <div className="col d-flex flex-wrap">
                  <button className="btn btn-primary rounded-5 mx-2">
                    Disponibile per
                  </button>
                  <button className="btn btn-outline-primary rounded-5 mx-2">
                    Aggiungi sezione del profilo
                  </button>
                  <button className="btn btn-outline-primary rounded-5 mx-2">
                    Migliora Profilo{' '}
                  </button>
                  <button className="btn btn-outline-secondary rounded-5 mx-2">
                    Risorse{' '}
                  </button>
                </div>
              </div>

              <div className="row mt-3 text-center">
                <div className="col-md-12">
                  <div className="alert alert-secondary p-2 mb-0">
                    <small className="text-muted">
                      Disponibile a lavorare:{' '}
                      <strong>Ruoli di Responsabile ufficio tecnico</strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
