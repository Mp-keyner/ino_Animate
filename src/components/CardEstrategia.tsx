'use client'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface interfaceCardEstrategia{
    title?: string;
    sub_title?: string;
    img: string;
    name?: string;
  }

const CardEstrategia = ({sub_title, title, img, name}:interfaceCardEstrategia):JSX.Element => {
    const [hover, setHover] = React.useState(false)
    return (
        <Stack
        position='relative'
        padding='0.3rem'
        className='container_Carta'
        sx={{
            pointerEvents: 'none'
        }}
        >
            <Stack
        className='carta'
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
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minWidth: {
                    xs: '19rem',
                    sm: '260px'
                },
                height:{
                    xs: '27rem',
                    sm: '380px'
                },
                scrollSnapAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
         
                <Image
                    alt='npmbre'
                    src={img}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    style={{
                        scale: hover ? 1.03 : 1,
                        transition: 'all ease-in-out 0.5s'
                    }}
                />
           <Stack
           position='absolute'
           zIndex='1'
           width='100%'
           height='100%'
           top={0}
           left={0}
           padding='1.5rem'
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
        <aside className='linea'></aside>
        <aside className='linea1'></aside>
        </Stack>
    )
}
export default CardEstrategia
