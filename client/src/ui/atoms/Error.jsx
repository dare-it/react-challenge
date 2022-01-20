import {Box, Typography} from '@mui/material';
import errorIcon from "../../assets/unknown_error.png"
import {styled} from "@mui/system";
import {theme} from "../../theme";
const StyleErrorParagraph = styled('p')({
    color: `${theme.palette.text.secondary}`

})

export const Error = ({error}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            {
                error?.message?.includes('Network Error') ? (
                    <Typography>Uruchom Server!</Typography>
                ) : <> <img src={errorIcon} alt="error icon"/><StyleErrorParagraph>Wystąpił nieoczekiwany błąd</StyleErrorParagraph></>
            }
        </Box>
    );
};
