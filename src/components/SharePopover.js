import * as React from 'react';
import { Popover, Box } from '@mui/material';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const SharePopover = ({ anchorEl, setAnchorEl, id, open }) => {

    const shareUrl = 'http://github.com';
    const title = 'GitHub';


    const handleClose = () => {
        setAnchorEl(null);
    };



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
                    minHeight: 80, width: 300,
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', gap:2.5,
                }}>
                    <EmailShareButton quote={title} url={shareUrl} >
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <FacebookShareButton quote={title} url={shareUrl} >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <WhatsappShareButton quote={title} url={shareUrl}  separator=":: " >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <TwitterShareButton quote={title} url={shareUrl} >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                </Box>
            </Popover>
        </div>
    );
}

export default SharePopover;