import { AlertType } from "../enums/alert.enum";

export interface BaseAlertProps{
    title: string;
    message: string;
    type: AlertType;
}