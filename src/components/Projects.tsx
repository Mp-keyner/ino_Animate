import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProjectItem = () => {
    return (
        <Stack
        gap='0.6rem'
        sx={{
            flexDirection:{
                xs: 'column',
                sm: 'row'
            },
            alignItems:{
                xs: 'flex-start',
                sm: 'center'
            },
        }}
        >
            <Box
                position="relative"
                sx={{
                    width: {
                        xs: "5pc",
                        sm: "3pc",
                    },
                    height: {
                        xs: "5pc",
                        sm: "3pc",
                    },
                    background: 'blue'
                }}
            >
                <Image
                    alt='npmbre'
                    src='/img/Ino_Logo.svg'
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                />
            </Box>
            <Typography
                sx={{
                    border: '1px solid blue',
                    width: '10rem',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                }}
            >
                Kapital Life | Branding & Social Media
            </Typography>

        </Stack>
    )
}


const Projects = () => {
    return (
        <Stack
        gap='0.6rem'
            sx={{
                border: '1px solid red',
                width:{
                    xs: '90%',
                    sm: 'auto'
                },
            }}
        >
            <Typography
                sx={{
                    border: '1px solid blue',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                }}
            >
                Proyectos recientes
            </Typography>
            <Stack 
            gap='0.6rem'
            sx={{
                flexDirection:{
                    xs: 'row',
                    sm: 'column'
                },
                overflowX: {
                    xs: 'scroll',
                    sm: 'hidden'
                },
                background: 'red'
            }}>
            {[1,2,3,4].map(item =>(<ProjectItem key={item}/>))}
            </Stack>
        </Stack>
    )
}

export default Projects
