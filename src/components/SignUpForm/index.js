import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "./signUpForm.scss";
import { Loop } from "@material-ui/icons";

const SignUpForm = ({ validationSchema, handleSignup, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(handleSignup)} autoComplete="false">
      <div className="container">
        <h3 className="form-title">Sign Up</h3>
        <br />
        <div className="form-container">
          <InputGroup className="form-inputGroup">
            <InputGroupText>
              <FaUserAlt />
            </InputGroupText>
            <input
              className="form-input"
              placeholder="Name"
              {...register("name")}
              disabled={loading}
            />
          </InputGroup>
          {errors.name && (
            <div className="alert alert-danger">{errors.name.message}</div>
          )}
          <InputGroup className="form-inputGroup">
            <InputGroupText>
              <MdEmail />
            </InputGroupText>
            <input
              className="form-input"
              placeholder="Email"
              {...register("email")}
              disabled={loading}
            />
          </InputGroup>
          {errors.email && (
            <div className="alert alert-danger">{errors.email.message}</div>
          )}
          <InputGroup className="form-inputGroup">
            <InputGroupText>
              <RiLockPasswordFill></RiLockPasswordFill>
            </InputGroupText>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              {...register("password")}
              disabled={loading}
            />
          </InputGroup>
          {errors.password && (
            <div className="alert alert-danger">{errors.password.message}</div>
          )}
          <div className="center">
            <Button type="submit" className="btn btn-form" active={!loading}>
              Sign Up
              {loading && <Loop className="ani-spin" />}
            </Button>
          </div>
          <p style={{ textAlign: "center" }}>
            <Link to="/forgotPassword">Forget Password </Link>
            Or
            <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
