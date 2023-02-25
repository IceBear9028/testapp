import React from "react";
import {combineReducers} from "redux";
import fileData from "./readCsvFile_reducer";

const rootReducer = combineReducers({
    fileData
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>