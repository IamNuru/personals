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

import styles from "./styles/auth_ui.module.css";
import isEmptyObject from "../../utils/isEmptyObject";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import Page from "../../components/Page";


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
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("UserName/Email field is required.")
        .matches(/^\S+$/, 'Invalid email or username')
        .min(2, "UserName must be more than 2 characters."),
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
    <Page title="Login" className={styles.wrap_auth_ui} sx={{mt:{xs:8, sm:10}}}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box className={styles.wrap_form}>
          <form onSubmit={formik.handleSubmit}>
            <Box className={styles.form_wrapper} sx={{mx:'auto'}}>
              <Typography component="div" className={styles.auth_ui_title}>
                <PersonOutlineOutlinedIcon />
                <Typography variant="h6" component="h6" className="header_font">
                  LOGIN
                </Typography>
              </Typography>

              <TextField
                name="userName"
                type="text"
                label={<label className="input_label_font">UserName/Email</label>}
                placeholder="Your username/email"
                variant="outlined"
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                error={formik.errors.userName ? true : false}
                helperText={formik.errors.userName ? formik.errors.userName : null}
                sx={{mb:2}}
              />

              <TextField
                name="password"
                label={<label className="input_label_font">Password</label>}
                placeholder="Password"
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
                sx={{ backgroundColor: '#389BD9', py: 1.2, mt: 3, fontWeight: 700, fontSize: '1rem' }}
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
  );
};

export default Login;
