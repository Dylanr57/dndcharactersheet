import React from "react";
import "./style.css";

if(5>3){
    console.log("hello");
}

function Race(props){
    return (
            <form>
                <div className="form-group">
                    <select className="form-control" id="race" value={props.race} onChange={props.handleRaceChange}>
                        <option value="none">Choose a race</option>
                        <option>Aarakocra</option>
                        <option>Aasimar</option>
                        <option>Bug Bear</option>
                        <option>Dragonborn</option>
                        <option>Dwarf</option>
                        <option>Elf</option>
                        <option>Firbolg</option>
                        <option>Gnome</option>
                        <option>Goblin</option>
                        <option>Grung</option>
                        <option>Half Elf</option>
                        <option>Half Orc</option>
                        <option>Halfling</option>
                        <option>Hobgoblin</option>
                        <option>Human</option>
                        <option>Kenku</option>
                        <option>Kobold</option>
                        <option>Lizardfolk</option>
                        <option>Orc</option>
                        <option>Tabaxi</option>
                        <option>Teifling</option>
                        <option>Triton</option>
                        <option>Yuan-Ti Pureblood</option>
                    </select>
                </div>
            </form>
    )
}
export default Race;