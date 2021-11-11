import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ROUTES } from "../constant/routePath";
import { setMessage } from "../redux/reducers/message.reducer";
import { signUpUser } from "../apis/account";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name can not empty"),
  email: yup
    .string()
    .required("Email can not empty")
    .email("Email has wrong format"),
  password: yup
    .string()
    .required("Password can not empty")
    .min(8, "Password must be 8 characters or more"),
});

const SignUp = () => {
  // state to set loading when call api
  const [loading, setLoading] = useState(false);

  const { email } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  // Check if user logged in, user cannot access register page
  if (email) {
    history.push("/");
  }

  const handleSignUp = async (account) => {
    setLoading(true);
    const apiResponse = await signUpUser(account);
    const success = apiResponse?.success;
    // create new user so status code = 201
    if (success) {
      const payloadSuccess = {
        message: "Register Successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));
      // Because 1000s for show message
      setTimeout(() => {
        setLoading(false);
        history.push(ROUTES.SIGNIN);
      }, 1000);
    } else {
      dispatch(setMessage(apiResponse));
    }
    setLoading(false);
  };

  return (
    <div>
      <SignUpForm
        validationSchema={validationSchema}
        handleSignUp={handleSignUp}
        loading={loading}
      />
    </div>
  );
};

export default SignUp;
