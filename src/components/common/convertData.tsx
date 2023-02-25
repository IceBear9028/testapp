import React from "react";

export const csvFileToArray = (file : any) => {
    const csvToText = (inputFile : any) => {
        const text = new Promise(resolve => {
            const fr = new FileReader();
            fr.readAsText(inputFile);
            fr.onload = () => {
                resolve(fr.result);
            }
        })
        return text
    }
    const textToArray = (text : string | void | any) => {
        if(typeof(text) === 'string'){
            const csvHeader : string[] = text.slice(0, text.indexOf("\n")).split(",");
            const csvRows : string[] = text.slice(text.indexOf("\n") + 1).split("\n");
            const filterNullKey = (rowData : any[]) => {
                return rowData.map((element) => {
                    if(element == ''){
                        return 'id'
                    }else{
                        return element
                    }
                })
            }
            const array = csvRows.map(i => {
                const values = i.split(",");
                const obj = filterNullKey(csvHeader).reduce((object:any, header : string, index:number) => {
                    object[header] = values[index];
                    return object;
                }, {});
                return obj;
            });
            return array
        }
        console.log('error => csvToText() 에러발생' + text)
    }
    return csvToText(file).then(value => textToArray(value))
}

export type ConvertFileType = 
    | ReturnType<typeof csvFileToArray>
