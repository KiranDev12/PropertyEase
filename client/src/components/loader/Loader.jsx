import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./loader.scss"; // Import CSS file for loader styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#fece51"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
