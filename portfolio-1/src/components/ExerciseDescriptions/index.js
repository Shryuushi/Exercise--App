import React from "react"
import styles from "../Style"


export default class ExerciseDescription extends React.Component {
    constructor(props) {
        super(props)
        let description = [
            {id: 1, objType: "repetition", name: "Push-Up", value: "This is a push-up", image: "https://www.verywellfit.com/thmb/z419-rYm2sh-l-k-wUqlfCzmFms=/1000x1000/smart/filters:no_upscale()/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif"},
            {id: 2, objType: "duration", name: "Bicycling", timeValue: "This is a ", image: "https://i.pinimg.com/originals/24/ae/8d/24ae8def288851503cf68340df174963.gif"},
            {id: 3, objType: "repetition", name: "Shoulder-press", value: "This is a push-up", image: "https://thumbs.gfycat.com/ExcitableOblongFluke-small.gif"},
            {id: 4, objType: "duration", name: "Running", timeValue: "This is a push-up", image: "https://media.tenor.com/images/4fa01fdb3f124965b79c1ca9f54c82cb/tenor.gif"},
            {id: 5, objType: "repetition", name: "Squats", value: "This is a push-up", image: "https://thumbs.gfycat.com/BlueWetHarvestmouse-small.gif"},
        ]
        this.state = {
            currentExercise : description,
        }
    }

    render() {
        let exerciseMenu = this.state.currentExercise
        return (
            <div style = {styles.BodyStyle}>
                <h1 style = {styles.Header}>Learn more about each exercise!</h1>
                <p style = {styles.Paragraph}>Select an exercise :</p>
                <ul style={{"list-style-type" : "none"}}>
                    {exerciseMenu.map((obj) => (
                        <li key={obj.id}>
                            <h3 style = {styles.Header}>{obj.name} :</h3>
                            <p style = {styles.Paragraph}>{obj.value}</p>
                            <img src = {obj.image} style = {styles.Images}></img>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}