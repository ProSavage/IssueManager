import React from "react";
import "./style.css"
import Logo from "./illyriasupport-wordmark.svg"
import Factions from "./factions.svg";
import FactionsX from "./factions_x.svg"
import SkyBlocks from "./skyblocks.svg"
import Collectors from "./Collectors.svg";
import OutPosts from "./outpost.svg";
import FTop from "./Ftop.svg";
import Core from "./Core.svg";
import Discord from "./Discord.svg";
import Obsidian from "./Obsidian.svg";
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
                        <img src={SkyBlocks} alt="SkyBlocks"/>
                        <p>SKYBLOCKS</p>
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
