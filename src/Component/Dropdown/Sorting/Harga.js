import React, {
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";
import { Input } from "reactstrap";
  
  const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);
  
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);
      return (
        <div className="range-slider">
          <p>{label}</p>
          <h3>value: {sliderVal}</h3>
          <input
            type="range"
            value={sliderVal}
            {...sliderProps}
            className={`slider ${classes}`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
          />
        </div>
      );
    }
  );

const Harga = () => {
    const [parentVal, setParentVal] = useState(10);

    const sliderValueChanged = useCallback(val => {
      console.log("NEW VALUE", val);
      setParentVal(val);
    });

    const sliderProps = useMemo(
      () => ({
        min: 0,
        max: 1000000,
        value: parentVal,
        step: 2,
        onChange: e => sliderValueChanged(e)
      }),
      [parentVal]
    );

    return (
      <div>
        {/* <h1>PARENT VALUE: {parentVal}</h1> */}
        <RangeSlider {...sliderProps} classes="additional-css-classes" />
      </div>
    // <>
    // <div className="title-fasilitas">Min</div>
    //     <Input />
    //     -
    //     <Input />
    // <div className="title-fasilitas">Max</div>

    // </>
    );
  };

export default Harga