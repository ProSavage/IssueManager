import React from "react";
import "./style.css"
import Logo from "./Images/illyriasupport-wordmark.svg"
import Factions from "./Images/factions.svg";
import FactionsX from "./Images/factions_x.svg"
import SkyBlocks from "./Images/skyblocks.svg"
import Collectors from "./Images/Collectors.svg";
import OutPosts from "./Images/outpost.svg";
import FTop from "./Images/Ftop.svg";
import Core from "./Images/Core.svg";
import Discord from "./Images/Discord.svg";
import Obsidian from "./Images/Obsidian.svg";
let FrontPage = () => {
    return (
        <div>
            <img className="logo" src={Logo} alt="bruhmomentdidntwork"/>
            <h1 className= "title">Which product are you having trouble with?</h1>
            <p className= "subTitle">Select a product from the list. For multiple reports or issues, please report
                this process for each, or <a href="#" style={{color: "#C679E3"}}>contact us.</a></p>
                <div className="box">
                    <div className="items">
                        <img src={Factions} alt="Factions"/>
                        <p>FACTIONS</p>
                    </div>
                    <div className="items">
                        <img src={SkyBlocks} alt="SkyBlock"/>
                        <p>SKYBLOCK</p>
                    </div>
                    <div className="items">
                        <img src={FactionsX} alt="FactionsX"/>
                        <p>FACTIONSX</p>
                    </div>
                </div>
            <hr></hr>
                <div className="box">
                    <div className="items">
                        <img src={Collectors} alt="Collectors"/>
                        <p>COLLECTORS</p>
                    </div>
                    <div className="items">
                        <img src={OutPosts} alt="OutPosts"/>
                        <p>Outposts</p>
                    </div>
                    <div className="items">
                        <img src={FTop} alt="Ftop"/>
                        <p>FTOP</p>
                    </div>
                </div>
                <div className="box">
                    <div className="items">
                        <img src={Core} alt="Core"/>
                        <p>CORE</p>
                    </div>
                    <div className="items">
                        <img src={Discord} alt="Discord"/>
                        <p>DISCORD</p>
                    </div>
                    <div className="items">
                        <img src={Obsidian} alt="Obsidian"/>
                        <p>OBSIDIAN</p>
                    </div>
                </div>

        </div>
    )

};


export default FrontPage;
