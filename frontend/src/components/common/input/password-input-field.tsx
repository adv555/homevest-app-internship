import React from 'react';
import { useField } from "formik";
import { PasswordInput } from "./password-input";
import { BaseInputProps } from './types/base-input-props.interface';

type InputFieldProps = Omit<BaseInputProps, 'isInvalid' | 'errorText'>;

export const PasswordInputField: React.FC<InputFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return <PasswordInput
    {...field}
    {...rest}
    isInvalid={Boolean(meta.error && meta.touched)}
    errorText={String(meta.error)}
  />;
}