import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className=" bg-gradient-to-r from-cyan-600 to-blue-800  p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/homepage">
            <h2 className=" text-[#8f2d56] font-bold md:text-4xl text-3xl">
              Quizland
            </h2>
          </Link>

          {user?.email ? (
            <div>
              <Link to="/account">
                <button className="text-white pr-4 font-bold">Account</button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-blue-950 px-6 py-2 rounded cursor-pointer text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-5 text-white font-bold ">
              <NavLink to="/login">
                <Button ButtonText="Login" />
              </NavLink>
              <NavLink to="/signup">
                <Button ButtonText="Sign Up" />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
