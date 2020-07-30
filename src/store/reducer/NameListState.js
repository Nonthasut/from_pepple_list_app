import { actionTypes } from '../actionTypes'

const initialState = {
    peopleNameList: [],
}

const reducer = (state = initialState, action) => {

if(action.type===actionTypes.SUBMIT_NAME_DATA){

return{
    ...state,
    peopleNameList: [...state.peopleNameList, action.value]
}
}



    return state;
}
export default reducer;