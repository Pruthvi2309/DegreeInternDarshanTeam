import React, { Component } from 'react'

class Form extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            fname:'',
            lname:'',
            dob:'',
            age:''
        }
    }
    changefname=event=>{
        this.setState({
            fname:event.target.value
        })
    }

    changelname=event=>{
        this.setState({
            lname:event.target.value
         })
        }
        
    changedob=event=>{
        this.setState({
            dob:event.target.value
         })
        }

    changeage=event=>{
        this.setState({
            age:event.target.value
             })
    }
    onsubmit=event=>{
        alert(`${this.state.fname},${this.state.lname},${this.state.dob},${this.state.age}`)
    }
    render() {
    return (
        <form onSubmit={this.onsubmit}>
      <div>
            <label>First Name</label>
            <input type="text" value={this.state.fname} onChange={this.changefname}/>
        </div>
        <div>
        
            <label>Last Name</label>
            <input type="text" value={this.state.lname} onChange={this.changelname}/>
        </div>
        <div>
            <label>Date of birth</label>
            <input type="date" value={this.state.dob} onChange={this.changedob}/>
        </div>
        <div>
            <label>Age</label>
            <input type="text" value={this.state.age} onChange={this.changeage}/>


      </div>
      <div>
            <button onClick={this.state.onSubmit}>submit</button>
      </div>
      </form>
    )
  }
}

export default Form
