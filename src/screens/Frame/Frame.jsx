import React from "react";
import { Stepper } from "../../components/Stepper";
import { PadWrapper } from "../../components/PadWrapper";
import { Pad } from "../../components/Pad";
import { SliderComponent } from "../../components/SliderComponent";
import "./style.css";

export const Frame = () => {
  return (
    <div className={"frame-frame-wrapper"}>
      <div className={"frame-frame"}>
        <div className={"frame-overlap"}>
          <img className={"frame-vector"} src={"/img/vector-8.svg"} />
          <img className={"frame-vector-3"} src={"/img/vector-3.svg"} />
          <img className={"frame-vector-4"} src={"/img/vector-3.svg"} />
          <img className={"frame-vector-5"} src={"/img/vector-3.svg"} />
          <img className={"frame-vector-6"} src={"/img/vector-6.svg"} />
          <div className={"frame-overlap-group14"}>
            <div className={"frame-overlap-group16"}>
              <div className={"frame-preview-sound-numbers"}>
                <div className={"frame-overlap-group12"}>
                  <div className={"frame-text-wrapper"}>1</div>
                  <div className={"frame-div"}>2</div>
                  <div className={"frame-text-wrapper-2"}>3</div>
                  <div className={"frame-text-wrapper-3"}>5</div>
                  <div className={"frame-text-wrapper-4"}>6</div>
                  <div className={"frame-text-wrapper-5"}>7</div>
                  <div className={"frame-text-wrapper-6"}>9</div>
                  <div className={"frame-text-wrapper-7"}>10</div>
                  <div className={"frame-text-wrapper-8"}>12</div>
                  <div className={"frame-text-wrapper-9"}>11</div>
                  <div className={"frame-text-wrapper-10"}>8</div>
                  <div className={"frame-text-wrapper-11"}>4</div>
                </div>
              </div>
              <img className={"frame-preview-sound-display-lines"} src={"/img/preview-sound-display-lines.png"} />
              <img className={"frame-sound-lines-per-beat"} src={"/img/sound-lines-per-beat.png"} />
            </div>
            <div
              className={"frame-preview-beats"}
              style={{
                backgroundImage: "url(/img/preview-beat-circles.png)",
              }}
            >
              <div className={"frame-navbar"}>
                <div className={"frame-text-wrapper-12"}>12</div>
                <div className={"frame-text-wrapper-13"}>16</div>
                <div className={"frame-text-wrapper-14"}>15</div>
                <div className={"frame-text-wrapper-15"}>14</div>
                <div className={"frame-text-wrapper-16"}>13</div>
                <div className={"frame-text-wrapper-17"}>4</div>
                <div className={"frame-text-wrapper-18"}>5</div>
                <div className={"frame-text-wrapper-19"}>6</div>
                <div className={"frame-text-wrapper-20"}>7</div>
                <div className={"frame-text-wrapper-21"}>8</div>
                <div className={"frame-text-wrapper-22"}>9</div>
                <div className={"frame-text-wrapper-23"}>10</div>
                <div className={"frame-text-wrapper-24"}>11</div>
                <div className={"frame-text-wrapper-25"}>2</div>
                <div className={"frame-text-wrapper-26"}>3</div>
                <div className={"frame-text-wrapper-27"}>1</div>
              </div>
            </div>
          </div>
          <div className={"frame-overlap-group15"}>
            <div className={"frame-sound-button"}>
              <div className={"frame-overlap-group"}>
                <div className={"frame-sample-sound-btn"}>
                  <div className={"frame-rectangle"} />
                </div>
                <img className={"frame-icon-volume"} src={"/img/image-4.png"} />
              </div>
            </div>
            <div className={"frame-group"}>
              <div className={"frame-group-36"}>
                <div className={"frame-text-wrapper-28"}>*Sample Name*</div>
                <div className={"frame-text-wrapper-29"}>*Sample Info*</div>
                <div className={"frame-text-wrapper-30"}>Preview</div>
                <div className={"frame-text-wrapper-31"}>*Sample Effects*</div>
                <div className={"frame-text-wrapper-32"}>*Sample Duration*</div>
              </div>
            </div>
          </div>
          <div className={"frame-step-buttons"}>
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="2"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="3"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="4"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="5"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="6"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="7"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="8"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="9"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="10"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="11"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="12"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="13"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="14"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="15"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="16"
            />
            <Stepper
              light={false}
              lightFalseStyle={{
                minWidth: "53px",
                width: "unset",
              }}
              text="17"
            />
          </div>
          <div className={"frame-effect-buttons"}>
            <div className={"frame-effect"}>
              <div className={"frame-overlap-2"}>
                <div className={"frame-div-wrapper"}>
                  <div className={"frame-div-2"}>
                    <div className={"frame-group-9"}>
                      <div className={"frame-overlap-group-2"}>
                        <div className={"frame-rectangle-9"} />
                        <div className={"frame-rectangle-10"} />
                      </div>
                    </div>
                    <div className={"frame-group-8"}>
                      <div className={"frame-rectangle-6"} />
                    </div>
                    <div className={"frame-label"} />
                  </div>
                </div>
                <div className={"frame-e"}>Effect 4</div>
              </div>
            </div>
            <div className={"frame-effect-3"}>
              <div className={"frame-overlap-2"}>
                <div className={"frame-div-wrapper"}>
                  <div className={"frame-div-2"}>
                    <div className={"frame-group-9"}>
                      <div className={"frame-rectangle-2"} />
                    </div>
                    <div className={"frame-rectangle-wrapper"}>
                      <div className={"frame-rectangle-3"} />
                    </div>
                  </div>
                </div>
                <div className={"frame-e-3"}>Effect 3</div>
              </div>
            </div>
            <div className={"frame-effect-2"}>
              <div className={"frame-overlap-2"}>
                <div className={"frame-div-wrapper"}>
                  <div className={"frame-div-2"}>
                    <div className={"frame-group-9"}>
                      <div className={"frame-overlap-group-2"}>
                        <div className={"frame-rectangle-9"} />
                        <div className={"frame-rectangle-10"} />
                      </div>
                    </div>
                    <div className={"frame-group-8"}>
                      <div className={"frame-rectangle-6"} />
                    </div>
                    <div className={"frame-label"} />
                  </div>
                </div>
                <div className={"frame-e-2"}>Effect 2</div>
              </div>
            </div>
            <div className={"frame-effect-1"}>
              <div className={"frame-overlap-2"}>
                <div className={"frame-div-wrapper"}>
                  <div className={"frame-div-2"}>
                    <div className={"frame-group-9"}>
                      <div className={"frame-rectangle-2"} />
                    </div>
                    <div className={"frame-rectangle-wrapper"}>
                      <div className={"frame-rectangle-3"} />
                    </div>
                    <div className={"frame-label-2"} />
                  </div>
                </div>
                <div className={"frame-e-1"}>Effect 1</div>
              </div>
            </div>
            <div className={"frame-revert"}>
              <div className={"frame-overlap-2"}>
                <div className={"frame-div-wrapper"}>
                  <div className={"frame-div-2"}>
                    <div className={"frame-group-9"}>
                      <div className={"frame-overlap-group-2"}>
                        <div className={"frame-rectangle-9"} />
                        <div className={"frame-rectangle-10"} />
                      </div>
                    </div>
                    <div className={"frame-label"} />
                  </div>
                </div>
                <div className={"frame-rev"}>Revert</div>
              </div>
            </div>
          </div>
          <div className={"frame-record-button"}>
            <div className={"frame-overlap-group7"}>
              <div className={"frame-dark-big-buttom"}>
                <div className={"frame-rectangle-3-wrapper"}>
                  <div className={"frame-rectangle-4"} />
                </div>
              </div>
              <div className={"frame-ellipse"} />
            </div>
            <div className={"frame-text-wrapper-33"}>RECORD</div>
          </div>
          <div className={"frame-play-button"}>
            <div className={"frame-overlap-3"}>
              <div className={"frame-group-2"}>
                <div className={"frame-overlap-group-wrapper"}>
                  <div className={"frame-rectangle-3-wrapper"}>
                    <div className={"frame-rectangle-4"} />
                  </div>
                </div>
                <div className={"frame-text-wrapper-34"}>PLAY</div>
              </div>
              <img className={"frame-icon-play"} src={"/img/image-1.png"} />
            </div>
          </div>
          <div className={"frame-pause-button"}>
            <div className={"frame-overlap-3"}>
              <div className={"frame-group-2"}>
                <div className={"frame-overlap-group-wrapper"}>
                  <div className={"frame-rectangle-3-wrapper"}>
                    <div className={"frame-rectangle-4"} />
                  </div>
                </div>
                <div className={"frame-text-wrapper-35"}>PAUSE</div>
              </div>
              <img className={"frame-image"} src={"/img/image-2.png"} />
            </div>
          </div>
          <div className={"frame-stop-button"}>
            <div className={"frame-overlap-3"}>
              <div className={"frame-group-2"}>
                <div className={"frame-overlap-group-wrapper"}>
                  <div className={"frame-rectangle-3-wrapper"}>
                    <div className={"frame-rectangle-4"} />
                  </div>
                </div>
                <div className={"frame-text-wrapper-36"}>STOP</div>
              </div>
              <img className={"frame-image"} src={"/img/image-3.png"} />
            </div>
          </div>
          <div className={"frame-sound-pads"}>
            <div className={"frame-group-58"}>
              <div className={"frame-div-3"}>
                <div className={"frame-pad"}>
                  <Pad
                    active={false}
                    activeFalseStyle={{
                      width: "unset",
                    }}
                    rectangleStyle={{
                      backgroundColor: "#ff0000",
                      mixBlendMode: "screen",
                    }}
                  />
                </div>
                <div className={"frame-text-wrapper-37"}>1</div>
              </div>
            </div>
            <div className={"frame-group-62"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#ff0080",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-38"}>12</div>
              </div>
            </div>
            <div className={"frame-group-61"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#ff00ff",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-39"}>11</div>
              </div>
            </div>
            <div className={"frame-group-60"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#8000ff",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-40"}>10</div>
              </div>
            </div>
            <div className={"frame-group-59"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#0000ff",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-41"}>9</div>
              </div>
            </div>
            <div className={"frame-group-54"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#0080ff",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-42"}>8</div>
              </div>
            </div>
            <div className={"frame-group-53"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#00ffff",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-42"}>7</div>
              </div>
            </div>
            <div className={"frame-group-52"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#00ff80",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-43"}>6</div>
              </div>
            </div>
            <div className={"frame-group-51"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#03a003",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-41"}>5</div>
              </div>
            </div>
            <div className={"frame-group-55"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#82ff87",
                    mixBlendMode: "lighten",
                  }}
                />
                <div className={"frame-text-wrapper-44"}>4</div>
              </div>
            </div>
            <div className={"frame-group-56"}>
              <div className={"frame-overlap-4"}>
                <Pad
                  active={false}
                  activeFalseStyle={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                  }}
                  rectangleStyle={{
                    backgroundColor: "#ffff5a",
                    mixBlendMode: "lighten",
                  }}
                />
                <div className={"frame-text-wrapper-45"}>3</div>
              </div>
            </div>
            <div className={"frame-group-63"}>
              <div className={"frame-div-3"}>
                <PadWrapper
                  padRectangleStyle={{
                    backgroundColor: "#fb7f03",
                    mixBlendMode: "screen",
                  }}
                />
                <div className={"frame-text-wrapper-37"}>2</div>
              </div>
            </div>
          </div>
          <div className={"frame-volume-slider"}>
            <SliderComponent
              boundsStyle={{
                marginBottom: "-1.00px",
                marginTop: "-1.00px",
              }}
              controlStyle={{
                background: "unset",
                backgroundColor: "#0f1014",
                borderRadius: "4px",
                gap: "300px",
                height: "38px",
              }}
              draggerStyle={{
                alignSelf: "unset",
                background: "unset",
                backgroundColor: "#ffffff",
                border: "2px solid",
                borderImage: "unset",
                borderRadius: "4px",
                boxShadow: "unset",
                marginBottom: "-1.00px",
                marginTop: "-1.00px",
              }}
              style={{
                backgroundColor: "#2e28361a",
                border: "1px solid",
                borderColor: "#000000",
                borderRadius: "4px",
                height: "38px",
                left: "-156px",
                overflow: "hidden",
                position: "absolute",
                top: "178px",
                transform: "rotate(-90.00deg)",
                width: "393px",
              }}
            />
            <div className={"frame-text-wrapper-46"}>VOLUME</div>
          </div>
          <div className={"frame-tempo-slider"}>
            <SliderComponent
              boundsStyle={{
                marginBottom: "-1.00px",
                marginTop: "-1.00px",
              }}
              controlStyle={{
                background: "unset",
                backgroundColor: "#0f1014",
                borderRadius: "4px",
                gap: "100px",
                height: "38px",
              }}
              draggerStyle={{
                alignSelf: "unset",
                background: "unset",
                backgroundColor: "#ffffff",
                border: "2px solid",
                borderImage: "unset",
                borderRadius: "4px",
                boxShadow: "unset",
                marginBottom: "-1.00px",
                marginTop: "-1.00px",
              }}
              style={{
                backgroundColor: "#2e28361a",
                border: "1px solid",
                borderColor: "#000000",
                borderRadius: "4px",
                height: "38px",
                left: "-163px",
                overflow: "hidden",
                position: "absolute",
                top: "178px",
                transform: "rotate(-90.00deg)",
                width: "393px",
              }}
            />
            <div className={"frame-text-wrapper-47"}>TEMPO</div>
          </div>
          <img className={"frame-speaker-circles"} src={"/img/speaker-circles.png"} />
        </div>
      </div>
    </div>
  );
};
