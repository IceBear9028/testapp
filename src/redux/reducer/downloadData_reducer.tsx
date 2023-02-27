import React from "react";
import { DOWNLOAD_DATA } from "../action/types";

interface DataType{
    [index : string] : any
}

interface StateType{
    fileName : string | null;
    data : DataType | string | null ;
    communicationStatus : string | null;
}


const initialState : StateType = {
    fileName : null,
    data : null,
    communicationStatus : null
}

export default function downloadData(
    state : StateType = initialState,
    action : any
) : StateType {
    switch(action.type){
        case DOWNLOAD_DATA:
            console.log(action);
            return{
                ...state,
                fileName : action.payload.fileName,
                data : action.payload.data,
                communicationStatus : action.payload.communicationStatus
            }
        default :
            return {...state}
    }
}