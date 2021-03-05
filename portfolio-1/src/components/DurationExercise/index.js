//referrence videos : 
// for Starting Timer : https://www.youtube.com/watch?v=eiEOpsKbZUc
// for Resetting Timer : https://www.youtube.com/watch?v=GXsY5cfjrAw&list=PLvXDmnBbOF7RnYiZvDwl2Pzcs2kfi10wd&index=6
import React from "react"
import styles from '../Style'

export default class DurationExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.value }
        //used from video
        this.state = {
            timerStarted: false,
            timerStopped: true,
            minutes: 0,
            seconds: 0,
        }
    }
    //used video code to create 
    TimerStart() {
        if (this.state.timerStopped) {
            setInterval(() => {
                this.setState({ timerStarted: true, timerStopped: false })
                if (this.state.timerStarted) {
                    if (this.state.seconds >= 60) {
                        this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0 }))
                    }
                    this.setState((prevState) => ({ seconds: prevState.seconds + 1 }))
                }
            }, 1000)
        }
    }
    //used from video to create
    TimerReset() {
        this.setState({ timerStarted: false, timerStopped: true, seconds: 0, minutes: 0 })
    }

    render() {
        return (
            <>
                <h2 style={styles.Header}>{this.props.name}</h2>
                <p style={styles.Paragraph}>Timer: {this.state.minutes}:{this.state.seconds}</p>
                <button style={styles.ButtonStyle} onClick={() => this.TimerStart()}>Start</button>
                <button style={styles.ResetButtonStyle} onClick={() => this.TimerReset()}>Reset</button>
            </>
        )
    }
}