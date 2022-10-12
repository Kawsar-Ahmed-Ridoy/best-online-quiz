import React from "react";
import toast, { Toaster } from "react-hot-toast";
const Select = ({ option, key, correct }) => {
  const correctAnswer = (selectOption) => {
    if (selectOption === correct) {
      toast.success("Right Answer");
    } else {
      toast.error("wrong answer!");
    }
  };
  return (

      <div className="d-flex p-4">
        <div className="my-auto me-2">
          <input
            onClick={(e) => correctAnswer(e.target.value)}
            type="radio"
            name="{key}"
            value={option}
          />
          <Toaster></Toaster>
        </div>
        <div className="m-auto">
          <h5>{option}</h5>
        </div>
      </div>

  );
};

export default Select;
