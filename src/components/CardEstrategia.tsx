'use client'
import { Stack, Typography } from '@mui/material'
import React from 'react'

interface interfaceCardEstrategia{
    title?: string;
    sub_title?: string;
    img: string;
  }

const CardEstrategia = ({sub_title, title, img}:interfaceCardEstrategia):JSX.Element => {
    const [hover, setHover] = React.useState(false)
    return (
        <Stack
        onMouseEnter={() => {
            console.log('El cursor está encima del elemento');
            setHover(true)
          }}
          onMouseLeave={() => {
            console.log('El cursor salió del elemento');
            setHover(false)
          }}
            bgcolor='#000'
            color='#FFF'
            padding='1rem'
            sx={{
                cursor: 'pointer',
                backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.4)), url(${img})`,
                width: hover ? '105%' : '100%',
                transition: 'all ease-in-out .1s',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minWidth: {
                    xs: '21rem',
                    sm: '300.25px'
                },
                height:{
                    xs: '100%',
                    sm: '400.33px'
                }
            }}
        >
            <Typography
                sx={{
                    fontSize: '0.9rem',
                    fontWeight: 800,
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontSize: '0.9rem',
                    fontWeight: 200,
                }}
            >
                {sub_title}
            </Typography>
        </Stack>
    )
}

export default CardEstrategia
