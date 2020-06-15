import React from "react";
import Card from "../Card";

const CardContainer =() => {
  return(
    <div>
      <div className="container border mt-5 p-3 cardBg">
        <h2 className="border-bottom mb-3 pb-3 text-center font-weight-bold">Portfolio</h2>
        <Card />
      </div>
    </div>
  )
}

export default CardContainer;