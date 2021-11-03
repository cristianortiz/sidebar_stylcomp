import { GET_ACADEMICOS } from "../../types";

export default(state,action)=>{
    switch(action.type){
        case GET_ACADEMICOS:
        return{

        }
        default:
      return state;
  }
}
