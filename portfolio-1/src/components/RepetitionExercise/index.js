import React from "react"
import styles from "../Style"

export default class RepetitionExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.value }
    }
    addReps() {
        this.setState((prevState) => {
            let newValue = prevState.value + 1
            this.props.updateValue(newValue)
            return {
                value: newValue,
            }
        })
    }
    reset() {
        this.setState((prevState) => {
            let newValue = prevState.value - prevState.value
            this.props.updateValue(newValue)
            return {
                value: newValue
            }
        })
    }
    render() {
        return (
            <>
                <h2 style={styles.Header}>{this.props.name}</h2>
                <p style={styles.Paragraph}>Reps : {this.state.value}</p>
                <button style={styles.ButtonStyle} onClick={() => this.addReps()}>Complete Rep</button>
                <button style={styles.ResetButtonStyle} onClick={() => this.reset()}>Reset</button>
            </>
        )
    }
}