import React from 'react';
import { useField } from "formik";
import { InputApartment } from "./inputApartment";
import { IInputApartmentProps} from '../types/input-props';

type InputFieldProps = Omit<IInputApartmentProps, 'isInvalid' | 'errorText'>;

export const InputApartmentField: React.FC<InputFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return <InputApartment
    {...field}
    {...rest}
    isInvalid={Boolean(meta.error && meta.touched)}
    errorText={String(meta.error)}
  />;
}