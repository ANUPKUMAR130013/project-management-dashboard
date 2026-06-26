import { useEffect, useState } from "react";

function Profile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    image: ""
  });

  useEffect(() => {

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

  }, []);

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setProfile((prev) => ({
        ...prev,
        image: reader.result
      }));

    };

    reader.readAsDataURL(file);

  };

  const handleSave = () => {

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert("Profile Updated Successfully");

  };

  return (

    <div
      style={{
        width: "600px",
        margin: "30px auto",
        padding: "30px",
        boxShadow: "0px 0px 10px gray",
        borderRadius: "10px"
      }}
    >

      <h1>My Profile</h1>

      <hr />

      <br />

      <div
        style={{
          textAlign: "center"
        }}
      >

        {profile.image ? (

          <img
            src={profile.image}
            alt="Profile"
            width="150"
            height="150"
            style={{
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />

        ) : (

          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "#ddd",
              margin: "auto",
              lineHeight: "150px"
            }}
          >
            No Image
          </div>

        )}

      </div>

      <br />

      <label>Upload Profile Photo</label>

      <input
        type="file"
        onChange={handleImage}
      />

      <br />
      <br />

      <label>Name</label>

      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <label>Email</label>

      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <label>Phone</label>

      <input
        type="text"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        style={inputStyle}
      />

      <label>Designation</label>

      <input
        type="text"
        name="designation"
        value={profile.designation}
        onChange={handleChange}
        style={inputStyle}
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          cursor: "pointer",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Save Profile
      </button>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "15px"
};

export default Profile;