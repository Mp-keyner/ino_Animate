import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Projects from './Projects'
import Image from 'next/image'
import CardEstrategia from './CardEstrategia'
import CardSectionGrid from './CardSectionGrid'
import { CardEstrategiaData, CardSectionGridData } from '../utils/Data'

const MainPages = (): JSX.Element => {
    return (
        <>
            <Stack
                alignItems='center'
                justifyContent='center'
                height='100vh'
                bgcolor='#000'
                position='relative'
                color='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    },
                    gap: {
                        xs: '4rem',
                        sm: '4rem',
                        lg: '6rem'
                    }
                }}
            >
                <Typography
                    sx={{
                        width: {
                            xs: '90%',
                            sm: '30rem',
                            lg: '46rem'
                        },
                        fontSize: {
                            xs: '2.5rem',
                            sm: '3.6rem',
                            lg: '80px'
                        },
                        fontWeight: 800,
                        lineHeight: {
                            xs: '2.7rem',
                            sm: '3.7rem',
                            lg: '5.7rem'
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
                bgcolor='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    },
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'flex-start'
                    }
                }}
            >
                <Box
                    position="relative"
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "calc(55vw)",
                        },
                        height: {
                            xs: "16rem",
                            sm: "25rem",
                        },
                    }}
                >
                    <Image
                        alt='npmbre'
                        src='/img/img_section1.1.jpg'
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
                        },
                        gap: '1rem'
                    }}
                >
                    <Typography
                        sx={{
                            width: {
                                xs: '90%',
                                sm: '32rem',
                            },
                            fontSize: {
                                xs: '2.5rem',
                                sm: '3rem',
                                lg: '55px'
                            },
                            fontWeight: 500,
                            lineHeight: {
                                xs: '2.7rem',
                                sm: '57.8px'
                            },
                            borderBottom: '7px solid #000',
                            paddingBottom: '1rem'
                        }}
                    >Tu aliado estratégico en el mundo digital
                    </Typography>
                    <Typography
                        sx={{
                            width: {
                                xs: '90%',
                                sm: '32rem'
                            },
                            fontSize: {
                                xs: '1rem',
                                sm: '20px'
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
                justifyContent='center'
                bgcolor='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    },
                    height: {
                        xs: '96vh',
                        sm: '70vh'
                    }
                }}
            >

                <Stack alignItems='center' gap='1rem' >
                    <Typography
                        sx={{
                            width: {
                                xs: '90%',
                                sm: '18rem'
                            },
                            fontSize: {
                                xs: '1.5rem',
                                sm: '2.5rem'
                            },
                            fontWeight: 800,
                            lineHeight: {
                                xs: '1.5rem',
                                sm: '3rem'
                            }
                        }}
                    >
                        Marketing digital estratégico
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '0.9rem',
                                sm:'1.5rem'
                            },
                            fontWeight: 300,
                            lineHeight: {
                                xs: '1rem',
                                sm: '2rem'
                            },
                            width: {
                                xs: '90%',
                                sm: '18rem'
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
                    }}>
                    {CardEstrategiaData.map((item, index) => (
                        <CardEstrategia
                            title={item.title}
                            sub_title={item.sub_title}
                            img={item.img}
                            key={index} />
                    ))}

                </Stack>

            </Stack>

            <Stack
                // bgcolor='#262'
                bgcolor='#000'
                color='#FFF'
                padding='1rem'
                gap='2rem'
                alignItems='center'
                justifyContent='center'
            >
                <Typography
                    sx={{
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2.4rem'
                        },
                        fontWeight: 800,
                        lineHeight: {
                            xs: '1.5rem',
                            sm: '2rem'
                        }
                    }}
                >
                    Nuestro Trabajo
                </Typography>


                <Stack
                    className='Container_Grid'
                    sx={{
                        width: {
                            sm:'75rem',
                            ls: '80rem'
                        }
                    }}
                >

                    {CardSectionGridData.map((item, index) => (
                        <CardSectionGrid
                            name={item.name}
                            height={item.height}
                            title={item.title}
                            sub_title={item.sub_title}
                            key={index}
                            img={item.img}
                        />))}
                </Stack>

                Paga para eliminar marca de agua -_-
            </Stack>

        </>
    )
}

export default MainPages
