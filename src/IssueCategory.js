import React from "react";
import Logo from "./Images/illyriasupport-wordmark.svg";
import Button from "./Images/ProductsGradientButton.svg";
import "./IssueCategoryStyling.css"
import IssueProps from "./IssueCategoryComponent";
import {IssueCategoryComponents} from "./IssueCategoryComponent";
let IssueCategory = () => {
    const map = IssueCategoryComponents.map(info => <IssueProps image = {info.image} alt = {info.alt} text = {info.text}/>);
    return(
        <div>
            <img className="logo" src={Logo} alt = "Logo"/>
            <h1 className="titleIssue">Great, now how can we help you?</h1>
            <h1 className="subTitleIssue">Pick the category that best matches your needs</h1>
            <div className={"boxIssue"}>{map} </div>
            <a href={"#"}><img className="fixedIssue" src={Button}/></a>
        </div>
    )
};

export default IssueCategory;
