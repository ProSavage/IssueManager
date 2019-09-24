import React from "react";
import "./style.css"
import Logo from "./Images/illyriasupport-wordmark.svg"
import FrontPageComponents from "./FrontPageComponents";
import {Props} from "./FrontPageComponents";
import "./style.css"
import {FrontPageComponents2} from "./FrontPageComponents";
import {FrontPageComponents3} from "./FrontPageComponents";

let FrontPage = () => {
    //Factions, SkyBlock, FactionX
    const map = FrontPageComponents.map(info => <Props key = {info.id} image = {info.image} alt = {info.alt} text = {info.text}/>);
    //Collectors, Outposts, Ftop
    const map2 = FrontPageComponents2.map(info => <Props key = {info.id} image = {info.image} alt = {info.alt} text = {info.text}/>);
    //Core, Discord, Obsidian
    const map3 = FrontPageComponents3.map(info => <Props key = {info.id} image = {info.image} alt = {info.alt} text = {info.text}/>);
    return (
        <div>
            <img className="logo" src={Logo} alt="IllyriaSupport"/>

            <h1 className= "title">Which product are you having trouble with?</h1>

            <p className= "subTitle">Select a product from the list. For multiple reports or issues, please report
                this process for each, or <a href="#" style={{color: "#C679E3"}}>contact us.</a></p>

                <div className="box">
                    {map}
                </div>

            <hr></hr>

                <div className="box">
                    {map2}
                </div>

                <div className="box">
                    {map3}
                </div>

        </div>
    )

};


export default FrontPage;
