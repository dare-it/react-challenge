import React from 'react'
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField'

import { Modal } from 'ui'
import { INCOME } from 'ledgerKeys'


export const AddNewLedgerRecord = (props) => {
    const { handleSubmit,  control, formState: { errors }  } = useForm({
        defaultValues: {
            nazwa: '',
            kwota: ''
          }
    });
    const onSubmit = (data) => console.log(data);

    const checkError = () => {
        if (errors.kwota.type === 'required') {
            return 'Kwota nie może być pusta'
        } else if (errors.kwota.type === 'max') {
            return 'Kwota nie może być większa niż 1000000'
        } else if (errors.kwota.type === 'min') {
            return 'Kwota musi być większa niż 0'
        }
    }

    const onInput = (e, callback) => {
        
       if (!e.target.value.match(/^(0|[1-9][0-9]{0,})([\,\.]\d{0,2})?$/) && e.target.value !== '') {
            return
        }

        callback(e)
    }

    return (
        <Modal title= {props.mode === INCOME ? 'Dodaj wpływ' : 'Dodaj wydatek'} {...props} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name={"nazwa"}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField onChange={onChange} value={value} label={"Nazwa"} variant='outlined' error={!!error} helperText={error ? 'Nazwa nie może być pusta': null} />
                )}
            />
            <Controller
                name={"kwota"}
                control={control}
                rules={{ required: true, min: 0.01, max: 100000 }}
                render={({ field: { onChange  , value }, fieldState: { error } }) => (
                <TextField onChange={e => onInput(e, onChange)} value={value} label={"Kwota"} variant='outlined' error={!!error} helperText={error ? checkError() : null} />
                )}
            />
        </Modal>
    ) 

}