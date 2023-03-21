

import React from "react";




const HistoryList = (props) => {

    return (


    <div className="card">
     {props.title}
    <img src= {props.image} width= "100px" height="100px" /> 
    </div>
    )
}

export default HistoryList;