import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import React from "react";
import { Typography } from "../typography/typography";

export interface CheckboxProps {
  name: string;
  className?: string;
  checkboxVar?: string;
  checked?: boolean;
  label?: React.ReactNode;
  htmlFor?: string;
  size?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  isInvalid?: boolean;
  errorText?: string;
}
const STYLES = {
  primary: "w-5 h-5",
  secondary: "w-8 h-8",
  tertiary: "w-12 h-12",
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  name,
  disabled,
  size = "primary",
  htmlFor = name,
  label,
  isInvalid,
  errorText,
  ...restProps
}) => {
  return (
    <div className="flex-col">
      <div className={clsx('flex flex-row', className)}>
        <input
          className={overrideTailwindClasses(
            clsx(
              `
        border-light-gray rounded text-green shadow-none focus:shadow-none focus:ring-offset-0 focus:ring-0
        ${STYLES[size]}`,
              className,
              {
                'bg-red': isInvalid
              }
            )
          )}
          type="checkbox"
          id={htmlFor}
          name={name}
          disabled={disabled}
          value={htmlFor}
          {...restProps}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
      {isInvalid && errorText && (
        <Typography type="placeholder-small" className={clsx("text-red mt-1")}>{errorText}</Typography>
      )}
    </div>
  );
};
