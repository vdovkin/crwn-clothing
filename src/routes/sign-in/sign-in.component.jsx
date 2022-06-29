import { getRedirectResult } from "firebase/auth";

import {
  auth,
  sighInWithGoogleRedirect,
  sighInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await sighInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sigh in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
