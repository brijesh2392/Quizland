import React from "react";
import { useAuth } from "../context/AuthContext";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col justify-center items-center my-12">
      <div>
        <FcBusinessman size={80} />
      </div>

      <div>
        {user ? <h1 className=" font-bold md:text-3xl text-xl">Username: {user.email}</h1> : navigate("/login") && null}
      </div>
    </div>
  );
};

export default Account;
