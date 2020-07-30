import { actionTypes } from '../actionTypes'

const initialState = {   
    peopleAgeList:[]
}

const reducer = (state = initialState, action) => {



if(action.type===actionTypes.SUBMIT_AGE_DATA){
return{
    ...state,
    peopleAgeList: [...state.peopleAgeList, action.value]
}
}

    return state;
}
export default reducer;