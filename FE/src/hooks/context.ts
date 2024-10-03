import { createContext, Dispatch, SetStateAction } from "react";

export interface stateType {
    search: string,
    startDate: string,
    endDate: string,
    line: string,
    sort: string,
    order: string,
    money: string,
    bank: string,
    data: any[],
}

export const initialState:stateType={
    search: '',
    startDate: '',
    endDate: '',
    line: '10',
    sort: 'Ngày',
    order: 'Giảm dần',
    money : '',
    bank: '',
    data: [],
}

export type ContextType = [stateType, Dispatch<SetStateAction<stateType>>];

export const context = createContext<ContextType | undefined>(undefined)