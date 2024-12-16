const SidebarPersonalProfiles = () => {
  return (
    <>
      <div>
        <div className="d-flex align-items-start">
          <img
            className=" rounded-5 custom-sidebar-profilePicSize "
            src="src/assets/image/profile-pic.jpg"
            alt="profile-pic"
          />
          <div>
            <h5 className=" ms-2">Giulio Marinelli</h5>
            <p className="ms-2">Full Stack & AI Developer ❤️...</p>
            <button className="custom-sidebar-profiles-buttons">
              🔗 Collegati
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SidebarPersonalProfiles;
