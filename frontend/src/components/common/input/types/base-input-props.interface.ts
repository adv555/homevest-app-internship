import { InputClasses } from "./input-classes.interfaces";

export interface BaseInputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  classes?: InputClasses;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  isInvalid?: boolean;
  errorText?: string;
}
