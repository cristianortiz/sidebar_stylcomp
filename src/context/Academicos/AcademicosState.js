
import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
import { GET_ACADEMICOS } from '../../types'
import AcademicosContext from './AcademicosContext'
import AcademicosReducer from './AcademicosReducer'

const AcademicosState = (props) => {
    const initialState = {
        academicos:[]
    }
 //set dispatch to executes actions on AcademicosReducer   
 const [state,dispatch]=useReducer(AcademicosReducer,initialState)

 //CRUD ACTIONS through dipatch
 const getAcademicos = async()=>{
     const response = await axiosClient.get('investigadores')
     //
     console.log(response)
     dispatch({
        //type to handle show_form state prop
        type: GET_ACADEMICOS,
        payload: response.data, //the function param is the payload of dispatcher
      });
 }

    return (
        <AcademicosContext.Provider value={{academicos:state.academicos, getAcademicos}} >{props.children}
            
        </AcademicosContext.Provider>
    )
}

export default AcademicosState
