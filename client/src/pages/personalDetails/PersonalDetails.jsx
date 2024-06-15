import Navbar from "../../components/navbar/Navbar";
import "./personalDetails.css";
import { useState } from "react";

function PersonalDetails() {
  const [check, setCheck] = useState(false);
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
            <div>
              <p className="fixedName">Name</p>
            </div>
            {check ? (
              <div className="placeholder">
                <div className="pdNameInput">
                  <label>First name(s)</label>
                  <input type="text" id="firstname" />
                </div>
                <div className="pdNameInput">
                  <label>Last name(s)</label>
                  <input type="text" id="username" />
                </div>
              </div>
            ) : (
              <div className="placeholder">
                <p>Let us know what to call you</p>
              </div>
            )}
          </div>
          {check ? (
            <div className="pdButtons">
              <button
                onClick={() => {
                  setCheck(false);
                }}
              >
                Cancel
              </button>
              <button>Save</button>
            </div>
          ) : (
            <button
              className="btnEdit"
              onClick={() => {
                setCheck(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
