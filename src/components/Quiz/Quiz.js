import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Select from "../Select/Select";


const Quiz = ({ quiz }) => {
  const { options, id, question, correctAnswer } = quiz;
  const notify = () => toast(
    `   Correct Answer: => 
    ${correctAnswer}`,
    {
      duration: 6000,
    }
  );

  return (
    <div className="bg-primary bg-opacity-25 my-4">
      <div className="d-flex p-4 justify-content-between">
      
      <div>
      <h2>{question}</h2>
      </div>
      
      <div className="ms-3">
        <FontAwesomeIcon icon={faEye} onClick={notify}  />
        <Toaster></Toaster>
      </div>
      </div>

        <div className="d-flex flex-wrap justify-content-evenly">
        {
        options.map(option => <Select
          option={option}
          key={id}
          correct={correctAnswer}
        ></Select> )
        }
        </div>
    </div>
  );
};

export default Quiz;
