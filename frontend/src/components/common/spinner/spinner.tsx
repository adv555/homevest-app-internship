import React from "react";
import clsx from "clsx";
import loading from '../../../assets/images/loading.svg';

type ITypes = {
    default: string,
    medium: string,
    small: string,
    custom: string
}

interface IProps {
    type?: keyof ITypes,
    label?: string,
    isLabel?: boolean,
    classContainer?: string,
    classImage?: string,
    classLabel?: string
}


const Spinner: React.FC<IProps> = ({
    type = 'default',
    label = 'Loading...',
    isLabel = false,
    classContainer = 'flex w-full h-full justify-center items-center',
    classImage = 'animate-spin ',
    classLabel = 'font-semibold px-4 text-h6'
}) => {
    
    const types = {
        default: 'h-10 w-10',
        medium: 'h-7 w-7',
        small: 'h-5 w-5',
        custom: ''
    }

    return (
        <div className={clsx('h-128')}>
            <div className={clsx(classContainer)}>
                <img 
                    className={clsx(classImage + types[type])}
                    src={loading} 
                    alt="Loading" 
                />
                <h1 
                    className={
                        clsx(classLabel
                            + (isLabel 
                            ? '' :
                            ' hidden')
                        )
                    }
                >
                    { label } 
                </h1>
            </div>
        </div>
    )
}

export default Spinner;