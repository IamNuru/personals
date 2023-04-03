import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../../../styles/home.module.css'

const HeaderSection = () => {
    return (
        <Box sx={{ backgroundColor: '#faecf8', mt: '-1.8rem', pt: 8, pb: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h1'>
                    <Typography variant='h1' className='oswald'
                        sx={{ textAlign: 'center', fontWeight: 900, fontSize: '3rem', color: '#171720' }}>
                        Save Your secrete info in</Typography>
                    <Typography variant='h1' className='oswald'
                        sx={{ textAlign: 'center', fontWeight: 800, fontSize: '2.8rem', color: '#191924' }}>
                        <Typography variant='span' sx={{ color: '#12c2c6' }}>One</Typography> place</Typography>
                </Typography>
                <Typography className='inconsolata' sx={{ mt: '2.5rem' }}>
                    <span>Direcharge rewards you with cashbacks when</span><br />
                    <span>you make payments for services and utilities.</span>
                </Typography>
                <Box className={styles.header_section_image_wrapper}>
                    <img className={styles.header_section_image} src='/static/app-preview.png' alt='personals logo' />
                </Box>
                <Typography variant='h2' sx={{ mt: '3rem', fontSize: '36px' }}>
                    Get more value for your <Typography variant='span' sx={{ color: '#12c2c6' }}>money!</Typography>
                </Typography>
                <Typography sx={{ px: '2rem' }}>
                    Enjoy amazing cashbacks when you pay for services through
                    the Direcharge app.
                </Typography>
                <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Link to="https://play.google.com/store/apps/details?id=com.app.direcharge">
                        <img alt="google store badge" src="/static/google-play-badge.png" style={{ width: '120px', height: '40px', marginRight: '1rem' }} />
                    </Link>
                    <Link to="https://apps.apple.com/app/direcharge/id1607516879">
                        <img alt="apple store badge" src="/static/app-store-badge.png" style={{ width: '120px', height: '40px' }} />
                    </Link>
                </Box>
                <Box className={styles.wrap_values} sx={{mx:3, mt:4}}>
                    <Box className={styles.values_wrapper}>
                        <Box className={styles.value}>
                            <span className={styles.value_span_1}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </g>
                            </svg>
                            </span>
                            <Box sx={{lineHeight:1.7}}>
                                <span className={styles.value_span_title_1}>Buy</span>
                                <span className={styles.value_span_title_2}>Airtime</span>
                            </Box>
                        </Box>
                        <Box className={styles.value}>
                            <span className={styles.value_span_1}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g><path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8v-3zm0 7a4 4 0 0 1 4 4H3v-4z"></path>
                                </g>
                            </svg>
                            </span>
                            <Box sx={{lineHeight:1.7}}><span className={styles.value_span_title_1}>Buy</span>
                                <span className={styles.value_span_title_1}>Data</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles.values_wrapper}>
                        <Box className={styles.value}><span className={styles.value_span_1}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <g><path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M11 18H7.941c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H13v-5h-2v5zm5 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8z"></path>
                                </g>
                            </svg>
                        </span>
                            <Box sx={{lineHeight:1.7}}><span className={styles.value_span_title_1}>Buy</span><span className="css-1qemmfx">Electricity</span>
                            </Box>
                        </Box>
                        <Box className={styles.value}>
                            <span className={styles.value_span_1}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M8 2v20H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h4zm12.005 0C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H10V2h10.005z"></path></g>
                                </svg>
                            </span><Box sx={{lineHeight:1.7}}><span className={styles.value_span_title_1}>Buy</span><span className="css-1qemmfx">WAEC Pin</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles.values_wrapper}>
                        <Box className={styles.value}>
                            <span className={styles.value_span_1}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414L15.414 5z"></path>
                                    </g>
                                </svg>
                            </span>
                            <Box sx={{lineHeight:1.7}}><span className={styles.value_span_title_1}>Buy</span><span className="css-1qemmfx">Cable TV</span>
                            </Box>
                        </Box>
                        <Box className={styles.value}><span className={styles.value_span_1}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g><path fill="none" d="M0 0h24v24H0z">
                                </path><path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"></path>
                                </g>
                            </svg> </span><Box sx={{lineHeight:1.7}}><span className={styles.value_span_title_1}>And</span><span className="css-1qemmfx">Loads More.
                            </span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderSection