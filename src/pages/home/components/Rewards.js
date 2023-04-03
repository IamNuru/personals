import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../../styles/home.module.css'


const Rewards = () => {

    return (
        <Box className={styles.rewards_wrapper}>
            <Box className={styles.wrap_message}>
                <img alt="user" src="/static/user.png" className={styles.wrap_reward_message_image} />
                <Box className={styles.message_content}>
                    <Typography variant='h1' sx={{ color: '#F4F4F4', fontSize: '1.17em', fontWeight: 'bold' }}>Fund once,<br />
                        <Typography variant='span' sx={{ color: '#FAECF8', fontSize: '1.17em', fontWeight: 'bold', }}>then pay as you like.</Typography>
                    </Typography>
                    <Typography sx={{ marginTop: '0.5rem', color: '#F4F4F4' }}>
                        It's your personal wallet. Fund once, then pay bills like a boss. No irritating charges, no delays, no stories, only juicy cashbacks for using the Direcharge app.
                    </Typography>
                </Box>
            </Box>
            <Box className={styles.wrap_instant_reward}>
                <Box sx={{ textAlign: 'left', mr: { sm: '4.5rem' } }}>
                    <Typography variant='h1' sx={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
                        <Typography variant='span' sx={{ color: '#912483', fontWeight: 'bold', lineHeight: 1.625 }}>Instant rewards</Typography> <br />on every transaction
                    </Typography>
                    <Typography sx={{ mt: '1.5rem', mb:'2rem', color: '#191924' }}>We send real money to your Direcharge wallet Everytime you pay for services and utilities through the app.</Typography>
                    <Box sx={{ mt: '1.5rem' }}>
                        <Typography variant='span' className={styles.wrap_reward_svg}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="white" style={{ color: 'white' }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h20zm0-2H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4zm-7 8v2h4v-2h-4z"></path></g></svg>
                        </Typography>
                        <Typography variant='span'>Withdraw It</Typography>
                    </Box>
                    <Box sx={{ my: '1.5rem' }}>
                        <Typography variant='span' className={styles.wrap_reward_svg}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="white" style={{ color: 'white' }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                    </path>
                                </g>
                            </svg>
                        </Typography>
                        <Typography variant='span'>Send It</Typography>
                    </Box>
                    <Box sx={{ my: '1.5rem' }}>
                        <Typography variant='span' className={styles.wrap_reward_svg}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="white" style={{ color: 'white' }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
                                </g>
                            </svg>
                        </Typography>
                        <Typography variant='span'>Save It</Typography>
                    </Box>
                    <Box sx={{mt:'2rem'}}>
                        <Link style={{padding:'0 3px'}} to="https://play.google.com/store/apps/details?id=com.app.direcharge" target="_blank" className="css-11e3e6f">
                            <img alt="google play badge" src="/static/google-play-badge.png" style={{ width: '150px', height: '45px' }} />
                        </Link>
                        <Link style={{padding:'0 3px'}} to="https://apps.apple.com/app/direcharge/id1607516879" target="_blank">
                            <img alt="apple play store" src="/static/app-store-badge.png" style={{ width: '150px', height: '45px' }} />
                        </Link>
                    </Box>
                </Box>
                <img alt="user" src="/static/d-image-2.png" style={{ width: '100%' }} />
            </Box>
        </Box >
    )
}

export default Rewards;