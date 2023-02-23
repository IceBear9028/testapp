import {STORE_DATA} from "./types";

interface CsvData{
    [state : string] : any

}
interface ReadCsvType{
    data : CsvData;
}
export const readCsv = ({data} : ReadCsvType) => {
    return{
        type : STORE_DATA,
        payload : {data}
    }
}