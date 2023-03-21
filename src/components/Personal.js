import { useState } from 'react'
import { Box, Card, Typography } from '@mui/material'
import { Delete, Share, ContentCopy, MoreVert } from '@mui/icons-material'
import { Tooltip } from '@mui/joy'
import useWindowDimensions from '../hooks/useWindowsDimensions'

import "../styles/personalStyle.css"
import styles from "../styles/personal.module.css"
import EditPersonalModal from './modals/EditPersonalModal'
import DeletePersonalModal from './modals/DeletePersonalModal'
import CustomizedSnackbar from './CustomizedSnackbar'
import SharePopover from './SharePopover'
import ToggleIcons from './ToggleIcons'

const Personal = ({ personal }) => {
    const [openEditPersonalModal, setOpenEditPersonalModal] = useState(false)
    const [openDeletePersonalModal, setOpenDeletePersonalModal] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [success, setSuccess] = useState(false)
    const [shareAnchorEl, setShareAnchorEl] = useState(null);
    const [toggleIconsAnchorEl, setToggleIconsAnchorEl] = useState(null);

    const { width } = useWindowDimensions()


    const sharePopoverOpen = Boolean(shareAnchorEl);
    const sharePopoverId = sharePopoverOpen ? 'simple-popover' : undefined;

    const ToggleIconsOpen = Boolean(toggleIconsAnchorEl);
    const ToggleIconsId = ToggleIconsOpen ? 'simple-popover' : undefined;

    //redux
    //const dispatch = useDispatch();



    const handleClickShare = (event) => {
        setShareAnchorEl(event.currentTarget);
    };

    const handleClickToggleIcons = (event) => {
        setToggleIconsAnchorEl(event.currentTarget);
    };

    const handleOpenEditPersonalModal = () => {
        setOpenEditPersonalModal(true);
    }
    const handleOpenDeletePersonalModal = () => {
        setOpenDeletePersonalModal(true);
    }


    const handleCopyText = (event) => {
        navigator.clipboard.writeText(personal.content).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000);
        })
            .catch(() => alert('Failed to copy text'));
    }


    if (!personal) {
        return 'No personal'
    }
    return (
        <Box sx={{ mb: 4 }}>
            <label className='label'>{personal.title}</label>

            <Card sx={{
                minHeight: 30, py: 2, backgroundColor: '#daf9f672'
            }} elevation={3}>
                {
                    width < 600 &&
                    <Box sx={{ float: 'right' }}>
                        <Tooltip title="More">
                            <MoreVert aria-describedby={ToggleIconsId} onClick={handleClickToggleIcons} className={styles.personal_action_icon} sx={{ fontSize: '2.5rem !important' }} />
                        </Tooltip>
                    </Box>
                }
                <Box sx={{ pl: 1.7, mt: 1 }}>
                    <Typography variant='h6' sx={{ fontSize: '1.2rem', color: '#0d0c0c', lineHeight: '1.2rem' }}>{personal.content}</Typography>
                </Box>

                {
                    width > 600 &&
                    <Box sx={{ display: 'flex', gap: '0.85rem', float: 'right', pr: { xs: 0.5, sm: 4 } }}>
                        <Tooltip title="Edit">
                            <svg onClick={handleOpenEditPersonalModal} className={styles.personal_action_icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" />
                            </svg>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Delete onClick={handleOpenDeletePersonalModal} className={styles.personal_action_icon} alt="Delete" />
                        </Tooltip>
                        <Tooltip title="Share">
                            <Share aria-describedby={sharePopoverId} onClick={handleClickShare} className={styles.personal_action_icon} />
                        </Tooltip>
                        <Tooltip title={!isCopied ? "Copy" : 'Copied'} variant='soft'>
                            <ContentCopy onClick={handleCopyText} className={styles.personal_action_icon} />
                        </Tooltip>
                    </Box>
                }

            </Card>
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
            <ToggleIcons anchorEl={toggleIconsAnchorEl} setAnchorEl={setToggleIconsAnchorEl} id={ToggleIconsId} open={ToggleIconsOpen} personal={personal} />
        </Box>
    )
}

export default Personal;