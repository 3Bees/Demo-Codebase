import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/reducers/auth";
import constants from "../../../config/constants";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import UI from "../UI/UI";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username required!"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(authActions.toggleLogInHandler("true"));
      navigate("/", { replace: true });
    },
  });

  const fields = [
    {
      id: "username",
      props: {
        name: "username",
        label: "Username",
        type: "text",
        fullWidth: true,
        value: formik.values.username,
        error: formik.touched.username && Boolean(formik.errors.username),
        helperText: formik.touched.username && formik.errors.username,
        onChange: (e) => {
          formik.handleChange(e);
        },
      },
    },
    {
      id: "password",
      props: {
        name: "password",
        label: "Password",
        type: "password",
        fullWidth: true,
        value: formik.values.password,
        error: formik.touched.password && Boolean(formik.errors.password),
        helperText: formik.touched.password && formik.errors.password,
        onChange: (e) => {
          formik.handleChange(e);
        },
      },
    },
  ];

  const alternate = (
    <>
      <p>
        Dont have an ID? Click <Link to="/signup">here</Link> to sign up!
      </p>
    </>
  );
  return (
    <form onSubmit={formik.handleSubmit}>
      <UI
        fields={fields}
        title={constants.log_in}
        actionLabel={constants.log_in}
        alternate={alternate}
      />
    </form>
  );
};

export default Login;
