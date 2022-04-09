import clsx from 'clsx';
import React from 'react';
import { Input } from './input';
import { ReactComponent as MapPinIcon } from './map-pin.svg';
import { InputProps } from './types/input-props.interface';

export const LocationInput: React.FC<InputProps> = (props) => {
  return <Input
    {...props}
    classes={{
      ...props?.classes,
      input: clsx('bg-light-grey w-53 h-12 rounded border-none pl-14 text-body-large-medium font-medium', props.classes?.input),
    }}
    type='text'
    leftAdorment={<MapPinIcon className="absolute inset-y-2 left-2.5" />}
  />;
}
