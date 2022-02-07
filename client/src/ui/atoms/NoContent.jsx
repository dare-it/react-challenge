import { Box } from '@mui/material';
import noContent from '../../assets/no_content.png'

export const NoContent = () => {
  return (
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 202,
          width: 202,
        }}
        alt="No content"
        src={noContent}
      />
      <Box sx={ (theme) => ({
        typography: 'body1',
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.greys.level4 })
      }>Brak danych do wyświetlenia</Box>
    </Box>
  )
};
