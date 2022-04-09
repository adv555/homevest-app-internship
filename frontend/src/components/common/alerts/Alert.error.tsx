import React from 'react'
import Alert from './Alert'
import { AlertType } from './enums/alert.enum';
import { AlertProps } from './types/alert-props.interface';



const ErrorAlert: React.FC<AlertProps> = ({
    title,
    message
}) => {
  return (
    <Alert
        title={title}
        message={message}
        type={AlertType.DANGER}
    />
  )
}

export default ErrorAlert;