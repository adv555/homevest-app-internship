import React from "react";
import clsx from "clsx";
import home_icon from 'assets/images/home-icon.svg';
import Button from "../button/button";
import { 
  ICompany, 
  IPropsPropertyDevelopers
} from './types/types';

const PropertyDevelopers: React.FC<IPropsPropertyDevelopers> = ({ 
    property = [], 
    propertySelect = [], 
    className = { button: 'border-2 border-light-blue flex hover:bg-light-blue hover:text-white items-center justify-between leading-7 mix-w-150 px-2 rounded-md text-body-small text-green w-full'}, 
    isVisible = false, 
    handlerVisible, 
    returnPropertyDevelopers 
  }) => {

  const [selectProperty, setSelectProperty] = React.useState(propertySelect);

  function handlerSetSelectProperty(value:string) {
      if (selectProperty.indexOf(value) !== -1) {
          const result = selectProperty.filter((item:string) => item !== value);
          setSelectProperty(result);

          return
      }

      setSelectProperty([...selectProperty, value])
  }
    
  function handlerReturnSelectProperty() {
    returnPropertyDevelopers(selectProperty);
    handlerVisible();
  }

  function handlerResetAllFilters() {
      setSelectProperty([]);
      returnPropertyDevelopers([]);
  }

  return (
    <>
      <div className={clsx('max-w-210 min-w-190 z-20')}>
        <button 
          onClick={() => handlerVisible()} 
          className={className.button}>
          Property developers
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('h-4 w-6')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className={clsx(
          (isVisible 
            ? '' 
            : 'hidden ')
            + 'absolute left-0 mt-2 px-4 py-2 rounded-md shadow-card w-full max-w-630 z-10'
          ) 
        }>
          <div className={clsx('bg-white font-medium grid grid-cols-2 text-body-large text-left')}>
            {
                !property.length ? 
                <h1>Company Not found</h1> :
                property.map(({id, estateName}:ICompany) => {
                  return (
                      <button 
                          key={id}
                          className={clsx(
                            (selectProperty.indexOf(id) != -1 
                              ? 'bg-light-grey ' 
                              : '') 
                              + 'flex gap-3 items-center text-left py-3 pl-3 hover:bg-light-grey'
                            )
                          }
                          onClick={() => handlerSetSelectProperty(id)}
                      >
                          <img src={home_icon} alt="home-icon" className={clsx('-mt-1.5 w-6 h-6')}/>
                          {estateName}
                      </button>
                  )
              })
            }
          </div>
            
            

            <div className={clsx('flex gap-7 text-body text-green')}>
                <Button 
                  className={clsx('bg-white border-none box-border duration-200 flex focus:text-green-pressed font-medium h-9 items-center justify-start px-3 py-4 rounded-lg text-base text-green text-left w-40')}
                  nameBtn={'tertiary'}
                  label={'Reset All Fiters'}
                  onClick={() => handlerResetAllFilters() }
                />
                <Button
                  className={clsx('bg-white border-none box-border duration-200 flex focus:text-green-pressed font-medium h-9 items-center justify-start px-3 py-4 rounded-lg text-base text-green text-left w-40')}
                  nameBtn={'tertiary'}
                  label={'Show'}
                  onClick={() => handlerReturnSelectProperty()}
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDevelopers;