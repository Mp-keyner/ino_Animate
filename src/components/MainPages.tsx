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
                gap='4rem'
                bgcolor='#000'
                position='relative'
                color='#FFF'
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
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
                            sm: "45rem",
                            lg: '49rem',
                            xl: '80rem'
                        },
                        height: {
                            xs: "16rem",
                            sm: "25rem",
                            lg: '32rem',
                            xl: '53rem'
                        },
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
                        },
                        gap: '1rem'
                    }}
                >
                    <Typography
                        sx={{
                            width: {
                                xs: '90%',
                                sm: '23rem',
                                md: '20rem',
                                lg: '25rem'
                            },
                            fontSize: {
                                xs: '2.5rem',
                                sm: '3rem',
                                lg: '55px'
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

                <Stack alignItems='center' gap='1rem'>
                    <Typography
                        sx={{
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
                            sm: 'scroll'
                        },
                        width: {
                            xs: '90%',
                            sm: '44pc'
                        },
                        height: {
                            xs: '30rem',
                            sm: 'auto'
                        },
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
                bgcolor='#000'
                color='#FFF'
                sx={{
                    padding: {
                        xs: '1rem',
                        sm: '5rem 12rem'
                    }
                }}
                gap='2rem'
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
