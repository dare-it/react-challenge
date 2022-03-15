
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const MessageCard = ({ message, image }) => {

    if (!message) {
        return null;
    }

    return (
        <Box sx={{
            width: "100%",
            maxHeight: "100%",
            textAlign: "center",
        }}>
            {image && 
            <Container maxWidth="100%">
                <img src={image} alt="error"/>
            </Container>
            }
            <Typography variant="messageCaption">
                <Box>{message}</Box>
            </Typography>
        </Box>
    );
}

