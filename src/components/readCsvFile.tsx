import React from "react";
import {useState} from "react";
import Papa from 'papaparse';
import {csvFileToArray} from "./common/convertData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { storeDataThunk } from "../redux/action/readCsvFile_action";

const CsvTestComponent = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState<any|null>('');
    const [file, setFile] = useState<any|null>(null);
    const [allFile, setAllFile] = useState<any|null>(null);

    const convertData = useSelector((state:RootState) => state.fileData.convertData.data);
    const columnName = useSelector((state:RootState) => state.fileData.convertData.columnName);

    const onCsv = (event : any) => {
        if(event.target.files){
            event.preventDefault();
            setFile(event.target.files[0]);
            dispatch(storeDataThunk(event.target.files[0]) as any);
        }
    }
    const stateCheck = () => {
        console.log(convertData);
        console.log(columnName);
    }
    return(
        <>
            <div className="input-div"
                 style={{
                     'width' : '500px',
                     'border' : '1px solid #dfdfdf',
                     'borderRadius' : '20px'}}>
                <input type = 'file' accept='.csv' onChange={onCsv}/>
            </div>
            <div className='state-check'>
                <button onClick={stateCheck}>store 저장</button>
            </div>
        </>
    )
}

export default CsvTestComponent