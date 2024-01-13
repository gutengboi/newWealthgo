import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { useAdminLoginMutation } from "state/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "state";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
  const [loginAdminUser] = useAdminLoginMutation();

  //   useEffect(() => {
  //     if (user) {
  //       console.log(user);
  //       // navigate("/dashboard");
  //       window.location.href = "http://localhost:3000/dashboard";
  //     }
  //   }, [user, navigate]);

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      await loginAdminUser(JSON.stringify(values))
        .unwrap()
        .then((fulfilled) => {
          console.log(fulfilled);
          if (fulfilled)
            dispatch(
              setLogin({
                user: fulfilled.user,
                token: fulfilled.token,
              })
            );
            window.location.href = "https://wealth-go.org/admin-dashboard";
          // window.location.href = "https://wealth-go-gutengboi.vercel.app/admin-dashboard";
          // window.location.href = "https://wealth-go.vercel.app/admin-dashboard";
        });
    } catch (error) {
      console.log(error.message);
    }
    onSubmitProps.resetForm();
  };

  return (
    <div className="login">
      <div className="login-header">
        <h5 className="login-title">Admin Login</h5>
        <p className="description">Enter your credentials below to continue</p>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form_input">
              {/* <label htmlFor="email">Email address</label> */}
              <TextField
                label="email address"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                variant="outlined"
              />
            </div>
            <div className="form_input">
              {/* <label htmlFor="password">Password</label> */}
              <TextField
                label="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                // sx={{ height: "40px" }}
                variant="outlined"
              />
            </div>
            <div className="login-btn">
              <button type="submit">Log In</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AdminLogin;
