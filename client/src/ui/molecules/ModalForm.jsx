import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm, useFormContext, Controller, useFormState } from 'react-hook-form';

export const ModalForm = ({}) => {
    const formContext = useFormContext();
    const formState = useFormState();
    console.log('Form State', formState);

    return (
        <div>
            <Controller
                name= "nazwa"
                render={({field: {onChange, onBlur, value, ref} }) => (
                    <TextField
                        name="nazwa"
                        label="Nazwa"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                    />
                )}
                rules={{required:'Nazwa nie może być pusta'}}
            />

            
        </div>
    )
}
