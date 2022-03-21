import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal } from 'ui/molecules/Modal';
import { ModalForm } from 'ui/molecules/ModalForm';
import { Select } from 'ui/atoms/Select';
import TextField from '@mui/material/TextField';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import FormField from 'ui/molecules/FormField';
import { FormControl, FormHelperText, useFormControl } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

export const AddNewLedgerRecord = ({ type, open, onClose }) => {
  //const form = useForm(/*{defaultValues:{nazwa:''}}*/);
  const { handleSubmit, register } = useForm();

  {
    /*} const [name, setName] = React.useState('');
   const handleChange = (event) => {
     setName(event.target.value);
   };

   function MyFormHelperText() {
    const value = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      console.log(value.filled);
      console.log(value);
      
        if (value.filled == false && value.required == false && value.filled!== '/^[A-Za-z]+$/i') {
            return 'Nazwa nie może pyć puste';
        }
  
      return '';
    }, [value.filled]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }
*/
  }

  if (type === 'INCOME') {
    return (
      <Modal
        open={open}
        onClose={onClose}
        modalTitle="Dodaj wpływ"
        description="Description"
      >
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <FormField
            component={TextField}
            name="nazwa"
            label={'Nazwa'}
            rules={{ required: 'Nazwa nie może być pusta' }}
            ref={register}
          ></FormField>
        </form>
      </Modal>
    );
  }
  if (type === 'EXPENSE') {
    return (
      <Modal
        open={open}
        onClose={onClose}
        modalTitle="Dodaj wydatek"
        description="Description"
      >
        <TextField fullWidth label="Nazwa"></TextField>
        <TextField fullWidth label="Kwota"></TextField>
        <Select />
      </Modal>
    );
  }
};

AddNewLedgerRecord.propTypes = {
  type: PropTypes.oneOf(['INCOME', 'EXPENSE']),
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
