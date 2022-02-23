import React from 'react';
import imageNoContent from '../../assets/no_content.png';
import { Box, Typography, Avatar } from '@mui/material';

const noContent = {
  src: imageNoContent,
  alt: 'my image',
  title: 'Brak danych do wyświetlenia',
};

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const avatarStyle = {
  width: '202px',
  height: '202px'
}

const typographyStyle = {
  color: 'rgba(51, 51, 51, 0.5)',
  opacity: "50%",
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '19.2px',
  lineHeight: '29px'
}

export const NoContent = () => {
  const { src, alt, title } = noContent;
  return (
    <Box id="budżet"  sx={boxStyle}>
      <Avatar sx={avatarStyle} src={src} alt={alt} variant="square"/>
      <Typography  sx={typographyStyle} > {title} </Typography>
    </Box>
  );
};
