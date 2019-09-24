import React from "react";
import Bug from "./Images/Bug.svg"
import Question from "./Images/Question.svg";
import Request from "./Images/Request.svg";
let IssueProps = (info) => {
    return(
        <div className="itemsIssue">
            <img src={info.image} alt={info.alt}/>
            <p>{info.text}</p>
        </div>
    )
};

const IssueCategoryComponents = [
    {
        id: 1,
        image: Bug,
        alt: "Bug",
        text: "BUG"
    },
    {
        id: 2,
        image: Question,
        alt: "Question",
        text: "QUESTION"
    },
    {
        id: 3,
        image: Request,
        alt: "Request",
        text: "REQUEST"
    }
];
export default IssueProps;
export {IssueCategoryComponents};
