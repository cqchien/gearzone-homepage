import React from "react";
import SignUp from "../container/SignUp";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignupPage = () => {
  return (
    <>
      <Header isScroll={false} />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignupPage;
