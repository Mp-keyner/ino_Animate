'use client'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface interfaceCardSectionGrid {
  name: string;
  height: string;
  width: string;
  img?: string;
  title?: string;
  sub_title?: string;
}

const CardSectionGrid = ({ name, height, width, title, sub_title, img }: interfaceCardSectionGrid): JSX.Element => {
  const [hover, setHover] = React.useState(false)


  return (
    <Stack
    className={name}
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
          xs: height == '620px' ? '-20px' : '0px',
          sm: '0px'
        },
        height: {
          xs: height == '560px' ? '133.33333vw' : '118.93333vw',
          sm: 'auto',
        },
        width: {
          xs: height == '620px' ? 'calc(100% + 34px)' : '100%',
          sm: 'auto',
        },
        padding: '2rem',
        position: 'relative',
        color: '#FFF',
        background: 'transparent',
        overflow: 'hidden'
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
      }} />
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




// 'use client'
// import { Box, Stack, Typography } from '@mui/material'
// import Image from 'next/image';
// import React from 'react'

// interface interfaceCardSectionGrid{
//     title?: string;
//     sub_title?: string;
//     img: string;
//     name?: string;
//   }

// const CardSectionGrid = ({sub_title, title, img, name}:interfaceCardSectionGrid):JSX.Element => {
//     const [hover, setHover] = React.useState(false)
//     return (
//         <Stack
//         position='relative'
//         padding='0.3rem'
//         className='container_Carta'
//         sx={{
//             gridArea: `${name}`,
//         }}
//         >
//             <Stack
//         className='carta'
//         onMouseEnter={() => {
//             console.log('El cursor está encima del elemento');
//             setHover(true)
//           }}
//           onMouseLeave={() => {
//             console.log('El cursor salió del elemento');
//             setHover(false)
//           }}
//             bgcolor='#000'
//             color='#FFF'
//             padding='1rem'
//             sx={{
//                 cursor: 'pointer',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 minWidth: {
//                     xs: '19rem',
//                     sm: '260px'
//                 },
//                 height:{
//                     xs: '27rem',
//                     sm: '380px'
//                 },
//                 scrollSnapAlign: 'center',
//                 position: 'relative',
//                 overflow: 'hidden',
//             }}
//         >
         
//                 <Image
//                     alt='npmbre'
//                     src={img}
//                     layout="fill"
//                     loading="lazy"
//                     objectFit="cover"
//                     style={{
//                         scale: hover ? 1.03 : 1,
//                         transition: 'all ease-in-out 0.5s'
//                     }}
//                 />
//            <Stack
//            position='absolute'
//            zIndex='1'
//            width='100%'
//            height='100%'
//            top={0}
//            left={0}
//            padding='1.5rem'
//            sx={{
//             backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.4))`,
//            }}
//            >
//            <Typography
//                 sx={{
//                     fontSize: '0.9rem',
//                     fontWeight: 800,
//                 }}
//             >
//                 {title}
//             </Typography>
//             <Typography
//                 sx={{
//                     fontSize: '0.9rem',
//                     fontWeight: 200,
//                 }}
//             >
//                 {sub_title}
//             </Typography>
//            </Stack>
//         </Stack>
//         <aside className='linea'></aside>
//         <aside className='linea1'></aside>
//         </Stack>
//     )
// }
// export default CardSectionGrid
