import React from "react";
import "./style.css";

let subraces = [];

function findSubraces(race){
    switch(race){
        case "Aasimar":
        subraces = ["Protector", "Scourge", "Fallen"];
        break;
        case "Dwarf":
        subraces = ["Hill Dwarf", "Mountain Dwarf"];
        break;
        case "Elf":
        subraces = ["High Elf", "Wood Elf", "Drow"];
        break;
        case "Gnome": 
        subraces = ["Forest Gnome", "Rock Gnome", "Deep Gnome"];
        break;

    }
}

function Subrace(props) {


    return (
        <div>
            {newTest(props.test)}
        </div>
    )
}

export default Subrace;