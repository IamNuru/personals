import { Box, Typography, Card, CardHeader, CardContent, Avatar } from '@mui/material'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { testimonies } from '../../../config';


const Testimonies = () => {
    return (
        <Box sx={{ mt: '2.5rem', backgroundColor: '#faecf8', py: 4 }}>
            <style>
                {
                    `.MuiCardHeader-content{
                        flex:none !important
                    }`
                }
            </style>
            <Typography variant='h1' sx={{ fontSize: '1.875rem', fontWeight: 'bold', mb: '2rem', textAlign: 'center' }}>Hear from people like <span style={{ color: '#912483' }}>you!</span></Typography>
            <Box>
                <Carousel showArrows showThumbs={false} autoPlay infiniteLoop showStatus={false} >
                    {
                        testimonies?.map((testimony) => {
                            return <Box key={testimony.id} style={{ padding: 15, }}>
                                <Box className="testimony-card" sx={{ mx: { xs: 2, sm: 8, md: 12 } }}>
                                    <Card sx={{ py: 8, px: { xs: 2, sm: 8, md: 12 } }} elevation={0}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ backgroundColor: '#ed4f4f' }} aria-label="testimony">
                                                    {testimony.username.charAt(0).toUpperCase()}
                                                </Avatar>
                                            }
                                            title={<Typography variant='h2' sx={{ fontWeight: '600', fontSize: '1.2rem', textAlign: 'left', color: '#656161' }}>{testimony?.username}</Typography>}
                                            subheader={testimony?.company}

                                        />
                                        <CardContent sx={{ display: 'flex' }}>
                                            <svg stroke="currentColor" fill="currentColor"
                                                strokeWidth="0" viewBox="0 0 24 24" height="40" width="90"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ color: 'rgb(36, 96, 145)' }}>
                                                <g><path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                                                </g>
                                            </svg>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, fontSize: '1.5rem' }}>
                                                {
                                                    testimony?.message
                                                }
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Box>
                        })
                    }

                </Carousel>
            </Box>
        </Box>
    )
}

export default Testimonies