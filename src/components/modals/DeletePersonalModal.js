import { Button, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePersonal } from '../../redux/actions/personalAction';

const DeletePersonalModal = ({ open, setOpen, personal, setSuccess }) => {
    const dispatch = useDispatch();

    const deleteItem = (id) =>{
        setSuccess(true)
        dispatch(deletePersonal(id))
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog color="danger">
                <ModalClose />
                <Typography sx={{ fontWeight: 600, fontSize: '1.4rem' }}>Delete Modal</Typography>
                <Typography>You are about to delete personal with title
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem', px: 1 }}>{personal?.title}</Typography> </Typography>
                <Button color="primary"variant="contained" sx={{
                        display: 'grid', justifyContent: 'center',
                        mx: 'auto', mt: 4, backgroundColor: '#f84242e6', border: 'red',
                        fontWeight: '600', fontSize: '1.35rem', color: 'white'
                    }} onClick={() => deleteItem(personal.id)}>Confirm</Button>
            </ModalDialog>
        </Modal>
    )
}

export default DeletePersonalModal