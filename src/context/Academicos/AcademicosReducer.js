import { GET_ACADEMICOS } from "../../types";

export default(state,action)=>{
    switch(action.type){
        case GET_ACADEMICOS:
        return{
          ...state,
          academicos: action.payload, //load academicos payload to academicosState

        }
        default:
      return state;
  }
}
