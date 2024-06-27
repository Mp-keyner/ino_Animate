import { Stack, Typography } from '@mui/material'
import React from 'react'

const CardEstrategia = () => {
    return (
        <Stack
            bgcolor='#000'
            color='#FFF'
            padding='1rem'
            sx={{
                minWidth: {
                    xs: '21rem',
                    sm: '14rem'
                },
                height:{
                    xs: '100%',
                    sm: '20rem'
                }
            }}
        >
            <Typography
                sx={{
                    border: '1px solid blue',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                }}
            >
                Gestión de redes sociales 
            </Typography>
            <Typography
                sx={{
                    border: '1px solid blue',
                    fontSize: '0.9rem',
                    fontWeight: 200,
                }}
            >
                Generar engagement
            </Typography>
        </Stack>
    )
}

export default CardEstrategia
