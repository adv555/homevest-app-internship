import React from 'react'
import Alert from './Alert'
import { AlertType } from './enums/alert.enum';
import { AlertProps } from './types/alert-props.interface';


const InfoAlert: React.FC<AlertProps> = ({
    title,
    message
}) => {
  return (
    <Alert
        title={title}
        message={message}
        type={AlertType.INFO}
    />
  )
}

export default InfoAlert;