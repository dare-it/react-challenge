import React from 'react';
import { Controller, useFormState } from 'react-hook-form';

function FormField ({
    name,
    label,
    Component,
    rules,
    ...restProps

}) {

  //  const formState= useFormState();
        <Controller
        name= {name}
        render={({field: {onChange, onBlur, value, ref} }) => (
            <Component
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                {...restProps}
            />
        )}
        rules={rules}
/>


}

export default FormField;