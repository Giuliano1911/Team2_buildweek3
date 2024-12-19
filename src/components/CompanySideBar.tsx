import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import SideBarImg from '../assets/image/image 1.png'
import stockImage from '../assets/Screenshot 2024-12-18 114210.png'

const CompanySideBar = () => {
  return (
    <Container className="mt-3">
      <div>
        <Card className="sidebar mb-2">
          <img
            src={SideBarImg}
            alt="image-1"
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
            }}
          />
        </Card>
      </div>
      <div className="container-fluid bg-white border rounded-2 mt-3 pt-2">
        <h5>Pagine affiliate</h5>

        <div className="d-flex">
          <div>
            <img
              src={stockImage}
              alt="image-1"
              style={{
                objectFit: 'cover',
                height: '20%',
                width: '20%',
              }}
            />
          </div>
          <div>
            <p>
              <a
                href="#"
                className="text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-0-hover"
              >
                <strong>Marketing Manager</strong>
              </a>
            </p>
            <p>Rare Edition</p>
            <div className="d-flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </div>
              <p>USA Only</p>
            </div>
            <p>Fulltime</p>
            <p>Annuncio pubblicato in data: 2021-09-12</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CompanySideBar
