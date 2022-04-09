import React from 'react';
import { useField } from "formik";
import { Input } from "./input";
import { InputProps } from './types/input-props.interface';

type InputFieldProps = Omit<InputProps, 'isInvalid' | 'errorText'>;

export const InputField: React.FC<InputFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return <Input
    {...field}
    {...rest}
    isInvalid={Boolean(meta.error && meta.touched)}
    errorText={String(meta.error)}
  />;
}