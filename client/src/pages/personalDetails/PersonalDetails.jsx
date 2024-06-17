import Navbar from "../../components/navbar/Navbar";
import Field from "../../components/field/Field";
import "./personalDetails.css";

function PersonalDetails({ fields }) {
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
        {fields.map((field, index) => (
          <Field key={index} field={field} />
        ))}
      </div>
    </>
  );
}

export default PersonalDetails;
