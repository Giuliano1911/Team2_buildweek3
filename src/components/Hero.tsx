import Profile from '../types/Profile'
import CoverImg from '../assets/Generic cover.webp'
import Error1 from './Error1'
import Loading from './Loading'

interface HeroProps {
  profile: Profile
  isLoading: boolean
  isError: boolean
}

const HeroSection = ({ profile, isLoading, isError }: HeroProps) => {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="card position-relative p-0">
          {isError && <Error1 />}
          {isLoading && <Loading />}
          {!isLoading && !isError && (
            <>
              <div className="mb-3">
                <img
                  src={CoverImg}
                  className="card-img-top"
                  alt="Copertina"
                  style={{ objectFit: 'cover', height: '200px' }}
                />

                <div
                  className="position-absolute translate-middle"
                  style={{
                    width: '155px',
                    height: '155px',
                    left: '100px',
                    top: '170px',
                  }}
                >
                  <img
                    src={profile.image}
                    className="rounded-circle border border-4 border-white "
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt="Profilo"
                  />
                </div>
              </div>

              <div className="card-body text-start mt-4">
                <div className="d-flex">
                  <h3 className="card-title fw-bold mb-1">
                    {profile.name} {profile.surname}
                  </h3>
                  <a
                    href="#"
                    className=" ms-3 myButton ps-2 pe-2 align-self-center d-flex"
                  >
                    <svg
                      className="align-self-center me-2 bi bi-patch-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                      />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                    </svg>
                    Aggiungi badge di verifica
                  </a>
                </div>
                <p className="card-text text-muted">{profile.title}</p>
                <p className="text-muted small">
                  {profile.area}
                  <a href="#" className="text-decoration-none">
                    - Informazioni di contatto
                  </a>
                </p>
              </div>

              <div className="container px-4 pb-4 ">
                <div className="row gx-3 text-center ">
                  <div className="col d-flex flex-wrap">
                    <button className="btn-primary fs-6 my-2 ms-2 fw-semibold rounded-5">
                      Disponibile per
                    </button>
                    <button className="btn-outline-primary fs-6 my-2 ms-2 fw-semibold rounded-5">
                      Aggiungi sezione del profilo
                    </button>
                    <button className="btn-outline-primary fs-6 my-2 ms-2 fw-semibold rounded-5">
                      Migliora Profilo
                    </button>
                    <button className="btn btn-outline-dark fs-6 my-2 ms-2 fw-semibold rounded-5">
                      Risorse
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
