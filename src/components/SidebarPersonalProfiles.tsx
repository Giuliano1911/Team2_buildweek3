import Profile from "../types/Profile";

interface SidebarPersonalProfilesProps {
  p: Profile;
}

const SidebarPersonalProfiles = ({ p }: SidebarPersonalProfilesProps) => {
  return (
    <>
      <div>
        <div className="d-flex align-items-start">
          <img
            className=" rounded-5 custom-sidebar-profilePicSize  mt-3"
            src={p.image}
            alt="profile-pic"
          />
          <div>
            <h5 className=" ms-2 mt-3">
              {p.name}
              {p.surname}
            </h5>
            <p className="ms-2">{p.title} </p>
            <button className="custom-sidebar-profiles-buttons">
              🔗 Collegati
            </button>
          </div>
        </div>
      </div>
      <hr className=" mb-0" />
    </>
  );
};

export default SidebarPersonalProfiles;
