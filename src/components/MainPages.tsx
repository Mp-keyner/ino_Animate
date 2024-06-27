import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Projects from './Projects'
import Image from 'next/image'
import CardEstrategia from './CardEstrategia'

const MainPages = () => {
    return (
        <>
            <Stack
                alignItems='center'
                justifyContent='center'
                height='100vh'
                gap='4rem'
                bgcolor='#000'
                border='1px solid red'
                position='relative'
                color='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    }
                }}
            >
                <Typography
                    sx={{
                        border: '1px solid red',
                        width: {
                            xs: '90%',
                            sm: '30rem'
                        },
                        fontSize: {
                            xs: '2.5rem',
                            sm: '3.6rem'
                        },
                        fontWeight: 800,
                        lineHeight: {
                            xs: '2.7rem',
                            sm: '3.7rem'
                        }
                    }}
                >¿Necesitas impulsar tu presencia en línea y alcanzar a más clientes?
                </Typography>
                <Projects />
                <Image
                    alt='Flecha mirando abajo'
                    src='/img/Row.svg'
                    width={50}
                    height={50}
                    style={{
                        position: 'absolute',
                        bottom: 0
                    }}
                />
            </Stack>

            <Stack
                alignItems='center'
                height='100vh'
                gap='2rem'
                border='1px solid blue'
                bgcolor='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    justifyContent: {
                        xs: 'center',
                        sm: 'flex-start'
                    }
                }}
            >
                <Box
                    position="relative"
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "45rem",
                        },
                        height: {
                            xs: "16rem",
                            sm: "25rem",
                        },
                        border: '1px solid red'
                    }}
                >
                    <Image
                        alt='npmbre'
                        src='/img/img_Seccion1.jpg'
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                    />
                </Box>
                <Stack
                    sx={{
                        alignItems: {
                            xs: 'center',
                            sm: 'flex-start'
                        }
                    }}
                >
                    <Typography
                        sx={{
                            border: '1px solid red',
                            width: {
                                xs: '90%',
                                sm: '20rem'
                            },
                            fontSize: {
                                xs: '2.5rem',
                                sm: '3rem'
                            },
                            fontWeight: 500,
                            lineHeight: {
                                xs: '2.7rem',
                                sm: '3.2rem'
                            }
                        }}
                    >Tu aliado estratégico en el mundo digital
                    </Typography>
                    <Typography
                        sx={{
                            border: '1px solid red',
                            width: {
                                xs: '90%',
                                sm: '23rem'
                            },
                            fontSize: {
                                xs: '1rem',
                                sm: '1rem'
                            },
                            fontWeight: 300,

                        }}
                    >
                        Somos expertos en marketing digital, ofreciendo acompañamiento integral para alcanzar tus objetivos de negocio. Nuestro equipo altamente capacitado te proporcionará las herramientas y estrategias necesarias para destacar en el mundo digital.
                    </Typography>

                </Stack>
            </Stack>

            <Stack
                alignItems='center'
                gap='2rem'
                border='1px solid blue'
                justifyContent='center'
                bgcolor='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    height: {
                        xs: '96vh',
                        sm: '70vh'
                    }
                }}
            >

                <Stack alignItems='center' gap='1rem'>
                    <Typography
                        sx={{
                            border: '1px solid red',
                            width: {
                                xs: '90%',
                                sm: '10rem'
                            },
                            fontSize: {
                                xs: '1.5rem',
                                sm: '1.7rem'
                            },
                            fontWeight: 800,
                            lineHeight: {
                                xs: '1.5rem',
                                sm: '2rem'
                            }
                        }}
                    >
                        Marketing digital estratégico
                    </Typography>
                    <Typography
                        sx={{
                            border: '1px solid blue',
                            fontSize: '0.9rem',
                            fontWeight: 300,
                            lineHeight: {
                                xs: '1rem',
                                sm: '1rem'
                            },
                            width: {
                                xs: '90%',
                                sm: '10rem'
                            }
                        }}
                    >
                        Desarrollamos estrategias personalizadas para que tu marca tenga una presencia sólida y efectiva.
                    </Typography>
                </Stack>
                <Stack
                    gap='1rem'
                    sx={{
                        flexDirection: 'row',
                        overflowX: {
                            xs: 'scroll',
                            sm: 'hidden'
                        },
                        background: 'red',
                        width: {
                            xs: '90%',
                            sm: 'auto'
                        },
                        height: {
                            xs: '30rem',
                            sm: 'auto'
                        },
                    }}>
                    {[1, 2, 3].map(item => (<CardEstrategia key={item} />))}

                </Stack>

            </Stack>

            <Stack
                alignItems="center"
                gap="2rem"
                border="1px solid blue"
                justifyContent="center"
                bgcolor="#FFF"
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridTemplateAreas="a1 a1 b2 b2"
                sx={{
                    height: {
                        xs: '96vh',
                        sm: '70vh'
                    }
                }}
            >

            <Stack bgcolor='red' gridArea='a1'>
                hekhek
            </Stack>
            <Stack bgcolor='blue'>
                hekhek
            </Stack>
            </Stack>

        </>
    )
}

export default MainPages
