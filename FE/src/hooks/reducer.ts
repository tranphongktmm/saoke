import {SET_SEARCH,SET_START_DATE,SET_END_DATE, ADD_TO_DO,
        SET_LINE,SET_FOLLOW,SET_SORT,SET_MONEY,SET_BANK
        } from "./constaints"

export const initialState = {
    search: '',
    startDate: '',
    endDate: '',
    line: '10',
    follow: 'Ngày',
    sort: 'Giảm dần',
    money : '',
    bank: '',
    todos: {}
}

function Reducer(state : any,action: any) {
    switch(action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case SET_START_DATE:
            return {
                ...state,
                startDate: action.payload,
            }
        case SET_END_DATE:
            return {
                ...state,
                endDate: action.payload,
            }
        case SET_LINE:
            return {
                ...state,
                line: action.payload,
            }

        case SET_FOLLOW:
            return {
                ...state,
                follow: action.payload,
            }

        case SET_SORT:
            return {
                ...state,
                sort: action.payload,
            }
        case SET_MONEY:
            return {
                ...state,
                money: action.payload,
            }
        case SET_BANK:
            return {
                ...state,
                bank: action.payload,
            }
        
        case ADD_TO_DO:
            return {
                ...state,
                todos:{...state.todos, ...action.payload}
            }
        default:
            throw new Error('Invalid action')
    }
}

export default Reducer;