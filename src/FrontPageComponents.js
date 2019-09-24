import React from "react";
import "./style.css";
import Factions from "./Images/factions.svg";
import FactionsX from "./Images/factions_x.svg"
import SkyBlocks from "./Images/skyblocks.svg"
import Collectors from "./Images/Collectors.svg";
import OutPosts from "./Images/outpost.svg";
import FTop from "./Images/Ftop.svg";
import Core from "./Images/Core.svg";
import Discord from "./Images/Discord.svg";
import Obsidian from "./Images/Obsidian.svg";

let Props = (info) => {
    return (
        <div className="items">
            <img src={info.image} alt={info.alt}/>
            <p>{info.text}</p>
        </div>);
};
const FrontPageComponents = [
        {
            id: 1,
            image: Factions,
            alt: "Factions",
            text: "FACTIONS"
        },
        {
            id: 2,
            image: SkyBlocks,
            alt: "SkyBlock",
            text: "SKYBLOCK"
        },

        {
            id: 3,
            image: FactionsX,
            alt: "FactionsX",
            text: "FACTIONSX"
        },
    ];
const FrontPageComponents2 = [
    {
        id: 4,
        image: Collectors,
        alt: "Collectors",
        text: "COLLECTORS"
    },
    {
        id: 5,
        image: OutPosts,
        alt: "Outposts",
        text: "OUTPOSTS"
    },

    {
        id: 6,
        image: FTop,
        alt: "FTop",
        text: "FTOP"
    },
];


const FrontPageComponents3 = [
    {
        id: 7,
        image: Core,
        alt: "Core",
        text: "CORE"
    },
    {
        id: 8,
        image: Discord,
        alt: "Discord",
        text: "DISCORD"
    },

    {
        id: 9,
        image: Obsidian,
        alt: "Obsidian",
        text: "OBSIDIAN"
    },
];

export default FrontPageComponents
export {FrontPageComponents2}
export {FrontPageComponents3}
export {Props}
