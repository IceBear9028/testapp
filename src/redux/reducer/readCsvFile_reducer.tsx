import {readCsv} from "../action/readCsvFile_action";

interface DataType{
    [state : string] : any;
}

interface StateType{
    data : any;
    file : any;
}


