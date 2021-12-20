
import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
import { GET_CLAUSTROS } from '../../types'
import AcademicosContext from './AcademicosContext'
import AcademicosReducer from './AcademicosReducer'

const AcademicosState = (props) => {
    const initialState = {
        claustrosProgramas:[]
    }
 //set dispatch to executes actions on AcademicosReducer   
 const [state,dispatch]=useReducer(AcademicosReducer,initialState)

 //CRUD ACTIONS through dipatch
 //request faculty members from API
 const getClaustrosProgramas = async()=>{
     const response = await axiosClient.get('investigadores/claustros')
    // console.log(response)
     dispatch({
        //type to handle show_form state prop
        type: GET_CLAUSTROS,
        payload: response.data, //the function param is the payload of dispatcher
      });
 }

    return (
        <AcademicosContext.Provider value={{claustrosProgramas:state.claustrosProgramas, getClaustrosProgramas}} >{props.children}
            
        </AcademicosContext.Provider>
    )
}

export default AcademicosState
