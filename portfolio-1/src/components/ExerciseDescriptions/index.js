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
        this.state = {
            selectedItem: undefined,
            currentDescription: description,
            value : this.props.value 
        }
        this.myRef = React.createRef()
    }
/*updateValue(newValue) {
    let propertyName = this.state.selectedItem.objType === "repetition" ? "value" : "timeValue"
    this.setState((prevState) => {
      let objectToUpdate = prevState.currentDescription.find((obj) => obj === this.state.selectedItem)
      objectToUpdate[propertyName] = newValue
      return { currentDescription: this.state.currentDescription }
    })
  }*/

  updateDescription = () => {
    this.setState(() => {
        this.props.updateValue(this.props.value)
        return {
            value : this.props.value
        }
    })
  }
    render() {
        return (
            <>
                <p>{this.state.value}</p>
                <button onClick= {() => this.updateDescription()}>{this.props.name}</button>
            </>
        )
    }
}