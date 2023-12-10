import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const startQuiz = () => {
    if (user) {
      // console.log(user);
      navigate("/quizpage"); // Check the correct path for QuizPage
    } else {
      navigate("/login");
    }
  };

  return (
    <div className=" w-full h-screen bg-gradient-to-r from-cyan-600 to-blue-800 ">
      <div className=" min-h-3/4 h-auto w-full p-20    ">
        <div className=" text-center  ">
          <h1 className=" md:text-4xl text2xl text-amber-900 font-bold">
            Welcome to Quizland
          </h1>
          <h5 className=" md:text-2xl text-base text-md text-blue-900 font-bold">
            A land of fun
          </h5>
        </div>

        <div className=" flex items-center justify-center md:text-base text-xs font-bold mt-10">
          <button onClick={startQuiz} >
            <Button ButtonText="Start Quiz" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
