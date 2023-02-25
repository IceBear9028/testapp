import {STORE_DATA} from "./types";
import { csvFileToArray } from "../../components/common/convertData";

export const storeDataThunk = (file : any) => {
    return async (dispatch : any, getState : any) => {
        const convertData:any = await csvFileToArray(file).then(data => data);
        const columnName:string[] = Object.keys(convertData[0]);
        dispatch({
            type : STORE_DATA,
            payload : {
                data : convertData,
                columnName : columnName
            }
        })
    }
}