import React from "react";
import { useContext } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from ".."
import { UserContext } from "../context/context";
import GoogleIcon from '@mui/icons-material/Google';
const LoginUser = () => {
  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    setCurrentUser(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="google">
      <button onClick={logGoogleUser} className="casual"> <GoogleIcon/> Sign in with google</button>
      <button onClick={logGoogleUser} className="responsive"> <GoogleIcon/> </button>
    </div>
  );
};

export default LoginUser;