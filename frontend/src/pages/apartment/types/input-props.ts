import { InputClasses } from "../../../components/common/input/types/input-classes.interfaces";

export interface IInputApartmentProps {
  label: string;
  name: string;
  type?:"text"|"email"|"password"
  value?: string | number;
  className?: string;
  classes?: InputClasses;
  disabled?: boolean;
  isInvalid?: boolean;
  errorText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}