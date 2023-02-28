import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./styles/auth-ui.css";
import isEmptyObject from "../../utils/isEmptyObject";
import Page from "../../components/Page.js"
import { useDispatch, useSelector } from "react-redux";
/*import { useLoginUserMutation } from "../../features/api/userApiService";*/
import { login } from "../../redux/actions/authAction";
import RenderFormikErrors from "../../components/errors/RenderFormikErrors";

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state ? location.state.from : "/";

  //const token = window.localStorage.getItem('token');
  /* const [loginUser, { data, isLoading, isSuccess, isError, error }] = useLoginUserMutation();
 */
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);



  //redux
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn)

  /* using formik */
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required."),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum."),
    }),

    onSubmit: async (credentials, { setSubmitting }) => {
      /* await loginUser(credentials); */
      dispatch(login(credentials))
      setSubmitting(false);
    },
  });



  //redirect to home if logged in
  /* if (loggedIn) {
    navigate(from)
  } */


  //redirect to home if logged in
  useEffect(() => {
    if (loggedIn) {
      navigate(from)
    }
    // eslint-disable-next-line
  }, [loggedIn])





  return (
    <Page title="Login" className="wrap-auth-ui">
      <form onSubmit={formik.handleSubmit}>
        <Box className="form-wrapper">
          <Typography component="div" className="auth-ui-title">
            <PersonOutlineOutlinedIcon />
            <Typography variant="h6" component="h6">
              LOGIN
            </Typography>
          </Typography>

          <TextField
            name="email"
            type="text"
            label="Email"
            placeholder="Your Email"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <TextField
            name="password"
            label="password"
            placeholder="password"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {
            //error messages
            formik.dirty ? <>
              {
                !formik.isValid ? <>
                  <RenderFormikErrors formik={formik} />
                </> : null
              }
            </> : null
          }


          <Button
            color="primary"
            variant="contained"
            disabled={!isEmptyObject(formik.errors)}
            type="submit"
            sx={{ backgroundColor: '#389BD9', py: 1.2, mt: 6, fontWeight: 700, fontSize: '1rem' }}

          >
            {formik.isSubmitting ? (
              <CircularProgress size={30} color="secondary" />
            ) : (
              'Login'
            )}
          </Button>
        </Box>
        <Typography align="center" sx={{ p: 2, fontSize: "1rem", color: '#979494' }}>
          Have you forgot your password?. Click on <Link to="/reset-password">Reset Password</Link> to reset your password.
        </Typography>
        <Typography align="center" sx={{ fontSize: "1rem", color: '#979494' }}>
          You don't have account yet?. Click on <Link to="/register">Create account</Link> to register.
        </Typography>
      </form>
    </Page>
  );
};

export default Login;
