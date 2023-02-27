import React from 'react';
import CsvTestComponent from "./components/readCsvFile";
import ShowArrayComponent from './components/testShowArray';
import './App.css';
import DownloadDataComponent from './components/downloaData';

function App() {
    const testData = [
        {
            name : '234',
            age : 30,
            message : 'fuck'
        },
        {
            name : '234',
            age : 30,
            message : 'fuck'
        },
        {
            name : '234',
            age : 30,
            message : 'fuck'
        },
    ]
    return (
        <div className="App">
            <ShowArrayComponent props={testData}/>
            <CsvTestComponent/>
            <DownloadDataComponent/>
        </div>
    );
}

export default App;
