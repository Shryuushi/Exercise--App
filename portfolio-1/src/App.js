import './App.css';
import React from "react"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import styles from './components/Style'

const MENU = "menu"
const DURATION_SCREEN = "duration_screen"
const REPETITION_SCREEN = "repetition_screen"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    let exercise = [
      { objType: "repetition", name: "Push-Up", value: 0 },
      { objType: "duration", name: "Bicycling", timeValue: "0" },
      { objType: "repetition", name: "Shoulder-press", value: 0 },
      { objType: "duration", name: "Running", timeValue: "0" },
      { objType: "repetition", name: "Squats", value: 0 },
    ]
    this.state = {
      currentScreen: MENU,
      selectedItem: undefined,
      currentExercise: exercise,
    }
  }
  updateValue(newValue) {
    let propertyName = this.state.selectedItem.objType === "repetition" ? "value" : "timeValue"
    this.setState((prevState) => {
      let objectToUpdate = prevState.currentExercise.find((obj) => obj === this.state.selectedItem)
      objectToUpdate[propertyName] = newValue
      return { currentExercise: this.state.currentExercise }
    })
  }
  render() {
    let screen
    switch (this.state.currentScreen) {
      case MENU:
        let exerciseMenu = this.state.currentExercise
        screen =
          <div style={styles.BodyStyle}>
            <h2 style={styles.Header}>Choose your exercise!</h2>
            <ul style={{ "list-style-type": "none" }}>
              {exerciseMenu.map((obj, index) => (
                <li key={index}>
                  <button style={styles.ExerciseButtons} onClick={() =>
                    this.setState({
                      currentScreen: obj.objType === "repetition"
                        ? REPETITION_SCREEN
                        : DURATION_SCREEN,
                      selectedItem: obj,
                    })}>
                    {obj.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        break
      case REPETITION_SCREEN:
        screen =
          <div style={styles.BodyStyle}>
            <RepetitionExercise {...this.state.selectedItem} updateValue={(value) => this.updateValue(value)}></RepetitionExercise>
            <div style={styles.BottomBorder}>
              <button style={styles.BackButton} onClick={() =>
                this.setState({ currentScreen: MENU })}>
                Back
              </button>
            </div>
          </div>
        break
      case DURATION_SCREEN:
        screen =
          <div style={styles.BodyStyle}>
            <DurationExercise {...this.state.selectedItem}></DurationExercise>
            <div style={styles.BottomBorder}>
              <button style={styles.BackButton} onClick={() =>
                this.setState({ currentScreen: MENU })}>
                Back
              </button>
            </div>
          </div>
        break
      default:
        screen = undefined
    }
    return screen
  }
}

