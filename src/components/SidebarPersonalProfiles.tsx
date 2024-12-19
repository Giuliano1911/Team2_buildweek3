import { Link } from 'react-router'
import Profile from '../types/Profile'

interface SidebarPersonalProfilesProps {
  p: Profile
}

const SidebarPersonalProfiles = ({ p }: SidebarPersonalProfilesProps) => {
  return (
    <>
      <div>
        <div className="d-flex align-items-start">
          <Link to={`/profile/${p._id}`}>
            <img
              className=" rounded-circle "
              style={{
                width: '50px',
                height: '50px',
              }}
              src={p.image}
              alt="profile-pic"
            />
          </Link>
          <div className=" ps-2 d-flex flex-column">
            <Link to={`/profile/${p._id}`} style={{ textDecoration: 'none' }}>
              <p className=" mb-0 p-0 fs-6 fw-semibold text-dark ">
                {p.name} <span> {p.surname}</span>
              </p>
            </Link>
            <p className="">{p.title} </p>
            <button className="btn btn-outline-dark fs-6 my-2 fw-semibold rounded-5 me-auto">
              <i className="bi bi-person-plus-fill"></i> Collegati
            </button>
          </div>
        </div>
      </div>
      <hr className=" " />
    </>
  )
}

export default SidebarPersonalProfiles
