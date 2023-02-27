import { DOWNLOAD_DATA } from "./types";
import axios from "axios";


export const downloadDataThunk = (fileName : string) => {
    return async (dispatch:any, getState:any) => {
        const params = {
            filename : fileName,
            type : 'database'
        }
        const response:any = await axios.get('api/Data/load', {params : params})
            .then(res => res.data);
        
        dispatch({
            type : DOWNLOAD_DATA,
            payload : {
                fileName : response.filename,
                data : response.file,
                communicationStatus : response.success
            }
        })
    }
}