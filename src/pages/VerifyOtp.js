import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react18-input-otp';
import Page from '../components/Page'

import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import SecurityIcon from '@mui/icons-material/Security';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authAction';

const VerifyOtp = () => {
    const [otpVal, setOtpVal] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    //redux
    const user = useSelector(state => state.auth.user)
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setOtpVal(e)
        if (e.length > 3) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                dispatch(login(user))
            }, 3000);
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
      if(loggedIn){
        navigate('/')
      }
      
      //eslint-disable-next-line
    }, [loggedIn])
    


    return (
        <Page title="Verify otp">
            <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <SecurityIcon sx={{
                        fontSize: 30, p: 1, color: '#1dadadea',
                        backgroundColor: 'white', borderRadius: '100%'
                    }} />
                    <Typography sx={{ fontSize: 20, mb: 4, color:'#1dadadea', fontWeight:900 }}>Verify Your OTP</Typography>
                    <OtpInput
                        containerStyle="verify-input-style"
                        value={otpVal}
                        onChange={handleChange}
                        numInputs={4}
                        separator={<span>-</span>}
                        isInputNum
                        shouldAutoFocus
                        isDisabled={loading}
                    />

                    {
                        loading ? <CircularProgress size={30}
                            sx={{ mt: 4, color: '#1dadadea' }} /> : ''
                    }
                </Box>
            </Box>
        </Page>
    )
}

export default VerifyOtp