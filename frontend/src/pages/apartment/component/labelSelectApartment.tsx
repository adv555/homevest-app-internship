import React from "react";
import clsx from "clsx";

type Select = {
  labelName: string;
  children?: React.ReactNode;
};

export const LabelSelectApartment: React.FC<Select> = ({
  labelName,
  children,
}) => {
  return (
    <label
      className={clsx(
        "absolute -top-2 left-4 font-body-small text-line-14 leading-line-14 text-light-grey bg-white px-2  py-0 duration-300 origin-0"
      )}
    >
      {labelName}
      {children}
    </label>
  );
};
