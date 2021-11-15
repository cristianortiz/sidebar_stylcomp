import { GET_CLAUSTROS } from "../../types";

export default(state,action)=>{
    switch(action.type){
        case GET_CLAUSTROS:
        return{
          ...state,
          claustrosProgramas: action.payload, //load academicos payload to academicosState

        }
        default:
      return state;
  }
}
