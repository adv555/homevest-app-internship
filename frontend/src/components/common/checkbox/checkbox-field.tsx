import React from 'react';
import { useField } from "formik";
import { Checkbox, CheckboxProps } from "./checkbox";

type CheckboxFieldProps = Omit<CheckboxProps, 'isInvalid' | 'errorText'>;

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return <Checkbox
    {...field}
    {...rest}
    isInvalid={Boolean(meta.error && meta.touched)}
    errorText={String(meta.error)}
  />;
}