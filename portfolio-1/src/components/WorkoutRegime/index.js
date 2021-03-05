import React from "react"

let toDoList = []
 
 export default class WorkoutRegime extends React.Component {
    constructor(props) {
       super(props)
       let inputRef = React.createRef()
       let filterRef = React.createRef()
       this.state = {toDoList, curId:toDoList.length+1, inputRef, filterRef, filtered:false}
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
    render () {
       let toDoList = this.state.toDoList
       if (this.state.filtered) {
          toDoList = toDoList.filter(item => !item.completed)
       }
          toDoList = toDoList.map((item) => (
          <div key = {item.id}>
             <label>
                <input ref = {this.state.checkRef} type = "checkbox" onChange={() => this.completeItem(item.id)}defaultChecked={item.completed}></input>
                <span style = {item.completed ? {textDecoration: "line-through"} : undefined}>{item.description}</span>
             </label>
          </div>
       ))
       return (
          <>
             <h1>Today's Workout Regime</h1>
                <label>
                   <input ref = {this.state.filterRef} type = "checkbox" onChange={() => this.setState({filtered: !this.state.filtered})} defaultChecked={false}></input>
                   Filter completed items
                </label>
             <div style = {{padding: "5px"}}>
                <hr></hr>
                {toDoList}
             </div>
                <hr></hr>
             <div style = {{padding : "5px"}}>
                <input onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef}></input>
                <button onClick={this.addToDoItem}>Add New Exercise</button>
             </div>
          </>
       )
    }
 }