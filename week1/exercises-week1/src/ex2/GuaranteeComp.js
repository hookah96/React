import React from "react";

function GuaranteeComp(props) {
  return (
    <div style={{ paddingRight: 20 }}>
      <img src={props.content.imgUrl} alt="Suppose to be an IMG"></img>
      <h4>{props.content.title}</h4>
      <p>{props.content.description}</p>
    </div>
  );
}

export default GuaranteeComp;
