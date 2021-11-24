import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logos/Group 1329.png";
import googleLogo from "../../images/logos/GoogleLogo.png";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleLogIn, setUser } = useAuth();
  const history = useHistory();

  const googleSignIn = () => {
    console.log("cliked");
    // console.log(googleLogIn());
    googleLogIn()
      .then((result) => {
        setUser(result.user);
        history.push("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-2/5 bg-white py-24 px-5 border-2">
        <div>
          <Link to="/">
            <img className="w-80 mx-auto" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="text-center mt-14">
          <h2 className="text-2xl font-semibold ">Login with</h2>
          <button
            onClick={googleSignIn}
            className=" block w-full relative overflow-hidden py-3 rounded-3xl border-2 border-gray-200 my-4"
          >
            <img
              className="absolute left-2 top-2 w-8 "
              src={googleLogo}
              alt="google logo"
            />
            <h2 className="font-medium">Continue with Google</h2>
          </button>
          <h3>
            Don't have an Account?
            <Link to="register">
              <span className="text-blue-700"> Create an Account</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
