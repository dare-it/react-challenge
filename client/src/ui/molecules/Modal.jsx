import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
  Modal as MuiModal,
  Stack,
  styled,
} from '@mui/material';
import * as PropTypes from 'prop-types';
import { Button } from 'ui';

const StyledCard = styled(MuiCard)(({ theme }) => ({
  boxShadow: theme.shadows[0],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minHeight: '200px',
  width: '90%',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const StyledCardActions = styled(CardActions)({
  padding: '0 0 0 0',
  justifyContent: 'flex-end',
});

const StyledCardHeader = styled(CardHeader)({
  margin: '0 0 0 0',
});

const StyledCardContent = styled(CardContent)({
  margin: '2.3rem 0',
});

// I use Mui <Modal /> component here but I wonder if
// <Dialog /> component wouldn't be another solution.
export const Modal = ({
  description,
  open,
  onClose,
  onSubmit,
  children,
  title,
  canSubmit = false,
}) => (
  <MuiModal open={open} onClose={onClose} aria-labelledby={description}>
    <StyledCard>
      <StyledCardHeader
        title={title}
        subheader={description}
        component={'h4'}
        titleTypographyProps={{
          fontWeight: '700',
          padding: 0,
          margin: 0,
          color: (theme) => theme.palette.common.black,
        }}
      />
      <StyledCardContent>{children}</StyledCardContent>
      <StyledCardActions>
        <Stack direction={'row'} spacing={2}>
          <Button text={'Anuluj'} onClick={onClose} variant={'outlined'} />
          <Button text={'Zapisz'} onClick={onSubmit} disabled={!canSubmit} />
        </Stack>
      </StyledCardActions>
    </StyledCard>
  </MuiModal>
);

Modal.propTypes = {
  canSubmit: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.element,
};
