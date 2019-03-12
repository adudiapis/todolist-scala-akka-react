import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumpster, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faDumpster,faPen,faTrash)

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
    checking:false,
    rows:10,
    cols:1
      };
    }

buttonClick(){
   alert("came here")
 }

 subComponent() {
   console.log("Creating subComponent");
   return (<div>{this.createtasks(this.state)}</div>);
 }

  createtasks(props){
     let table = []
     let tasks = this.createTasks()
     let tasks_from_web = this.getTasks()
     // Outer loop to create parent
     console.log("create Tasks:"+tasks);
     for (let i = 0; i < tasks.length; i++) {
       console.log("create Tasks:"+tasks[i]);
       table.push(<div className="task-row" >
       <div className= "row">
       <div className="TaskId col-sm-3">Id: {tasks[i]["taskId"]}</div>
       <div className="TaskTitle col-sm-6">{tasks[i]["Title"]}</div>
       <div className="pen col-sm-2">
            <a href="#">
            <FontAwesomeIcon  className="pen-icon" onClick={this.buttonClick} icon="pen" />
            </a>
       </div>
       <div className="dumpster col-sm-1">
            <a href="#">
            <FontAwesomeIcon className="dumpster-icon" onClick={this.buttonClick}icon="trash" />
        </a>
        </div>
       </div>
       <div className="TaskDecsription"> {tasks[i]["Description"]}</div>
       </div>)
     }
     return table
   }

  getTasks = () => {
    console.log('getting tasks:');
    fetch('/tasks')
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data
        });
      })
      .catch(e => {
        console.log('Error:' + e);
      })
  }

  addTask = () => {
    fetch('/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.title.value,
        description: this.description.value,
      })
    }).then(res => res.json())
      .then(data => {
      this.setState({
        tasks: data
        });
      })
      .catch(e => {
        console.log('Error:' + e);
    })
  }

  createTasks(){
    let tasks = []
    for (let i = 0; i < this.state.rows; i++) {
      tasks.push({taskId:Math.floor(Math.random() * 100) + 1,Title:"Task title.",Description:"Task description."})
    }
    return tasks
  }

render() {
  return (
  <div className="App">
    <div>
      <h3 className="main-page-header">ToDo list with Scala, React and Akka HTTP</h3>
    </div>
    <div className="row">
      <div className="main-page-side-column col-sm-3">
      </div>
      <div className="main-page-task-column col-sm-6">
      {this.subComponent()}
      </div>
      <div className="main-page-side-column col-sm-3">
      <div className = "container">
      <div>Title: <input
      ref={input => {
            this.title = input;
          }}
          type="text" id="taskTitle"/></div>
      <br></br>
      <div>Description: <input
      ref={input => {
            this.description = input;
          }}type="text" id="Decription"/></div>
        <br></br>
      <div>
      <button onClick={this.addTask}>
        Add Task
      </button>
      </div>
      </div>
      </div>
    </div>
  </div>
  );
}
}

export default App;
