import React from "react";
import Logo from "./Images/illyriasupport-wordmark.svg";
import Button from "./Images/GradientButton.svg";
import "./IssueCategoryStyling.css"

let IssueCategory = () => {
    return(
        <div>
            <img className="logo" src={Logo}/>
            <img className="logo" src={Button}/>
        </div>
    )
};

export default IssueCategory;
