import React from "react"
import styles from "../Style"


export default class ExerciseDescription extends React.Component {
    constructor(props) {
        super(props)
        let description = [
            {name: "Push-Up", value: "How to do a push-up", image: "https://www.verywellfit.com/thmb/z419-rYm2sh-l-k-wUqlfCzmFms=/1000x1000/smart/filters:no_upscale()/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif"},
            {name: "Bicycling", timeValue: "How to ride a bike", image: "https://i.pinimg.com/originals/24/ae/8d/24ae8def288851503cf68340df174963.gif"},
            {name: "Shoulder-press", value: "How to do a shoulder-press", image: "https://thumbs.gfycat.com/ExcitableOblongFluke-small.gif"},
            {name: "Running", timeValue: "How to run", image: "https://media.tenor.com/images/4fa01fdb3f124965b79c1ca9f54c82cb/tenor.gif"},
            {name: "Squats", value: "How to do a squat", image: "https://thumbs.gfycat.com/BlueWetHarvestmouse-small.gif"},
        ]
        this.state = {
            description,
        }
    }

    render() {
        let exerciseMenu = this.state.description
        return (
            <div>
                <h1 style = {styles.Header}>Learn more about each exercise!</h1>
                <ul style={{"list-style-type" : "none"}}>
                    {exerciseMenu.map((obj, id) => (
                        <li key={id}>
                            <div style = {styles.BottomBorder}>
                                <h2 style = {styles.Paragraph}>{obj.name} : </h2>
                                <p style = {styles.Text}>{obj.value}{obj.timeValue} :</p>
                                <img src = {obj.image} style = {styles.Images}></img>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}