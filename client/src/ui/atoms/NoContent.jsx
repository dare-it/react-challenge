import { Box, Typography } from '@mui/material';
import noContent from '../../assets/no_content.png'

export const NoContent = () => {
  return (
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        component="img"
        sx={{
          height: 202,
          width: 202,
        }}
        alt=""
        src={noContent}
      />
      <Typography variant="body1" sx={ (theme) => ({
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.greys.level4 })
      }>Brak danych do wyświetlenia</Typography>
    </Box>
  )
};
