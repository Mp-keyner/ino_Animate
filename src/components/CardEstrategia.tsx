'use client'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image';
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
                transition: 'all ease-in-out .1s',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minWidth: {
                    xs: '18rem',
                    sm: '300.25px'
                },
                height:{
                    xs: '27rem',
                    sm: '400.33px'
                },
                scrollSnapAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
         
                <Image
                    alt='npmbre'
                    src={img}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    style={{
                        scale: hover ? 1.1 : 1
                    }}
                />
           <Stack
           position='absolute'
           zIndex='1'
           width='100%'
           height='100%'
           top={0}
           left={0}
           padding='1rem'
           sx={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.4))`,
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
        </Stack>
    )
}

export default CardEstrategia
