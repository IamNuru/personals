import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useFormik } from "formik"
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import uuid from 'react-uuid';


import Page from "../components/Page";
import '../styles/personal-form.css'
import isEmptyObject from "../utils/isEmptyObject";


import { addPersonal } from "../redux/actions/personalAction";
import CustomizedSnackbar from "../components/CustomizedSnackbar";
import { useState } from "react";

const AddNewPersonal = () => {
    const [open, setOpen] = useState(false)

    //redux
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            title: '',
            content: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("The Title field is required.")
                .min(2, "The Title must be more than 2 characters.")
                .max(12, "The Title must not be more than 12 characters"),
            content: Yup.string()
                .required("The Content field is required.")
                .min(2, "The Content must be more than 2 characters.")
        }),
        onSubmit: async (item, { resetForm }) => {
            dispatch(addPersonal({ ...item, id: uuid() }));
            resetForm()
            setOpen(true)
        }
    })
    return (
        <Page title="Add New Personal" className="wrap-personal-form">
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                <Box className="form-wrapper" sx={{ margin: '0 auto' }}>
                    <Typography component="h6"
                        sx={{ my: 2, fontSize: '1.65rem', color: '#389BD9', textAlign: 'center' }}
                        className="personal-form-title">
                        Save Information
                    </Typography>

                    <TextField
                        name="title"
                        type="text"
                        label="Title"
                        placeholder="Personal Title"
                        variant="outlined"
                        size="small"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        inputProps={{ maxLength: 12 }}
                    />

                    <TextField
                        name="content"
                        label="content"
                        placeholder="personal content"
                        variant="outlined"
                        multiline
                        rows={3}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        disabled={!isEmptyObject(formik.errors) || formik.isSubmitting}
                        type="submit"
                        sx={{ backgroundColor: '#389BD9', py: 1.2, mt: 6, fontWeight: 700, fontSize: '1rem' }}
                    >
                        {formik.isSubmitting ? (
                            <CircularProgress size={30} color="secondary" />
                        ) : (
                            'Save'
                        )}
                    </Button>
                    <CustomizedSnackbar message="Personal Added Successfully" open={open} setOpen={setOpen} duration={5000} severity="success" />

                </Box>
            </form>
        </Page>
    )
}

export default AddNewPersonal