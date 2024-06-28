'use client'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface interfaceCardSectionGrid {
  name: string;
  height: string;
  img?: string;
  title?: string;
  sub_title?: string;
}

const CardSectionGrid = ({ name, height, title, sub_title, img }: interfaceCardSectionGrid): JSX.Element => {
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
      sx={{
        cursor: 'pointer',
        gridArea: `${name}`,
        marginLeft: {
          xs: height == '560px' ? '-20px' : '0px',
          sm: '0px'
        },
        height: {
          xs: height == '560px' ? '133.33333vw' : '118.93333vw',
          sm: height == '560px' ? '382px' : '353.66px',
          md: `${height}`
        },
        width: {
          xs: height == '560px' ? 'calc(100% + 34px)' : hover ? '205%' : '100%',
          sm: 'auto'
        },
        padding: '2rem',
        position: 'relative',
        color: '#FFF',
        background: 'transparent'
      }}>
      
        <Image
          alt='npmbre'
          //@ts-ignore
          src={img}
          layout="fill"
          loading="lazy"
          objectFit="cover"
        
        />
        <Box sx={{
          background: 'linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.1))',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0
        }}/>
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 800,
          position: 'absolute',
          zIndex: 2,
          width: {
            sx: '100%',
            sm: '15rem'
          },
        }}
      >
        {title}
        <span> | {sub_title}</span>
      </Typography>

    </Stack>
  )
}

export default CardSectionGrid
