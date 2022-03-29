import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Grid } from '@mui/material';
import { useLedgersModal } from 'hooks';
import { ActionHeader, Button, ButtonGroup, Card, LedgerTableWidget } from 'ui';

import { AddNewLedgerRecordModal } from './AddNewLedgerRecord.modal';

const PayInButton = ({ handleClick }) => (
  <Button
    text={'Wpłać'}
    variant={'outlined'}
    startIcon={<AddRoundedIcon />}
    onClick={() => handleClick('INCOME')}
  />
);

const PayOutButton = ({ handleClick }) => (
  <Button
    text={'Wypłać'}
    variant={'outlined'}
    startIcon={<RemoveRoundedIcon />}
    onClick={() => handleClick('EXPENSE')}
  />
);

export const LedgerWidget = () => {
  const { open, modalType, handleClickOpen, handleClose } = useLedgersModal();

  return (
    <>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Portfel"
            renderActions={() => (
              <ButtonGroup>
                <>
                  <PayInButton handleClick={handleClickOpen} />
                  <PayOutButton handleClick={handleClickOpen} />
                </>
              </ButtonGroup>
            )}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <LedgerTableWidget />
          </Grid>
        </Grid>
      </Card>
      <AddNewLedgerRecordModal
        open={open}
        onClose={handleClose}
        type={modalType}
      />
    </>
  );
};
