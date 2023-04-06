import React from "react";

function Entry(props) {
  return (
    <div >
      <h2>{props.name}</h2>
      <img  style={{height:"250px",width:"250px"}} src={props.imgUrl}></img>
      <h2>{props.price}</h2>
       <hr></hr>
    </div>
  );
}

export default Entry;