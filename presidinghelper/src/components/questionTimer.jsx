import React, { Component } from 'react';

class QuestionTimer extends Component {
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
              if (this.state.time === 3000) {
                this.setState({ isRunning: false }, () => {
                  this.applyAnimation();
                });
              }
            });
          }
        }, 10);
      }

      applyAnimation = () => {
        const timerElement = document.getElementById('timer2');
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
            if(this.state.time === 1450){
                document.getElementById('player').play();
            }
        }
        return (
          <div className="stopwatch-container">
            <p id="timer2" className="stopwatch-time">
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

    export default QuestionTimer;