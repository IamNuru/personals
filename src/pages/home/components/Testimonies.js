import { Box, Typography } from '@mui/material'
import React from 'react'

const Testimonies = () => {
    return (
        <Box sx={{ mt: '2.5rem', backgroundColor:'#faecf8', py:4 }}>
            <Typography variant='h1' sx={{ fontSize: '1.875rem', fontWeight: 'bold', mb: '2rem', textAlign:'center' }}>Hear from people like <span style={{ color: '#912483' }}>you!</span></Typography>
        </Box>
    )
}

export default Testimonies