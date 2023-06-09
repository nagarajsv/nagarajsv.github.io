import React, { Component } from 'react';

class SpeechTimer extends Component {
    state = {
        time: 0,
        isRunning: false
    }
    
    componentDidMount() {
        this.intervalId = setInterval(() => {
          if (this.state.isRunning) {
            this.setState(prevState => ({
              time: prevState.time + 1
            }), () => {
              if (this.state.time === 19000) {
                this.setState({ isRunning: false }, () => {
                  this.applyAnimation();
                });
              }
            });
          }
        }, 10);
      }

      applyAnimation = () => {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
          timerElement.style.animationPlayState = "running";
        }
      }
    
      componentWillUnmount() {
        clearInterval(this.intervalId);
      }
    
      hours = () => {
        return Math.floor(this.state.time / 360000);
      };
    
      minutes = () => {
        return Math.floor((this.state.time % 360000) / 6000);
      };
    
      seconds = () => {
        return Math.floor((this.state.time % 6000) / 100);
      };
    
      milliseconds = () => {
        return this.state.time % 100;
      };
    
      startAndStop = () => {
        this.setState(prevState => ({
          isRunning: !prevState.isRunning
        }));
      };
    
      reset = () => {
        this.setState({
          time: 0
        });
      };
    
      render() {
        if(this.props.soundfx)
        {
            if(this.state.time === 11950){
                document.getElementById('player').play();
            }
            else if(this.state.time === 14980){
                document.getElementById('player2').play();
            }
            else if(this.state.time === 17480){
                document.getElementById('player3').play();
            } 
            else if(this.state.time === 18000){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18100){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18200){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18300){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18400){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18500){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18600){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18700){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18800){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18900){
                document.getElementById('player').play();
            }
            else if(this.state.time === 18999){
                document.getElementById('player').play();
            }
        }
        return (
          <div className="stopwatch-container">
            <p id="timer" className="stopwatch-time">
              {this.minutes().toString().padStart(2, "0")}:
              {this.seconds().toString().padStart(2, "0")}.
              {this.milliseconds().toString().padStart(2, "0")}
            </p>
            <div className="stopwatch-buttons">
              <button className="btn stopwatch-button" onClick={this.startAndStop}>
                {this.state.isRunning ? "Stop" : "Start"}
              </button>
              <button className="btn stopwatch-button" onClick={this.reset}>
                Reset
              </button>
            </div>
          </div>
        );
      }
    }
 
export default SpeechTimer;