import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "state/api";

import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full Name required"),
  username: yup.string().required("Username required"),
  email: yup.string().email("invalid email").required("Email required"),
  otp: yup.string().required("Verification code required"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required("Password required"),
});

const initialValuesRegister = {
  fullName: "",
  username: "",
  email: "",
  otp: "",
  phone: "",
  password: "",
};

const Register = () => {
  const email = localStorage.getItem("email-reg");
  const [verifyUser] = useVerifyUserMutation();
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);

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
      const returned = await verifyUser(JSON.stringify(values))
        .unwrap()
        .then((fulfilled) => {
          console.log(fulfilled);
          localStorage.removeItem("email-reg");
          navigate("/login");
        });
      onSubmitProps.resetForm();
    } catch (error) {
      if (error) {
        console.log(error.data.message);
        toast.error(`${error.data.message} or OTP is Invalid or has expired`, {
          position: "bottom-right",
          autoClose: 9000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  return (
    <div className="register">
      <div className="register-header">
        <h5 className="login-title">Create your account</h5>
        <p className="description">Fill in your information</p>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesRegister}
        validationSchema={registerSchema}
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
              {/* <label htmlFor="name">Full Name</label> */}
              <TextField
                label="Full Name"
                multiline={true}
                rows={2}
                type="text"
                name="fullName"
                size="small"
                value={values.fullName}
                onBlur={handleBlur}
                error={Boolean(touched.fullName) && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form_input">
              {/* <label htmlFor="username">Username</label> */}
              <TextField
                label="Username"
                multiline={true}
                rows={2}
                size="small"
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
                error={Boolean(touched.username) && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </div>
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
              {/* <label htmlFor="phone">Phone Number</label> */}
              <TextField
                label="Phone Number"
                multiline={true}
                rows={2}
                size="small"
                type="tel"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                error={Boolean(touched.phone) && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
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

            {/* <div className="form-check">
              <input type="checkbox" name="terms" id="" />
              <p className="description">
                i agree to WealthGO's{" "}
                <span style={{ fontWeight: 600 }}>
                  {" "}
                  &nbsp; T & C & Privacy Policy
                </span>
              </p>
            </div> */}
            <FormControlLabel
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
            />
            <div className="login-btn">
              <button disabled={!terms} type="submit">Sign Up</button>
            </div>
            <p className="description">
              Already have an account?
              <span className="register">
                <Link to="/login">Log in</Link>
              </span>
            </p>
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

export default Register;

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const registerSchema = yup.object().shape({
//   fullName: yup.string().required("Full Name required"),
//   username: yup.string().required("Username required"),
//   email: yup.string().email("invalid email").required("Email required"),
//   otp: yup.string().required("Verification code required"),
//   phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
//   password: yup.string().required("Password required"),
// });

// const initialValuesRegister = {
//   fullName: "",
//   username: "",
//   email: "",
//   otp: "",
//   phone: "",
//   password: "",
// };

// const Register = () => {
//   const email = localStorage.getItem("email-reg");
//   const [verifyUser] = useVerifyUserMutation();
//   const navigate = useNavigate();
//   const [terms, setTerms] = useState(false);

//   const handleToast = () => {
//     toast.success("Otp sent to email", {
//       position: "bottom-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   useEffect(() => {
//     handleToast();
//   }, []);

//   const handleFormSubmit = async (values, onSubmitProps) => {
//     try {
//       const returned = await verifyUser(JSON.stringify(values))
//         .unwrap()
//         .then((fulfilled) => {
//           console.log(fulfilled);
//           localStorage.removeItem("email-reg");
//           navigate("/login");
//         });
//       onSubmitProps.resetForm();
//     } catch (error) {
//       if (error) {
//         console.log(error);
//         toast.error(`${error.data.error} or OTP is Invalid or has expired`, {
//           position: "bottom-right",
//           autoClose: 9000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       }
//     }
//   };
//   return (
//     <div className="register">
//       <div className="register-header">
//         <h5 className="login-title">Create your account</h5>
//         <p className="description">Fill in your information</p>
//       </div>
//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValuesRegister}
//         validationSchema={registerSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//           setFieldValue,
//           resetForm,
//         }) => (
//           <form className="register-form" onSubmit={handleSubmit}>
//             <div className="form_input">
//               {/* <label htmlFor="name">Full Name</label> */}
//               <TextField
//                 label="Full Name"
//                 multiline={true}
//                 rows={2}
//                 type="text"
//                 name="fullName"
//                 size="small"
//                 value={values.fullName}
//                 onBlur={handleBlur}
//                 error={Boolean(touched.fullName) && Boolean(errors.fullName)}
//                 helperText={touched.fullName && errors.fullName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form_input">
//               {/* <label htmlFor="username">Username</label> */}
//               <TextField
//                 label="Username"
//                 multiline={true}
//                 rows={2}
//                 size="small"
//                 type="text"
//                 name="username"
//                 onChange={handleChange}
//                 value={values.username}
//                 onBlur={handleBlur}
//                 error={Boolean(touched.username) && Boolean(errors.username)}
//                 helperText={touched.username && errors.username}
//               />
//             </div>
//             <div className="form_input">
//               {/* <label htmlFor="email">Email address</label> */}
//               <TextField
//                 label="Email"
//                 multiline={true}
//                 rows={2}
//                 size="small"
//                 type="email"
//                 name="email"
//                 value={values.email}
//                 onBlur={handleBlur}
//                 error={Boolean(touched.email) && Boolean(errors.email)}
//                 helperText={touched.email && errors.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form_input">
//               {/* <label htmlFor="otp">OTP</label> */}
//               <TextField
//                 label="Verification Code"
//                 multiline={true}
//                 rows={2}
//                 size="small"
//                 type="text"
//                 name="otp"
//                 value={values.otp}
//                 onBlur={handleBlur}
//                 error={Boolean(touched.otp) && Boolean(errors.otp)}
//                 helperText={touched.otp && errors.otp}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form_input">
//               {/* <label htmlFor="phone">Phone Number</label> */}
//               <TextField
//                 label="Phone Number"
//                 multiline={true}
//                 rows={2}
//                 size="small"
//                 type="tel"
//                 name="phone"
//                 value={values.phone}
//                 onBlur={handleBlur}
//                 error={Boolean(touched.phone) && Boolean(errors.phone)}
//                 helperText={touched.phone && errors.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form_input">
//               {/* <label htmlFor="password">Password</label> */}
//               <TextField
//                 label="Password"
//                 multiline={true}
//                 rows={2}
//                 size="small"
//                 type="password"
//                 name="password"
//                 value={values.password}
//                 onBlur={handleBlur}
//                 error={Boolean(touched.password) && Boolean(errors.password)}
//                 helperText={touched.password && errors.password}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* <div className="form-check">
//               <input type="checkbox" name="terms" id="" />
//               <p className="description">
//                 i agree to WealthGO's{" "}
//                 <span style={{ fontWeight: 600 }}>
//                   {" "}
//                   &nbsp; T & C & Privacy Policy
//                 </span>
//               </p>
//             </div> */}
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   color="success"
//                   checked={terms}
//                   onChange={() => {
//                     setTerms(!terms);
//                   }}
//                   name="terms"
//                 />
//               }
//               label="i agree to WealthGO's
//               T & C & Privacy Policy"
//             />
//             <div className="login-btn">
//               <button
//                 type="submit"
//                 style={{ cursor: "pointer" }}
//                 disabled={!terms}
//               >
//                 Sign Up
//               </button>
//             </div>
//             <p className="description">
//               Already have an account?
//               <span className="register">
//                 <Link to="/login">Log in</Link>
//               </span>
//             </p>
//           </form>
//         )}
//       </Formik>

//       <ToastContainer
//         position="bottom-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// };

// export default Register;