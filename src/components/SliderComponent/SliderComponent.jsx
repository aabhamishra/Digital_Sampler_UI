import React from "react";
import "./style.css";

export const SliderComponent = ({ style, controlStyle, boundsStyle, draggerStyle }) => {
  return (
    <div className={"slider-component-slider-component"} style={style}>
      <div className={"slider-component-control"} style={controlStyle}>
        <div className={"slider-component-bounds"} style={boundsStyle} />
        <div className={"slider-component-dragger"} style={draggerStyle} />
      </div>
    </div>
  );
};
