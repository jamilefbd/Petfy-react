import React from "react";

const Form = ({ title, placeholder, button_name }) => {
  return (
    <form>
      <p>{title}</p>
      <input placeholder={placeholder} />
      <button>{button_name}</button>
    </form>
  );
};

export default Form;
