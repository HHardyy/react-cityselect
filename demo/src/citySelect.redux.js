const CITY_SELECT="CITY_SELECT"
const initState={
    myCity:''
}
export function city(state=initState,action){
    switch(action.type){
        case CITY_SELECT:
            return {...state,myCity:action.city}
        default:
            return state
    }
}

export function selectCity(city){
    return {city,type:CITY_SELECT}
}