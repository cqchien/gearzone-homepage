import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setMessage } from "../redux/reducers/message.reducer";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email can not empty")
    .email("Email has wrong format"),
  password: yup
    .string()
    .required("Password can not empty")
    .min(8, "Password must be 8 characters or more"),
});

const SignIn = () => {
  // state to set loading when call api
  const [loading, setLoading] = useState(false);

  const { email } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  // Check if user logged in, user cannot access register page
  if (email) {
    history.push("/");
  }

  const handleSignIn = async (account) => {
    dispatch(setLoading(true));
    const apiResponse = {};
    const success = apiResponse?.success;
    // create new user so status code = 201
    if (success) {
      const payloadSuccess = {
        message: "Login Successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));
      // Because 1000s for show message
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/";
      }, 1000);
    } else {
      dispatch(setMessage(apiResponse));
    }
    dispatch(setLoading(false));
  };

  return (
    <div>
      <SignInForm
        validationSchema={validationSchema}
        handleSignIn={handleSignIn}
        loading={loading}
      />
    </div>
  );
};

export default SignIn;
