import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Input from "./Input";
import Output from "./Output";

const Terminal = () => {
  const inputData = useSelector((store) => store.input);

  return (
    <div className="flex items-center justify-center h-screen bg-[#131312]">
      <div className="h-[600px] overflow-auto shadow-xl w-[1000px] rounded-lg bg-[#1e1f1f]">
        <Navbar />
        {inputData.map((input, index) => (
          <Output key={index} input={input} />
        ))}
        <Input />
      </div>
    </div>
  );
};

export default Terminal;
