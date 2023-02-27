import React from "react";
import {combineReducers} from "redux";
import fileData from "./readCsvFile_reducer";
import downloadData from "./downloadData_reducer";

const rootReducer = combineReducers({
    fileData,
    downloadData,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>