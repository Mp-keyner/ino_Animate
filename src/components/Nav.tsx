import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Nav = () => {
    return (
        <Container>
            <Stack bgcolor='red' direction='row'>
            <Box
          position="relative"
          height="3rem"
          sx={{
            minWidth: {
              xs: "5pc",
              sm: "9pc",
            },
            background:'blue'
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
                <Typography>Hello desde aki</Typography>
            </Stack>
        </Container>
    )
}

export default Nav
