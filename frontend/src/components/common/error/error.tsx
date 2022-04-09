import React from 'react';
import clsx from 'clsx'
import { Link } from 'react-router-dom';

interface IProps {
    path?: string,
    isLink?: boolean,
    message?: string,
    classNameMessage?: string,
    classNameContainer?: string,
}

const Error: React.FC<IProps> = ({
    message = 'Error',
    isLink = false,
    path = '/',
    classNameContainer = 'flex h-full items-center justify-center w-full',
    classNameMessage = 'text-gray-400'
}) => {

    if(isLink) {
        return (
            <div className={clsx(classNameContainer)}>
                <Link to={path} className={clsx('font-semibold text-h3 cursor-pointer ' + classNameMessage)}> {message} </Link>
            </div>
        )  
    }

    return (
        <div className={clsx(classNameContainer)}>
            <h1 className={clsx('font-semibold text-h3  ' + classNameMessage)}> {message} </h1>
        </div>        
    )
}

export default Error;