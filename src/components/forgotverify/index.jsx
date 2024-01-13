import React, { useEffect } from "react";
import "./index.css";
// import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForgotVerifyMutation } from "state/api";

import { Formik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const VerifySchema = yup.object().shape({
  email: yup.string().email("invalid email").required("Email required"),
  otp: yup.string().required("Verification code required"),
  password: yup.string().required("Password required"),
});

const initialValuesForgetVerify = {
  email: "",
  otp: "",
  password: "",
};

const ForgotVerify = () => {
  const email = localStorage.getItem("email-reg");
  const [forgotVerify] = useForgotVerifyMutation();
  const navigate = useNavigate();

  const handleToast = () => {
    toast.success("Otp sent to email", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    handleToast();
  }, []);

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      await forgotVerify(JSON.stringify(values))
        .unwrap()
        .then((fulfilled) => {
          console.log(fulfilled);
          localStorage.removeItem("email-reg");
          navigate("/login");
        });
    } catch (error) {}
    onSubmitProps.resetForm();
  };
  return (
    <div className="register">
      <div className="register-header">
        <h5 className="login-title">Update your Password</h5>
        <p className="description">Fill in your information</p>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesForgetVerify}
        validationSchema={VerifySchema}
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
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form_input">
              {/* <label htmlFor="email">Email address</label> */}
              <TextField
                label="Email"
                multiline={true}
                rows={2}
                size="small"
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onChange={handleChange}
              />
            </div>
            <div className="form_input">
              {/* <label htmlFor="otp">OTP</label> */}
              <TextField
                label="Verification Code"
                multiline={true}
                rows={2}
                size="small"
                type="text"
                name="otp"
                value={values.otp}
                onBlur={handleBlur}
                error={Boolean(touched.otp) && Boolean(errors.otp)}
                helperText={touched.otp && errors.otp}
                onChange={handleChange}
              />
            </div>
            <div className="form_input">
              {/* <label htmlFor="password">Password</label> */}
              <TextField
                label="Password"
                multiline={true}
                rows={2}
                size="small"
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onChange={handleChange}
              />
            </div>
            {/* <FormControlLabel
              control={
                <Checkbox
                  color="success"
                  checked={terms}
                  onChange={() => {
                    setTerms(!terms);
                  }}
                  name="terms"
                />
              }
              label="i agree to WealthGO's
              T & C & Privacy Policy"
            /> */}
            <div className="login-btn">
              <button type="submit">Update Password</button>
            </div>
          </form>
        )}
      </Formik>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ForgotVerify;