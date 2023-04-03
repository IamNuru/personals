import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/home.module.css'

const Connect = () => {
    return (
        <Box className={styles.wrap_connect}>
            <Box id="connect" className={styles.connect}>
                <Box className={styles.connect_left}>
                    <Typography variant="h1" sx={{ mb: '0.5rem', fontSize: '1.875rem', fontWeight: 'bold' }}>Connect with us</Typography>
                    <Typography>We would love to hear from you. Join the Direcharge tribe on any of our social media handles and feel free to reach out to us at:<br /><br />
                        <span>Email: <Link to="mailto:support@direcharge.com.ng">support@direcharge.com.ng</Link>
                        </span>
                    </Typography>
                </Box>
                <Box>
                    <Box className={styles.wrap_connect_icons}>
                        <Box className={styles.connect_icons}>
                            <Box sx={{ display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '0.5rem' }}>
                                <a href="https://twitter.com/direcharge" target="_blank" rel='noreferrer' style={{ width: '250px', padding: 0, margin: 0 }}>
                                    <img src="/static/twitter.png" alt="Twitter" style={{ width: '6rem', marginLeft: '-0.5rem', maxWidth:'100%' }} />
                                </a>
                                <a href="https://facebook.com/directrecharge" target="_blank" rel='noreferrer' style={{ width: '250px', padding: 0, margin: 0 }}>
                                    <img src="/static/facebook.png" alt="Twitter" style={{ width: '6rem', marginLeft: '0.5rem' }} />
                                </a>
                            </Box>
                            <Box sx={{ display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '0.5rem', marginTop: '1.5rem' }}>
                                <a href="https://instagram.com/direcharge" target="_blank" rel='noreferrer' style={{ width: '250px', padding: 0, margin: 0 }}>
                                    <img src="/static/instagram.png" alt="Twitter" style={{ width: '4rem', marginLeft: '-0.5rem', marginTop: '-0.5rem' }} />
                                </a>
                                <a href="https://linkedin.com/company/direcharge" target="_blank" rel='noreferrer' style={{ width: '250px', padding: 0, margin: 0 }}>
                                    <img src="/static/linkedin.png" alt="Twitter" style={{ width: '6rem', marginLeft: '1rem', marginTop: '-0.75rem' }} />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Connect