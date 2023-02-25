import React from "react";

interface TestDataType{
    props : any[]
}

const ShowArrayComponent = ({props} : TestDataType) => {
    return(
        <div className="show-array-div">
            <p>{props[0].name}</p>
        </div>
    )    
}

export default ShowArrayComponent