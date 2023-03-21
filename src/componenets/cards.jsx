import React from "react";

const Cards = (props) => {
  return (
    <div className="container">
      <div className=" between">
        {props.img ? (
      
            <img height="200px" width="200px" src={props.img} />
      
        ) : (
          <div> </div>
        )}

        <div>

     
        {props.date ? (
          <button onClick={props.bannedSelection} value={props.date}>
            {props.date}
          </button>
        ) : (
          <div> </div>
        )}
        {props.title ? (
          <button onClick={props.bannedSelection} value={props.title}>
            {props.title}
          </button>
        ) : (
          <div> </div>
        )}
        {props.copyright ? (
          <button onClick={props.bannedSelection} value={props.copyright}>
            {" "}
            {props.copyright}
          </button>
        ) : (
          <div> </div>
        )}
       </div>
      </div>
    </div>
  );
};

export default Cards;
