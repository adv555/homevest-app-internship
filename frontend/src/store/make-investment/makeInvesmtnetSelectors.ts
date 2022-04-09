/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IMakeInvestmentState } from "./makeInvestmentReducer";

export const getMakeInvestmentState = (state: { 'make-investment': IMakeInvestmentState }) => state["make-investment"];
