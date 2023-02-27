import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { downloadDataThunk } from "../redux/action/downloadData_action";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from "@mui/material";
import { DefaultDelimiter } from "papaparse";



const DownloadDataComponent = () => {
    const dispatch = useDispatch();
    const [fileName, setFileName] = useState('iris');

    const onDownloadData = () => {
        dispatch(downloadDataThunk(fileName) as any);
    }
    return(
        <div className="download-data-cmp">
            <div className="pick-data-unit">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="select-label"
                            id="demo-simple-select"
                            value={fileName}
                            label="file-name"
                            onChange={(event:SelectChangeEvent)=>setFileName(event.target.value as string)}
                        >
                            <MenuItem value={'iris'}>iris</MenuItem>
                            <MenuItem value={'wine'}>wine</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="download-unit">
                <Button onClick={onDownloadData}>데이터 다운로드</Button>

            </div>
        </div>
    )
}

export default DownloadDataComponent