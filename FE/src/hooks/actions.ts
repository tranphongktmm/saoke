import {SET_SEARCH,SET_START_DATE,SET_END_DATE, ADD_TO_DO,
    SET_LINE,SET_FOLLOW,SET_SORT,SET_MONEY,SET_BANK
    } from "./constaints"


const setSearch= (payload: any) => {
    return {
        type: SET_SEARCH,
        payload: payload
    }
}
const setStartDate= (payload: any) => {
    return {
        type: SET_START_DATE,
        payload: payload
    }
}
const setEndDate= (payload: any) => {
    return {
        type: SET_END_DATE,
        payload: payload
    }
}
const setLine= (payload: any) => {
    return {
        type: SET_LINE,
        payload: payload
    }
}
const setFollow= (payload: any) => {
    return {
        type: SET_FOLLOW,
        payload: payload
    }
}
const setSort= (payload: any) => {
    return {
        type: SET_SORT,
        payload: payload
    }
}

const setMoney= (payload: any) => {
    return {
        type: SET_MONEY,
        payload: payload
    }
}
const setBank= (payload: any) => {
    return {
        type: SET_BANK,
        payload: payload
    }
}
const addToDo= (payload: any) => {
    return {
        type: ADD_TO_DO,
        payload: payload
    }
}


export {setSearch, setStartDate, setEndDate,setLine,setFollow,setSort,setMoney,setBank,addToDo}