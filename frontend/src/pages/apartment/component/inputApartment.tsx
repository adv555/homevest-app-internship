import React from 'react'
import clsx from 'clsx'
import { Field } from 'formik'
import { overrideTailwindClasses } from 'tailwind-override'
import { Typography } from 'components/common/typography/typography'
import { IInputApartmentProps } from '../types/input-props'

export const InputApartment: React.FC<IInputApartmentProps> = ({
  name,
  label,
  className,
  classes,
  value,
  type,
  isInvalid,
  errorText,
  disabled,
  ...props
}) => {
  return (
    <div
      className={overrideTailwindClasses(
        clsx(
          'outline relative w-300px h-8.5 mb-8 rounded border border-solid border-grey bg-transparent hover:border-green focus:border-green',
          className,
        ),
      )}
    >
      <Field
        autoComplete="off"
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder=" "
        className={overrideTailwindClasses(
          clsx(
            'block  w-300px h-8.5 border-none p-2 font-body-small text-line-14 leading-line-14 text-green appearance-none focus:outline-none  bg-transparent',
            {
              'bg-light-grey border-none text-grey': disabled,
              'border-green': !isInvalid,
              'border-red': isInvalid,
            },
            classes?.input,
          ),
        )}
        {...props}
      />
      {isInvalid && errorText && (
        <Typography type="placeholder-small" className={clsx('text-red mt-1', classes?.error)}>
          {errorText}
        </Typography>
      )}

      <label className="absolute top-2 font-body-small text-line-14 leading-line-14 text-light-grey bg-white px-2  py-0 duration-300 origin-0">
        {label}
      </label>
    </div>
  )
}
