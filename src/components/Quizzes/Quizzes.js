import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const allQuiz = useLoaderData();
   const quizzes = allQuiz.data.questions;
   console.log(quizzes);
    return (
        <div className='container'>
            {
                quizzes.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz> )
            }
        </div>
    );
};

export default Quizzes;