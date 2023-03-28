import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Pad = ({ active, activeFalseStyle, rectangleStyle }) => {
  const [state, dispatch] = useReducer(reducer, {
    active: active,
  });

  return (
    <React.Fragment>
      {(!state.active || state.active || state.active === "active3") && (
        <React.Fragment>
          <div
            className={"pad-active-false"}
            style={{
              ...{
                backgroundColor: !state.active ? "#828387" : state.active ? "#3e4046" : undefined,
              },
              ...activeFalseStyle,
            }}
            onClick={() => {
              dispatch("click");
            }}
          >
            <div
              className={"pad-rectangle"}
              style={{
                ...{
                  background: state.active
                    ? "radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 20.83%, rgb(255, 255, 255) 33.85%, rgb(242.25, 242.25, 242.25) 64.58%, rgb(214.62, 214.62, 214.62) 100%)"
                    : state.active === "active3"
                    ? "radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 9.38%, rgb(255, 255, 255) 26.04%, rgb(242.25, 242.25, 242.25) 44.79%, rgb(214.62, 214.62, 214.62) 100%)"
                    : undefined,
                  backgroundColor: !state.active ? "#cccccc" : undefined,
                  boxShadow: !state.active
                    ? "6px 7px 4px #00000040 , 9px 14px 15px #00000040 , inset -3px -3px 3px #0000006b , inset 2px 2px 2px #cecece"
                    : state.active
                    ? "inset -1px -1px 2px #eaeaeadb , inset 2px 2px 2px #ffffff , 0px 0px 14px 2px #ffffff"
                    : undefined,
                },
                ...rectangleStyle,
              }}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        active: false,
      };
  }

  return state;
}
