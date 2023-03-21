import { lazy, Suspense, useEffect, useState } from "react";
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

import styles from "./styles/auth_ui.module.css";
import isEmptyObject from "../../utils/isEmptyObject";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";


const Login = () => {
  const Page = lazy(() => import('../../components/Page'))

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
      email: Yup.string().email('Email must be a valid email').required("Email is required."),
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
    <Suspense fallback={'loading'}>
    <Page title="Login" className={styles.wrap_auth_ui}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box className={styles.wrap_form}>
          <form onSubmit={formik.handleSubmit}>
            <Box className={styles.form_wrapper}>
              <Typography component="div" className={styles.auth_ui_title}>
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
                error={formik.errors.email ? true : false}
                helperText={formik.errors.email ? formik.errors.email : null}
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
                error={formik.errors.password ? true : false}
                helperText={formik.errors.password ? formik.errors.password : null}
              />



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
              <Typography align="center" sx={{ p: 2, fontSize: "1rem", color: '#434343' }}>
                Have you forgot your password?. Click on <Link to="/reset-password">Reset Password</Link> to reset your password.
              </Typography>
              <Typography align="center" sx={{ fontSize: "1rem", color: '#434343' }}>
                You don't have account yet?. Click on <Link to="/register">Create account</Link> to register.
              </Typography>
            </Box>
          </form>
        </Box>
        <Box className={styles.wrap_image}>
          <Box
            component="img"
            src="/static/personals.avif"
            sx={{ height: '100%', mx: 'auto', width: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
    </Page>
    </Suspense>
  );
};

export default Login;
