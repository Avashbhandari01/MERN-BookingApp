import "./inputfield.css";

function InputField({ fields }) {
  return (
    <div className="pdInputField">
      {fields.map((field, index) => (
        <div key={index} className="pdSubField">
          <label htmlFor={field.id}>{field.label}</label>
          <input type={field.type} id={field.id} />
        </div>
      ))}
    </div>
  );
}

export default InputField;
