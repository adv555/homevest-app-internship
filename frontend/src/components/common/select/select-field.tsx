import React from 'react';
import { useField } from "formik";
import { Select, SelectProps } from "./select";

export const SelectField: React.FC<SelectProps> = ({
  name,
  options,
  ...rest
}) => {
  const [field, meta, { setValue }] = useField(name);

  const handleChange = (option: any) => {
    setValue(option.value);
  }

  return <Select
    {...field}
    {...rest}
    value={meta.value}
    onChange={handleChange}
    options={options}
    isInvalid={Boolean(meta.error && meta.touched)}
    errorText={String(meta.error)}
  />;
}