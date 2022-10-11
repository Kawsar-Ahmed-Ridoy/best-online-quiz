import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import toast, { Toaster } from "react-hot-toast";


const Quiz = ({ quiz }) => {
  const { options, id, question, correctAnswer } = quiz;
  const notify = () => toast(
    `${correctAnswer}`,
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
        options.map(option => <div className="d-flex p-4  ">
            <div className="my-auto me-2  "><input type="radio" name="gander"></input></div>
            <div className="m-auto"><h4>{option}</h4></div>
        </div> )
        }
        </div>
    </div>
  );
};

export default Quiz;
