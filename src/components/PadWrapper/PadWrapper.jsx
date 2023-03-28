import React from "react";
import { Pad } from "../Pad";
import "./style.css";

export const PadWrapper = ({ padRectangleStyle }) => {
  return (
    <div className={"pad-wrapper-pad"}>
      <Pad
        active={false}
        activeFalseStyle={{
          width: "unset",
        }}
        rectangleStyle={padRectangleStyle}
      />
    </div>
  );
};
