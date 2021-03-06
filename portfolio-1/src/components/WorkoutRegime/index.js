import React from "react"
import styles from "../Style"

let toDoList = []
 
 export default class WorkoutRegime extends React.Component {
    constructor(props) {
       super(props)
       let inputRef = React.createRef()
       let filterRef = React.createRef()
       let deleteText = React.createRef()
       this.state = {toDoList, curId:toDoList.length+1, inputRef, filterRef, deleteText, filtered:false, value: this.props.value}
    }
    completeItem = (itemId) => {
       this.setState((prevState) => {
          let prevList = [...prevState.toDoList]
          let itemIndex = prevList.findIndex((item) => item.id === itemId)
          prevList[itemIndex] = {...prevList[itemIndex], completed: !prevList[itemIndex].completed}
          return {toDoList: prevList}
       }) 
    }
    handleKeyPress = (event) => {
       if (event.key === "Enter") {
          this.addToDoItem()
       }
    }
    addToDoItem = () => { 
       let prevValue = this.state.inputRef.current.value
       this.setState(prevState => ({
          toDoList : [...prevState.toDoList,
             {completed:false, description:prevValue, id:prevState.curId}],
             curId: prevState.curId+1
          }))
       this.state.inputRef.current.value = ""
    }
    removeItem(i) {
       var toDoList = this.state.toDoList
       toDoList.splice(i, 1)
       this.setState ({
          toDoList : toDoList
       })
    }

    render () {
       let toDoList = this.state.toDoList
       if (this.state.filtered) {
          toDoList = toDoList.filter(item => !item.completed)
       }
          toDoList = toDoList.map((item) => (
          <div style = {styles.ToDoListStyle} key = {item.id}>
             <label style= {styles.Input}>
                <input ref = {this.state.checkRef} type = "checkbox" onChange={() => this.completeItem(item.id)}defaultChecked={item.completed}></input>
                <span style = {item.completed ? {textDecoration: "line-through"} : undefined}>{item.description}</span>
                <button style = {styles.DeleteButton} onClick = {() => this.removeItem()}>Delete</button>
             </label>
          </div>
       ))
       return (
          <>
             <h1 style={styles.Header}>Today's Workout Regime</h1>
                <label>
                   <input ref = {this.state.filterRef} type = "checkbox" onChange={() => this.setState({filtered: !this.state.filtered})} defaultChecked={false}></input>
                   Filter completed items
                </label>
             <div style = {{padding: "5px"}}>
               <hr></hr>
               {toDoList}
             </div>
             <div style = {{padding : "5px"}}>
                <input onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef}></input>
                <button style = {styles.AddWorkOutButton} onClick={this.addToDoItem}>Add New Exercise</button>
             </div>

          </>
       )
    }
 }