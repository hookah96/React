import React from "react";
import GuaranteeComp from "./GuaranteeComp";

// For some reason it doesn't render images.

function Guarantee() {
  return (
    <div style={{ display: "flex" }}>
      <GuaranteeComp
        content={{
          imgUrl: "../../../assets/exercises/f-delivery.png",
          title: "Free Shipping",
          description: "100% free shiping",
        }}
      />

      <GuaranteeComp
        content={{
          imgUrl: "../../../assets/exercises/coin.png",
          title: "100% Money back",
          description: "We assure you for refund.",
        }}
      />

      <GuaranteeComp
        content={{
          imgUrl: "../../../assets/exercises/chat.png",
          title: "Online support 24/7",
          description: "Online support everyday, all day!",
        }}
      />
    </div>
  );
}

export default Guarantee;
