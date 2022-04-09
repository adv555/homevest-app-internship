import React, { useEffect } from "react";

interface IProp {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  getSwitched:(value:boolean)=>void
}
const ToggleButton: React.FC<IProp> = ({ label = "", checked = false, disabled, getSwitched}) => {
  const [switched, setSwitched] = React.useState(checked);

  useEffect(() => {
    setSwitched(checked);
  }, [checked])

  useEffect(() => {
    getSwitched(switched);
  },[switched])
  const handleSwitch = () => {
    setSwitched(!switched)
    
  }
 
  return (
    <div className="flex items-center justify-center w-full ">
      <span className="text-black font-medium text-body leading-body mr-4 opacity-80">
        {label}
      </span>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={switched}
            name={label}
            disabled={disabled}
            className="sr-only"
            onChange={() => console.log(switched)}
          />
          <div
            onClick={handleSwitch}
            className={
              "block w-12 h-6 rounded-full" +
              (switched ? " bg-green" : " bg-light-grey")
            }
          ></div>
          <div
            className={
              "dot bg-white absolute top-px left-px w-22px h-22px rounded-full transition"
            }
          ></div>
        </div>
      </label>
    </div>
  );
};
export default ToggleButton;
