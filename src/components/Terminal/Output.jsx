import React from "react";

import "@fontsource/fira-code";
const Output = ({ input }) => {
  const codeStyle = {
    fontFamily: "Fira Code",
  };
  console.log(input);

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

        {Object.entries(input).map(([key, value]) => {
          return (
            <>
              <div className="text-lg text-white ">
                <font color="#42E66C">└─</font>
                <font color="#BD93F9">
                  <b>$</b>
                </font>
                <span style={codeStyle} className="text-base ml-[9px]">
                  {key}
                </span>
                <div className="text-base">{value}</div>
              </div>
            </>
          );
        })}
      </pre>
    </div>
  );
};

export default Output;
