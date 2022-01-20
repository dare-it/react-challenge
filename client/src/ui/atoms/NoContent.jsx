import noContent from "../../assets/no_content.png"
import {styled} from '@mui/system';
import {Box} from '@mui/material';
import {theme} from "../../theme"

const StyledNoContentParagraph = styled('p')({
    color: `${theme.palette.text.secondary}`

})
export const NoContent = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <img src={noContent} alt="no content"/>
            <StyledNoContentParagraph>Brak danych do wyświetlenia</StyledNoContentParagraph>
        </Box>
    )
};
