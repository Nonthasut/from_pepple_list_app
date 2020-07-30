import { actionTypes } from '../actionTypes'

const initialState = {
    // peopleList : [],
    peopleNameList: [],
    peopleAgeList:[]
}

const reducer = (state = initialState, action) => {
if(action.type===actionTypes.SUBMIT_DATA){
return{
    ...state,
    peopleList: [...state.peopleList, action.value]
}
}

    return state;
}
export default reducer;