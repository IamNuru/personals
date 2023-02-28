import React from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { Box, CircularProgress, TextField, Button } from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup'

import isEmptyObject from '../../utils/isEmptyObject';

import '../../styles/personal-form.css'
import { useDispatch } from 'react-redux';
import { updatePersonal } from '../../redux/actions/personalAction';
import RenderFormikErrors from '../errors/RenderFormikErrors';
//import { useNavigate } from 'react-router-dom';

const EditPersonalModal = ({ open, setOpen, personal }) => {

    //redux
    const dispatch = useDispatch();

    //const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            title: personal ? personal?.title : '',
            content: personal ? personal?.content : '',
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
            dispatch(updatePersonal({ ...item, id: personal.id }))
            resetForm()
            setOpen(false)
        }
    })

    return (
        <React.Fragment>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="edit-personal-modal"
                    aria-describedby="edit-the-personal-modal"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography component="h6"
                        sx={{ mt: 2, mb:4, fontSize: '1.65rem', color: '#389BD9', textAlign: 'center' }}
                        className="personal-form-title">
                        Update Information
                    </Typography>

                    <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                        <Box className="form-wrapper" sx={{ margin: '0 auto', padding: 0, border: 0 }}>
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
                                variant="contained"
                                disabled={!isEmptyObject(formik.errors)}
                                type="submit"
                                sx={{ backgroundColor: '#389BD9', color: 'white', fontSize: '1.2rem', fontWeight: 600, py: 1.2, mt: 6 }}

                            >
                                {formik.isSubmitting ? (
                                    <CircularProgress size={30} color="secondary" />
                                ) : (
                                    'Save'
                                )}
                            </Button>
                        </Box>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}

export default EditPersonalModal;