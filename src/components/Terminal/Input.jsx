import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inputActions } from "../../store/inputSlicer";
import "@fontsource/fira-code";
const Input = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(inputActions.storeInput({ [inputValue]: "Sanket" }));

      setInputValue("");
    }
  };

  const codeStyle = {
    fontFamily: "Fira Code",
  };

  return (
    <div className="ml-[9px] mt-[9px] text-white">
      <pre>
        <div>
          <font color="#42E66C">┌──(</font>
          <font color="#BD93F9">
            <b>sanks㉿zer00day</b>
          </font>
          <font color="#42E66C">)-[</font>
          <b>~</b>

          <font color="#42E66C">]</font>
        </div>
        <div className="text-lg">
          <font color="#42E66C">└─</font>
          <font color="#BD93F9">
            <b>$</b>
          </font>
          <input
            style={codeStyle}
            className="bg-[#1e1f1f] text-base ml-[9px] mt-0 pt-0 text-white outline-none"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
        </div>
      </pre>
    </div>
  );
};

export default Input;
