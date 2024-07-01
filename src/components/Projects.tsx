import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Project {
    name: string;
    img: string;
    id: number;
}
interface ProjectItemInterfaces {
    name: string;
    img: string;
}

const DataProjects:Project[] = [
    {
        id: 0,
        name: 'Fomo Web',
        img: '/img/fomo_logo.svg'
    },
    {
        id: 1,
        name: 'Kapital Life | Branding & Social Media',
        img: '/img/fomo_logo.svg'
    },
    {
        id: 2,
        name: 'Fomo Web',
        img: '/img/fomo_logo.svg'
    },
    {
        id: 3,
        name: 'Fomo Web',
        img: '/img/fomo_logo.svg'
    },
]
const ProjectItem = ({img, name}:ProjectItemInterfaces):JSX.Element => {
    return (
        <Stack
        sx={{
            flexDirection:{
                xs: 'column',
                sm: 'row'
            },
            alignItems:{
                xs: 'flex-start',
                sm: 'center'
            },
            gap:{
                xs: '1rem',
                sm:'0.6rem',
                lg:'4rem'
            },
            minWidth:{
                xs: '9.5rem'
            }
        }}
        >
            <Box
                position="relative"
                sx={{
                    width: {
                        xs: "3pc",
                        sm: "3pc",
                    },
                    height: {
                        xs: "3pc",
                        sm: "3pc",
                    },
                    aspectRatio: 1
                }}
            >
                <Image
                    alt='npmbre'
                    src={img}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                />
            </Box>
            <Typography
                sx={{
                    width: {
                        xs: '100%',
                        sm: '15rem'
                    },
                    fontSize: {
                        sm:'0.9rem',
                        lg:'1.2rem'
                    },
                    fontWeight: 300,
                }}
            >
                {name}
            </Typography>

        </Stack>
    )
}


const Projects = ():JSX.Element => {
    return (
        <Stack
        gap='1.2rem'
            sx={{
                width:{
                    xs: '90%',
                    sm: 'auto',
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        sm: '0.9rem',
                        lg: '1.2rem',
                        
                    },
                    fontWeight: 800,
                }}
            >
                Proyectos recientes
            </Typography>
            <Stack 
            sx={{
                flexDirection:{
                    xs: 'row',
                    sm: 'column'
                },
                overflowX: {
                    xs: 'scroll',
                    sm: 'hidden'
                },
                gap:{
                    xs: '0.6rem',
                    sm: '0.6rem',
                    lg: '4rem'
                },
            }}>
            {DataProjects.map(item =>(<ProjectItem key={item.id} name={item.name} img={item.img}/>))}
            </Stack>
        </Stack>
    )
}

export default Projects
