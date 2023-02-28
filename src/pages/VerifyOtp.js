import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react18-input-otp';
import Page from '../components/Page'

import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import SecurityIcon from '@mui/icons-material/Security';

const VerifyOtp = () => {
    const [otpVal, setOtpVal] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setOtpVal(e)
        if (e.length > 5) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setSuccess(true)
            }, 3000);
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
      if(success){
        navigate('/')
      }
      
      //eslint-disable-next-line
    }, [success])
    


    return (
        <Page title="Verify otp">
            <style>{'#root { background-color: #1da7a7ea; height:100vh; }'}</style>
            <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <SecurityIcon sx={{
                        fontSize: 30, p: 1, color: '#1dadadea',
                        backgroundColor: 'white', borderRadius: '100%'
                    }} />
                    <Typography sx={{ fontSize: 18, mb: 4 }}>Verify Your OTP</Typography>
                    <OtpInput
                        containerStyle="verify-input-style"
                        value={otpVal}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span>-</span>}
                        isInputNum
                        shouldAutoFocus
                        isDisabled={loading}
                    />

                    {
                        loading ? <CircularProgress size={30}
                            sx={{ mt: 4, color: 'white' }} /> : ''
                    }
                </Box>
            </Box>
        </Page>
    )
}

export default VerifyOtp