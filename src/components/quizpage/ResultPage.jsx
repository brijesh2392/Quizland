import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const score = new URLSearchParams(location.search).get("score");

  return (
    <div className="my-12 md:text-4xl font-extrabold text-white text-center text-base">
      <h2>Your Score: {score}</h2>
      {/* Other result page content */}
    </div>
  );
};

export default ResultPage;
