import { Button, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'
import { Box } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePersonal } from '../../redux/actions/personalAction';

const DeletePersonalModal = ({ open, setOpen, personal, setSuccess }) => {
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        setSuccess(true)
        dispatch(deletePersonal(id))
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog color="danger" sx={{maxWidth:500, width:{xs:'100%'}}}>
                <ModalClose />
                <Typography sx={{ fontWeight: 600, fontSize: '1.4rem' }}>Comfirm Delete Personal</Typography>
                <Typography>You are about to delete personal with title
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem', px: 1 }}>{personal?.title}</Typography> </Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Button color="danger" variant="contained" sx={{
                    display: 'grid', justifyContent: 'center',
                    mx: 'auto', mt: 4, backgroundColor: '#fddd94fc', border: 'red',
                    fontWeight: '600', fontSize: '1.35rem', color: 'white'
                }} onClick={() => setOpen(false)}>Cancel</Button>
                <Button color="primary" variant="contained" sx={{
                    display: 'grid', justifyContent: 'center',
                    mx: 'auto', mt: 4, backgroundColor: '#3ad7bae6', border: 'red',
                    fontWeight: '600', fontSize: '1.35rem', color: 'white'
                }} onClick={() => deleteItem(personal.id)}>Confirm</Button>
                </Box>
            </ModalDialog>
        </Modal>
    )
}

export default DeletePersonalModal