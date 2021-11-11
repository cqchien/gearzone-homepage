import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { formStyle } from "../formStyle";
import TextFieldCustom from "../UI/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loop, Visibility, VisibilityOff } from "@material-ui/icons";
import { useEffect, useState } from "react";

const useStyle = makeStyles(formStyle);

function SignInForm({ validationSchema, handleSignIn, loading }) {
  const classes = useStyle();

  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through the Proxy
    // errors: 	An  object with field errors to retrieve error message easily.
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  // Reset field after submit successfully
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  // Change state to view password
  const [isVisiblePass, changeVisiblePass] = useState(false);

  return (
    <form
      className={`${classes.root} flex-col`}
      autoComplete="off"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Sign In</h1>
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Email"
          size="small"
          placeholder="Input email"
          error={Boolean(errors.email)}
          disabled={loading}
          inputProps={{
            ...register("email"),
          }}
          helperText={errors.email?.message}
        />
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Password"
          size="small"
          placeholder="Input Password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          disabled={loading}
          inputProps={{
            ...register("password"),
            type: isVisiblePass ? "text" : "password",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => changeVisiblePass(!isVisiblePass)}>
                {isVisiblePass ? (
                  <Visibility className={`${classes.icon}`} />
                ) : (
                  <VisibilityOff className={`${classes.icon}`} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <Button
        className="_btn _btn-primary"
        type="submit"
        size="large"
        disabled={loading}
        //Element placed after the children.
        endIcon={loading && <Loop className="ani-spin" />}
      >
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
