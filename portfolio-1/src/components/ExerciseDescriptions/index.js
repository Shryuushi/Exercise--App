import React from "react"

export default class ExerciseDescription extends React.Component {
    constructor(props) {
        super(props)
        let description = [
            {objType: "repetition", name: "Push-Up", value: "This is a push-up"},
            {objType: "duration", name: "Bicycling", timeValue: "This is a push-up"},
            {objType: "repetition", name: "Shoulder-press", value: "This is a push-up"},
            {objType: "duration", name: "Running", timeValue: "This is a push-up"},
            {objType: "repetition", name: "Squats", value: "This is a push-up"},
        ]
        this.state = {description}
    }

    render() {
        return (
            <>
                <h2>{this.props.name}</h2>
                <p>{this.state.value}</p>
                <button onClick= {() => this.updateDescription()}>{this.props.name}</button>
            </>
        )
    }
}