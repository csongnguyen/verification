import React, { PropsWithChildren } from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import { FormikConfig } from 'formik';
// import {TextInput} from '@workday/canvas-kit-react/text-input';
// import {FormField} from '@workday/canvas-kit-react/form-field';

export const BasicTextInput = (props: PropsWithChildren<{
  label: string,
  type: string,
  formik: any,
  validationType?: string,
  isRequired?: boolean,
  placeholder?: string,
}>) => {
  const {label, formik, type, validationType, isRequired, placeholder} = props;

  const finalValidationType = validationType ?? type;
  // const [value, setValue] = React.useState('');

  // const handleChange = () => {};

  // return (
  //   <FormField label={label}>
  //     <TextInput onChange={handleChange} value={value} />
  //   </FormField>
  // );

  return (
    <TextInput
      orientation="vertical"
      isRequired={isRequired}
      hasError={formik.touched[finalValidationType] && !!formik.errors[finalValidationType]}
    >
      <TextInput.Label>{label}</TextInput.Label>
      <TextInput.Field
        name={type}
        autoComplete="username"
        placeholder={placeholder ?? ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[finalValidationType]}
      />
      <TextInput.Hint>{formik.touched[finalValidationType] && formik.errors[finalValidationType]}</TextInput.Hint>
    </TextInput>
  );
};