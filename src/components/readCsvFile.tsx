import React from "react";
import {useState} from "react";
import Papa from 'papaparse';
import {csvFileToArray} from "./common/convertData";

const CsvTestComponent = () => {
    const [data, setData] = useState<any|null>('');
    const [file, setFile] = useState<any|null>(null);
    const [allFile, setAllFile] = useState<any|null>(null);
    let test : any = '';
    const onCsv = (event : any) => {
        if(event.target.files){
            event.preventDefault();
            setFile(event.target.files[0]);
            const promise = csvFileToArray(event.target.files[0])
            console.log(promise);
            const getData = () => {
                promise.then(appData => {
                    console.log(appData + '변환한 데이터');
                    test = appData;
                    return appData
                })
            }
            setData(getData);
        }
    }
    const stateCheck = () => {
        let test = Papa.parse(file);
        console.log(test);
        console.log(data);
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
                <button onClick={stateCheck}>state-check</button>
            </div>
        </>
    )
}

export default CsvTestComponent