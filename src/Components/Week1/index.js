import React from "react";
import Navbar from "../Main/Navbar";
import FilterProducts from "./FilterProducts/index";
import ThemeChanger from "./ThemeChanger";
import FormValidation from "./FormValidation/index";
import "../../styles/Task.css";

const WeekOne = () => {
  return (
    <div className="Task">
      <Navbar />
      <div className="Task1">
        <div className="FilterProducts">
          <div className="head">
            <span className="quotation">A. </span>Product Filter and Sorting
            with Price
          </div>
          <div className="content">
            <FilterProducts />
          </div>
        </div>
      </div>
      <div className="Task2">
        <div className="ThemeChanger">
          <div className="head">
            {" "}
            <span className="quotation">B. </span>Changing theme color (Context)
          </div>
          <div className="content">
            <ThemeChanger />
          </div>
        </div>
      </div>
      <div className="Task3">
        <div className="FormValidation">
          <div className="head">
            <span className="quotation">C. </span>Form Validation
          </div>
          <div className="content">
            <FormValidation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekOne;
