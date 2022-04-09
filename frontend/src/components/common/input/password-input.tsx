import React, { useState } from 'react';
import { Input } from './input';
import { ReactComponent as EyeOpenedIcon } from './eye-opened.svg';
import { ReactComponent as EyeClosedIcon } from './eye-closed.svg';
import { BaseInputProps } from './types/base-input-props.interface';

export const PasswordInput: React.FC<BaseInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisivility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const EyeIcon = isPasswordVisible ? EyeClosedIcon : EyeOpenedIcon;

  return <Input
    {...props}
    classes={{
      input: 'pr-10',
    }}
    type={isPasswordVisible ? 'text' : 'password'}
    rightAdornment={<EyeIcon className="absolute inset-y-2 right-2.5" onClick={togglePasswordVisivility} />}
  />;
}