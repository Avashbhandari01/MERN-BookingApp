import { useState } from "react";
import InputField from "../inputfield/Inputfield";

function Field({ field }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="pdFormContainer">
      <div className="pdFormInfo">
        <p>{field.label}</p>
        {isEditing ? (
          <div className="placeholder">
            <InputField fields={field.fields} />
          </div>
        ) : (
          <div className="placeholder">
            <p>{field.placeholder}</p>
          </div>
        )}
      </div>
      {isEditing ? (
        <div className="pdButtons">
          <button
            onClick={() => {
              setIsEditing(false);
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
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default Field;
