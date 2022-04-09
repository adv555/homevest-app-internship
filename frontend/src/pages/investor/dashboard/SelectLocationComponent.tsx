import React from "react";
// import { CitiesState } from "store/slices/cities/cities.slice";

interface IProps {
    location: {id: string, city: string}[],
    isVisible?: boolean,
    selectLocation?: {id: string, city: string},
    handlerIsVisible: () => void,
    handlerSelectCity: ({id, city}:{id: string, city: string}) => void
}

const SelectLoactionComponent: React.FC<IProps> = ({location, isVisible, selectLocation={id: undefined, citi: undefined}, handlerIsVisible, handlerSelectCity}) => {
  return (
    <div className="z-20"> 
      <button
        className="bg-light-grey flex gap-2 h-12 items-center pr-14 relative rounded-md text-black text-body-large"
        onClick={handlerIsVisible}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-mt-0.5 h-7 m-1 text-light-blue w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {selectLocation.city}
      </button>
      <div className={"relative top-1" + (isVisible ? "" : " hidden")}>
        <div className="flex flex-col absolute w-52 bg-white z-10 p-1 rounded-md">
          {location.map(({ id, city }: {id:string, city: string}) => {
            return (
              <button
                key={id}
                className={"bg-light-grey my-1 py-2 rounded-md"}
                onClick={() => handlerSelectCity({id, city})}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectLoactionComponent;
