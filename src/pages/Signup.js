import React from "react";
import SignUp from "../container/SignUp";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignupPage = () => {
  return (
    <>
      <Header isScroll={false} />
      <div style={{ height: "64.5vh" }}>
        <div className="transform-center" style={{top: "40%", width: "50vh" }}>
          <SignUp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
