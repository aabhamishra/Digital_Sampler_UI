import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Stepper = ({ light, lightFalseStyle, text = "1" }) => {
  const [state, dispatch] = useReducer(reducer, {
    light: light,
  });

  return (
    <React.Fragment>
      {(!state.light || state.light || state.light === "light3") && (
        <React.Fragment>
          <div
            className={"stepper-light-false"}
            style={lightFalseStyle}
            onClick={() => {
              dispatch("click");
            }}
          >
            <React.Fragment>
              {(!state.light || state.light) && (
                <React.Fragment>
                  <div className={"stepper-pad"}>
                    <div className={"stepper-overlap-group"}>
                      <div className={"stepper-rectangle"} />
                      <div
                        className={"stepper-rectangle-26"}
                        style={{
                          backgroundColor: state.light ? "#39363b" : "#2a272b",
                          boxShadow: state.light
                            ? "inset -1px -1px 1px #0000006b , inset 0px 0px 1px 1px #1d1b1b"
                            : "6px 7px 4px #00000040 , 9px 14px 15px #00000040 , inset -2px -2px 1px #0000006b , inset 1px 1px 1px #6e6868",
                          top: state.light ? "2px" : "1px",
                        }}
                      />
                      <div
                        className={"stepper-rectangle-28"}
                        style={{
                          background: state.light
                            ? "linear-gradient(180deg, rgb(62.74, 58.6, 64.81) 0%, rgb(26.68, 23.67, 28.69) 100%)"
                            : "linear-gradient(180deg, rgb(50.33, 46.86, 52.06) 0%, rgb(26.68, 23.67, 28.69) 100%)",
                          top: state.light ? "14px" : "13px",
                        }}
                      />
                      <div
                        className={"stepper-element"}
                        style={{
                          top: state.light ? "18px" : "17px",
                        }}
                      >
                        {text}
                      </div>
                    </div>
                  </div>
                  <div className={"stepper-group"}>
                    <div
                      className={"stepper-rectangle-30"}
                      style={{
                        backgroundColor: state.light ? "#ffffff" : "#1a1a1a",
                        boxShadow: state.light
                          ? "0px 0px 14px 5px #ffffffa6 , inset 0px 0px 1px 1px #ffffff"
                          : "inset 1px 1px 3px #000000cc",
                      }}
                    />
                  </div>
                </React.Fragment>
              )}

              {state.light === "light3" && (
                <React.Fragment>
                  <div className={"stepper-pad"}>
                    <div className={"stepper-overlap-group"}>
                      <div className={"stepper-rectangle"} />
                      <div className={"stepper-div"} />
                      <div className={"stepper-rectangle-2"} />
                      <div className={"stepper-element-1-2-91"}>{text}</div>
                    </div>
                  </div>
                  <div className={"stepper-group"}>
                    <div className={"stepper-rectangle-3"} />
                  </div>
                  <div className={"stepper-rectangle-31"}>
                    <div className={"stepper-rectangle-4"} />
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

function reducer(state, action) {
  if (state.light === false) {
    switch (action) {
      case "click":
        return {
          light: true,
        };
    }
  }

  if (state.light === "light3") {
    switch (action) {
      case "click":
        return {
          light: false,
        };
    }
  }

  return state;
}
