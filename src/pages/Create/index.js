import React, {Component} from "react";
import Race from "../../components/Race";
import Subrace from "../../components/Subrace";

class Create extends Component {
    state = {
        race: {
            name: "none",
            sub: "none",
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0
        },
        skills: {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        }

    };

    componentDidMount() {
        
    };

    handleRaceChange = event => {
        event.preventDefault();
        let race = {...this.state.race};
        race.name = event.target.value;
        this.setState({race});


    }


    

    render() {
        return (
            <div>
                <Race
                handleRaceChange={this.handleRaceChange}
                >
                </Race>
                <Subrace test="hello">
                </Subrace>
            </div>
        );
    }
}

export default Create;