import { STORE_DATA } from "../action/types";

interface DataType{
    [index : string] : any
}

interface ConvertDataType{
    data : DataType;
    columnName : string[];
}

interface StateDataType{
    convertData : ConvertDataType;
    fileName : string | null;
}

const initialState:StateDataType = {
    convertData : {
        data : {},
        columnName : ['']
    },
    fileName : null
}
export default function fileData(
    state : StateDataType = initialState,
    action : any
) : StateDataType {
    switch(action.type){
        case STORE_DATA :
            return {
                ...state,
                convertData : action.payload
            } as StateDataType
        
        default :
            return {...state} as StateDataType
    }
}

