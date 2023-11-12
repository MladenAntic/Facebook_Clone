import React, { useEffect } from "react";
import { auth, provider } from "./firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useStateValue } from "./contexts/StateProvider";
import { actionTypes } from "./contexts/reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const [{ user }] = useStateValue();

  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, [user]);

  return (
    <div className="grid place-items-center h-[100vh]">
      <div className="flex flex-col">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
          className="object-contain h-[9.375rem] max-md:h-[6.25rem]"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook"
          className="object-contain h-[9.375rem] max-md:h-[6.25rem]"
        />

        <button
          className="w-[18.75rem] py-[10px] bg-[#2e81f4] text-[#eff2f5] font-bold rounded-lg hover:bg-white hover:text-[#2e81f4] hover:outline hover:outline-[#2e81f4] max-md:w-full"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
