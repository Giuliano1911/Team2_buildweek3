import { Card } from 'react-bootstrap'
import Profile from '../types/Profile'
import CompanyImg from '../assets/Generic company.png'
import Loading from './Loading'
import Error1 from './Error1'

interface LeftColumnProps {
  profile: Profile
  isLoading: boolean
  isError: boolean
}

const LeftColumn = ({ profile, isLoading, isError }: LeftColumnProps) => {
  return (
    <div className="d-flex flex-column">
      <Card className="left-column mb-2">
        {isError && <Error1 />}
        {isLoading && <Loading />}
        {!isLoading && !isError && (
          <>
            {' '}
            <div className="mb-3 position-relative">
              {/* Immagine di copertina */}
              <img
                src="https://media.licdn.com/dms/image/v2/D4E16AQG5Bl3WdJPu8Q/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1706041180519?e=1740009600&v=beta&t=GxIvX1dol3SJnlpZ0j1gYtPtqmkw_A-5CxDRmMCbOHc" // Sostituisci con l'immagine desiderata
                className="card-img-top"
                alt="Copertina"
                style={{
                  objectFit: 'cover',
                  height: '65px',
                  width: '100%',
                  position: 'relative',
                  zIndex: '1',
                }}
              />
              {/* Immagine profilo */}
              <div
                className="position-absolute"
                style={{
                  width: '70px',
                  height: '70px',
                  left: '50px',
                  top: '70px',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '2',
                }}
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGc6RH6KeJqHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714508430409?e=1740009600&v=beta&t=gbpKiXK4YUrcnDSc91Z53irPvDRoHWoIunD-3XtVJGk" // Sostituisci con l'immagine del profilo
                  className="rounded-circle border border-2 border-white"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt="Profilo"
                />
              </div>
            </div>
            <Card.Body className="mt-3 p-3 m-0">
              <Card.Title>
                {profile.name} {profile.surname}
              </Card.Title>
              <Card.Text className="mb-1">{profile.title}</Card.Text>
              <Card.Text className="text-secondary mb-1">
                {profile.area}
              </Card.Text>
              <Card.Text className="">
                <img src={CompanyImg} width="15" height="15" alt="company" />
                <span className="my-auto ps-1 fw-semibold">epicode</span>
              </Card.Text>
            </Card.Body>
          </>
        )}
      </Card>

      <Card className="left-column mb-2">
        <Card.Body className="p-3 m-0">
          <Card.Text className="text-secondary mb-1">
            Cresci professionalmente con Premium
          </Card.Text>
          <Card.Text className="">
            <i className="bi bi-square-fill me-2"></i>
            <span className="fw-semibold">Prova 1 mese per 0 EUR</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="left-column mb-2">
        <Card.Body className="p-3 m-0">
          <div className="d-flex justify-content-between mb-1">
            <Card.Text className="fw-semibold mb-0">Collegamenti</Card.Text>
            <Card.Text className="fw-semibold text-primary mb-0">6</Card.Text>
          </div>
          <Card.Text className="text-secondary">Espandi la tua rete</Card.Text>
        </Card.Body>
      </Card>
      <Card className="left-column mb-2">
        <Card.Body className="p-3 m-0">
          <div className="d-flex mb-1">
            <i className="bi bi-bookmark-fill fw-semibold fs-6"></i>
            <Card.Text className="fw-semibold my-auto ps-2">
              Elementi salvati
            </Card.Text>
          </div>
          <div className="d-flex mb-1">
            <i className="bi bi-people-fill fw-semibold fs-6"></i>
            <Card.Text className="fw-semibold my-auto ps-2">Gruppi</Card.Text>
          </div>
          <div className="d-flex mb-1">
            <i className="bi bi-newspaper fw-semibold fs-6"></i>
            <Card.Text className="fw-semibold my-auto ps-2">
              Newsletter
            </Card.Text>
          </div>
          <div className="d-flex mb-1">
            <i className="bi bi-calendar2-event fw-semibold fs-6"></i>
            <Card.Text className="fw-semibold my-auto ps-2">Eventi</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LeftColumn
