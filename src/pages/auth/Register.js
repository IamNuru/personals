import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./styles/auth-ui.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import isEmptyObject from "../../utils/isEmptyObject";
import Page from "../../components/Page.js"
/* import RenderServerErrorMessage from '../../components/RenderServerErrorMessage';
 */

/* import { useIsTabletScreen } from "../../hooks/useMediaScreens"; */
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../redux/actions/authAction";
/* import { authActions } from "../../redux/slices/authSlice";
import { useRegisterUserMutation } from "../../features/api/userApiService"; */


const Register = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state ? location.state.from : "/";

  /* const token = window.localStorage.getItem('token');
  const [registerUser, { isLoading, isSuccess, data, isError, error }] = useRegisterUserMutation();
  const authState = useSelector((state) => state.auth) */


  //redux
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn)

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const [type, setType] = useState(false)
  const handleCheck = e => setType(!type)




  /* using formik */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required.")
        .min(2, "First Name must be more than 2 characters."),
      lastName: Yup.string().min(
        2,
        "Last Name must be more than 2 characters."
      ),
      email: Yup.string().email().required("Email is required."),
      phoneNumber: Yup.string()
        .min(9, 'Phone Number should not be less than 9')
        .max(16, 'Phone Number should not be more than 16')
        .matches(phoneRegExp, 'Phone number is not valid'),
      password: Yup.string()
        .required("Password is Required.")
        .min(6, "Password is too short - should be 6 chars minimum."),
    }),

    onSubmit: async (credentials, { setSubmitting }) => {
      dispatch(register(credentials))
      setSubmitting(false);
    },
  });


  //redirect to home if logged in
  if (loggedIn) {
    navigate(from)
  }


  //redirect to home if logged in
  /* useEffect(() => {
    if(token){
      navigate(from)
    }

    // eslint-disable-next-line
  }, []) */



  //redirect to home if logged in
   useEffect(() => {
     if (formik.isValid && loggedIn) {
       navigate('/verify')
     }
     // eslint-disable-next-line
   }, [formik.isValid, loggedIn])



  return (
    <Page title="Create an Account" className="wrap-auth-ui">
      {/* <SnackBar message="Successfully Register. redirecting..." open={authState.isAuthenticated ? true : false} /> */}
      <form onSubmit={formik.handleSubmit}>
        <Box className="form-wrapper">
          <Typography component="div" className="auth-ui-title">
            <PersonOutlineOutlinedIcon />
            <Typography variant="h6" component="h6">
              REGISTER
            </Typography>
          </Typography>

          <Grid container spacing={3.5}>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="LastName (optional)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </Grid>
            </Grid>


            <Grid container item spacing={1}>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 600 }}>Login Credentials</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="youremail@email.com"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  size="small"
                  fullWidth
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
              </Grid>
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            disabled={!isEmptyObject(formik.errors)}
            type="submit"
            sx={{ backgroundColor: '#389BD9', py: 1.2, mt: 6, fontWeight: 700, fontSize: '1rem' }}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={30} color="primary" />
            ) : (
              "Register"
            )}
          </Button>
        </Box>
        <Typography
          align="center"
          sx={{ p: 4, fontSize: "1rem", color: "#979494" }}
        >
          Already have an account?. Click on <Link to="/login">Login</Link> to
          log into you account.
        </Typography>
      </form>
    </Page>
  );
};

export default Register;