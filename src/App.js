import React, { Component } from 'react';
import './App.css';
import Form1 from './Components/Form1/Form1'
import Form2 from './Components/Form2/Form2'
import Info from "./Components/Info/Info";
import Header from "./Components/Header/Header";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import DisplayResult from './Components/DisplayResult/DisplayResult'
import Particles from 'react-particles-js';
import { BrowserRouter, Route } from 'react-router-dom'

const particleOption = {
  particles: {
    number: {
        value: 500,
        density: {
            enable: false
        }
    },
    size: {
        value: 3,
        random: true,
        anim: {
            speed: 4,
            size_min: 0.3
        }
    },
    line_linked: {
      enable: false
    },
    move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
    }
},
interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: "bubble"
        },
        onclick: {
            enable: true,
            mode: "repulse"
        }
    },
    modes: {
        bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0
        },
        repulse: {
            distance: 400,
            duration: 4
        }
    }
}
}

const initialState = {
  user1:false,
      user2:false,
      user1Info:
        {
        name:"",
        img:'',
        followers:0,
        following:0,
        noOfRepos:0,
        score:0
      },
      user2Info:
        {
        name:"",
        img:'',
        followers:0,
        following:0,
        noOfRepos:0,
        score:0
      }
    }

class App extends Component {
  constructor(props){
    super(props);
    this.state=initialState;
  }

  reset = () =>{
    this.setState(initialState)
  }

  submitValue = (name,userIndex) =>{
      const url="https://api.github.com/users/"+name;
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
        if(data.message === undefined){
          const user = {
              name:data.login,
              img:data.avatar_url,
              followers:data.followers,
              following:data.following,
              noOfRepos:data.public_repos,
              score:117*15*data.followers + 13*17*data.public_repos
          }
          console.log(user)
          if(userIndex === 1){
            this.setState({user1Info:user,user1:true})
          }else{
            this.setState({user2Info:user,user2:true})
          }
        }else{
          console.log("No username")
        }
      })
      .catch((error)=>console.log(error))
  }  

  render() {
    return (
      <div>
      <Particles className="particles123" params={particleOption} />
      <BrowserRouter>
       <div className="App container" style={mainStyle}>
       <Route exact path='/' render={props=>{
         return(
           <div className="container">
           {true ? <Header /> : <div></div>}
           <div>
          {this.state.user1 && this.state.user2 ? <DisplayResult user1={this.state.user1Info.name} user2={this.state.user2Info.name} score1={this.state.user1Info.score} score2={this.state.user2Info.score}/> : <div></div>}
        </div>
          <div className="row">
          <div className="col-lg-6">
            {this.state.user1 ? <Info user={this.state.user1Info} userNumber={1}/> : <Form1 submitValue={this.submitValue}/> } 
          </div>
          <div className="col-lg-6">
          {this.state.user2 ? <Info user={this.state.user2Info} userNumber={2}/> : <Form2 submitValue={this.submitValue}/> } 
          </div>
        </div>
        {this.state.user1 && this.state.user2 ? <button className="btn btn-lg btn-light" onClick={this.reset} >Reset</button> : <div></div>}
        </div>
         )
       }}>
       </Route>
       <Route path="/:user" render = {props=>{
         return (<PersonalInfo user={props.match.params.user}/>)
       }}></Route>
       </div>
      </BrowserRouter>
      </div>
    )
  }
}

const mainStyle={
  margin:"10px auto"
}

export default App;
