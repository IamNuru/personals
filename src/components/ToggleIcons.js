import { useState } from 'react';
import { Popover, Box, Tooltip } from '@mui/material';
import { ContentCopy, Delete, Share } from '@mui/icons-material';
import CustomizedSnackbar from './CustomizedSnackbar';
import EditPersonalModal from './modals/EditPersonalModal';
import DeletePersonalModal from './modals/DeletePersonalModal';
import SharePopover from './SharePopover';

const iconStyles = {
    width: '1.75em',
    color: 'rgb(55 55 56 / 58%)',
    height: '0.75em',
    fontSize: '2.5rem',
}

const ToggleIcons = ({ anchorEl, setAnchorEl, id, open, personal }) => {
    const [openEditPersonalModal, setOpenEditPersonalModal] = useState(false)
    const [openDeletePersonalModal, setOpenDeletePersonalModal] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [success, setSuccess] = useState(false)
    const [shareAnchorEl, setShareAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickShare = (event) => {
        setShareAnchorEl(event.currentTarget);
    };


    const handleOpenEditPersonalModal = () => {
        setOpenEditPersonalModal(true);
    }
    const handleOpenDeletePersonalModal = () => {
        setOpenDeletePersonalModal(true);
    }

    const sharePopoverOpen = Boolean(shareAnchorEl);
    const sharePopoverId = sharePopoverOpen ? 'simple-popover' : undefined;


    const handleCopyText = (event) => {
        navigator.clipboard.writeText(personal.content).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000);
        })
            .catch(() => alert('Failed to copy text'));
    }



    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={{
                    minHeight: 80, width: 80,
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', gap: 2.5, py: 2
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', pr: { xs: 0.5, sm: 4 } }}>
                        <Tooltip title="Edit">
                            <svg onClick={handleOpenEditPersonalModal} style={iconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" />
                            </svg>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Delete onClick={handleOpenDeletePersonalModal} sx={iconStyles} alt="Delete" />
                        </Tooltip>
                        <Tooltip title="Share">
                            <Share aria-describedby={sharePopoverId} onClick={handleClickShare} sx={iconStyles} />
                        </Tooltip>
                        <Tooltip title={!isCopied ? "Copy" : 'Copied'} variant='soft'>
                            <ContentCopy onClick={handleCopyText} sx={iconStyles} />
                        </Tooltip>
                    </Box>
                </Box>
            </Popover>
            <CustomizedSnackbar message="Text copied"
                open={isCopied}
                setOpen={setIsCopied}
                duration={5000}
                severity="success"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <EditPersonalModal open={openEditPersonalModal} setOpen={setOpenEditPersonalModal} personal={personal} />
            <DeletePersonalModal open={openDeletePersonalModal} setOpen={setOpenDeletePersonalModal} personal={personal} setSuccess={setSuccess} />
            <CustomizedSnackbar
                open={success}
                message="Personal deleted successfully"
                severity="warning" setOpen={setSuccess} />
            <SharePopover anchorEl={shareAnchorEl} setAnchorEl={setShareAnchorEl} id={sharePopoverId} open={sharePopoverOpen} />
        </div>
    );
}

export default ToggleIcons;