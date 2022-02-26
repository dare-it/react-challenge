import { React, useState, useRef, useEffect, forwardRef } from 'react';
import { ActionHeader, Button, Card, Page } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';
import { BudgetTableWidget } from 'ui/organisms/BudgetTable.widget';
import { AddNewBudgetRecordModal } from 'ui/organisms/AddNewBudgetRecord.modal';
import { Modal } from '@mui/material';

export const BudgetPage = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => console.log("submit")
  const modalRef = useRef();



  useEffect(() => {
    const checkIfOutsideClick = (event) => {
      // if (modalRef.current && !modalRef.current.contains(event.target)) {
      //   console.log(modalRef.current);
      //   console.log(modalRef.current?.contains(event.target))
      //   setOpen(false)
      // }

      const modalBox = document.querySelector(".css-y60v9i")
      if (open && !modalBox.contains(event.target)) {
        setOpen(false);
      }

    }

    document.addEventListener("mousedown", checkIfOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkIfOutsideClick)
    }
  },
  );

  const ForwardedModalRef = forwardRef((props, ref) => (

    <AddNewBudgetRecordModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      ref={modalRef}
    />

  )
  )

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button
                variant={'contained'}
                startIcon={<AddOutlinedIcon />}
                onClick={handleOpen}>
                Zdefiniuj budżet
              </Button>
            )}
          />
        }
      >
        <Modal
          open={open}
          ref={modalRef}
        >
          <ForwardedModalRef ref={modalRef} />

        </Modal>


        <Grid container>
          <Grid item xs={12}>
            <BudgetTableWidget />
          </Grid>
        </Grid>
      </Card>

    </Page>
  );
};
