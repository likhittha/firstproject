import { useState } from "react";
import "./header.css";
export const StateComponent = () => {
  // This is useState hook in react

  const [name, setName] = useState("likhitha");
  const [isPandhi, setIsPandhi] = useState(false);

  const handleBtnClick = () => {
    console.log("btn clicked");
    setName("likhi");
    setIsPandhi(!isPandhi);
  };

  return (
    <>
      <div className="bg-[#000]  text-[#fff] p-4 items-center justify-center flex">
        <div>This is StateComponent</div>
      </div>
      <div className="stateBody">
        {/* For Button */}
        <div className="Container">
          <div
            onClick={handleBtnClick}
            className="bg-[#640D6B] p-3 items-center justify-center flex text-white mt-3 rounded-full cursor-pointer hover:bg-[#B51B75]"
          >
            click me to add
          </div>
        </div>
        <div>{name}</div>
        {/* End of button */}
        <div>
          {/* This is called ternary operation 
        value ? (?mark means if its true) : (mark means else value ) */}

          {isPandhi ? (
            <div> veer is pandhi </div>
          ) : (
            <div> likhitha is not pandhi </div>
          )}
        </div>
      </div>
    </>
  );
};
