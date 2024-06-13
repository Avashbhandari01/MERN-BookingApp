import Navbar from "../../components/navbar/Navbar";
import "./personalDetails.css";

function PersonalDetails() {
  return (
    <>
      <Navbar />
      <div className="pdContainer">
        <div className="pdHeader">
          <div className="pdTitle">
            <h1>Personal details</h1>
            <p>Update your information and find out how it's used.</p>
          </div>
          <div className="pdIcon"></div>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Name</p>
            <div className="placeholder">
              <p>Let us know what to call you</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Display name</p>
            <div className="placeholder">
              <p>Choose a display name</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Email</p>
            <div className="placeholder">
              <p>avash115@gmail.com</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Phone number</p>
            <div className="placeholder">
              <p>Add your phone number</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Date of birth</p>
            <div className="placeholder">
              <p>Enter your date of birth</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Nationality</p>
            <div className="placeholder">
              <p>Choose your country/region</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Gender</p>
            <div className="placeholder">
              <p>Select your gender</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
        <div className="pdFormContainer">
          <div className="pdFormInfo">
            <p>Address</p>
            <div className="placeholder">
              <p>Add your address</p>
            </div>
          </div>
          <button className="btnEdit">Edit</button>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
