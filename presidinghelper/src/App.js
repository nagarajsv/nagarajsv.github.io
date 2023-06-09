import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome';
import Chamber from './components/chamber';
import NavBar from './components/navBar';

class App extends Component {
  state = { 
    rows: 0,
    columns: 0, 
    speeches0: [],
    speeches1: [],
    speeches2: [],
    speeches3: [],
    recency: [],
    timerShow: true,
  }

  handleSubmit = () => {
    const rows = parseInt(document.getElementById('input1').value);
    const columns = parseInt(document.getElementById('input2').value);
    this.setState({ rows: rows, columns: columns});
    document.getElementById('welcome').style.animation = 'fadeOut 0.5s';
    document.getElementById('chamber').style.animation = 'fadeIn 0.5s';
    document.getElementById('speakerSheet').style.animation = 'fadeIn 0.5s';
    document.getElementById('questionSheet').style.animation = 'fadeIn 0.5s';
    document.getElementById('motions').style.animation = 'fadeIn 0.5s'
    document.getElementById('welcome').addEventListener('animationend', () => {
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('chamber').style.display = 'block';
      document.getElementById('speakerSheet').style.display = 'block';
      document.getElementById('questionSheet').style.display = 'block';
      document.getElementById('motions').style.display = 'block';
    }, {once:true});
  }

  getSpeakers = (list) => {
    this.setState({speeches0: list})
  }

  getSpeaker = (person, speechNum, side, firstSpeech) => {
    for(let i = 0; i < this.state.speeches0.length; i++){
      if(this.state.speeches0[i].includes(person)){
        let newPerson = this.state.speeches0[i];
        const newArray = [...this.state.speeches0.slice(0, i), ...this.state.speeches0.slice(i + 1)];
        let speeches1Copy = [...this.state.speeches1]; 
        if(firstSpeech){
          newPerson += ` (${speechNum}S)`
        } else if(side === "Aff"){
          newPerson += ` (${speechNum}A)`
        } else{
          newPerson += ` (${speechNum}N)`
        }
        speeches1Copy.push(newPerson);
        this.setState({speeches0: newArray, speeches1: speeches1Copy});
        return null;
      }
    }
    for(let i = 0; i < this.state.speeches1.length; i++){
      if(this.state.speeches1[i].includes(person)){
        let newPerson = this.state.speeches1[i];
        const newArray = [...this.state.speeches1.slice(0, i), ...this.state.speeches1.slice(i+1)];
        let speeches2Copy = [...this.state.speeches2];
        if(firstSpeech){
          newPerson += ` (${speechNum}S)`
        } else if(side === "Aff"){
          newPerson += ` (${speechNum}A)`
        } else{
          newPerson += ` (${speechNum}N)`
        }
        speeches2Copy.push(newPerson);
        this.setState({speeches1: newArray, speeches2: speeches2Copy});
        return null;     
      }
    }
    for(let i = 0; i < this.state.speeches2.length; i++){
      if(this.state.speeches2[i].includes(person)){
        let newPerson = this.state.speeches2[i];
        const newArray = [...this.state.speeches2.slice(0, i), ...this.state.speeches2.slice(i+1)];
        let speeches3Copy = [...this.state.speeches3];
        if(firstSpeech){
          newPerson += ` (${speechNum}S)`
        } else if(side === "Aff"){
          newPerson += ` (${speechNum}A)`
        } else{
          newPerson += ` (${speechNum}N)`
        }
        speeches3Copy.push(newPerson);
        this.setState({speeches2: newArray, speeches3: speeches3Copy});
        return null;
      }
    }
  }

  getRecency(precedence){
    this.setState({recency: precedence})
  }

  handleTimerShowChange = () => {
    this.setState({timerShow: !this.state.timerShow})
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar speakerOnClick={this.handleSpeakerShow} speeches0={this.state.speeches0} speeches1={this.state.speeches1} speeches2={this.state.speeches2} speeches3={this.state.speeches3} recency={this.state.recency} timerShow={this.state.timerShow} handleTimerShowChange={this.handleTimerShowChange}/>
        <Welcome onSubmit={this.handleSubmit}/>
        <Chamber rows={this.state.rows} columns={this.state.columns} sendSpeakers={(list) => this.getSpeakers(list)} sendSpeaker={(person, speechNum, side, firstSpeech) => this.getSpeaker(person, speechNum, side, firstSpeech)} speeches0={this.state.speeches0} speeches1={this.state.speeches1} speeches2={this.state.speeches2} speeches3={this.state.speeches3} sendRecency={(precedence) => this.getRecency(precedence)} timerShow={this.state.timerShow}/>
      </React.Fragment>
    );
  }
}
 
export default App;
