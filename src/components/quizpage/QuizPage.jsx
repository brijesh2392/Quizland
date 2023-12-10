import React, { useEffect, useState } from "react";
import Button from "../Button";
import QuestionData from "../../data/Question.json";
import { Link } from "react-router-dom";
import background2 from "../../assets/background2.jpg";

const QuizPage = () => {
  const [currentQueIndex, setCurrentQueIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));
  const currentQuestion = selectedQuestions[currentQueIndex];

  const handleNextQuestion = () => {
    setCurrentQueIndex((prevIndex) => prevIndex + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQueIndex((prevIndex) => prevIndex - 1);
  };

  const handleOptionClick = (selectedOption) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQueIndex] = selectedOption;
    setUserAnswers(updatedUserAnswers);
  };

  useEffect(() => {
    // Select 10 random questions initially
    const shuffledQuestions = QuestionData.sort(() => Math.random() - 0.5);
    const selected = shuffledQuestions.slice(0, 10);
    setSelectedQuestions(selected);
  }, []);

  const isLastQuestion = currentQueIndex === selectedQuestions.length - 1;

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
      if (userAnswers[i] === selectedQuestions[i].answer) {
        score += 2;
      }
    }
    return score;
  };

  return (
    <div
      div
      className=" py-12 md:text-xl text-base bg-gradient-to-tr from-[#004c5b] to-[#0976c0] "
      // style={{ backgroundImage: `url(${background2})` }}
    >
      <div className=" flex flex-col items-center justify-around my-6 ">
        {currentQuestion && (
          <div className=" md:w-[700px] w-[90%] h-auto">
            <div className=" bg-blue-950 text-white p-3  rounded-xl">
              Qs {currentQueIndex + 1}: {currentQuestion.question}
            </div>
            <ol>
              {["A", "B", "C", "D"].map((option) => (
                <li
                  key={option}
                  className={`bg-gray-200 rounded-xl p-3 my-2 ${
                    userAnswers[currentQueIndex] === option
                      ? " bg-blue-800 text-green-900 font-extrabold"
                      : " "
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {`${option}. ${currentQuestion[option]}`}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-36 ">
        {!isLastQuestion && (
          <button onClick={handleNextQuestion}>
            <Button ButtonText="Next" />
          </button>
        )}
        {currentQueIndex > 0 && (
          <button onClick={handlePrevQuestion}>
            <Button ButtonText="Previous" />
          </button>
        )}
        {isLastQuestion && (
          <Link to={`/resultpage?score=${calculateScore()}`}>
            <Button ButtonText="Submit" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
