import React, { Component } from 'react';
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 0, started: false };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.stop = this.stop.bind(this);
    this.clear = this.clear.bind(this);
    this.addHours = this.addHours.bind(this);
    this.addMinutes = this.addMinutes.bind(this);
    this.add30Minutes = this.add30Minutes.bind(this);
    this.add10Minutes = this.add10Minutes.bind(this);
    this.add5Minutes = this.add5Minutes.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    if (minutes < 10) {
    	minutes = "0" + minutes
    }

    if (seconds < 10) {
    	seconds = "0" + seconds
    }

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.state.seconds > 0 && this.state.started === false) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({ started: true });
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
      this.setState({ started: false });
    }
  }

  addHours(){
  	let addHour = this.state.seconds + 3600;
  	this.setState({
  		time: this.secondsToTime(addHour),
  		seconds: addHour,
  	})
  }

  addMinutes(){
  	let addMinute = this.state.seconds + 60;
  	this.setState({
  		time: this.secondsToTime(addMinute),
  		seconds: addMinute,
  	})
  }

   add30Minutes(){
  	let add30Minute = this.state.seconds + 1800;
  	this.setState({
  		time: this.secondsToTime(add30Minute),
  		seconds: add30Minute,
  	})
  }

    add10Minutes(){
  	let add10Minute = this.state.seconds + 600;
  	this.setState({
  		time: this.secondsToTime(add10Minute),
  		seconds: add10Minute,
  	})
  }

   add5Minutes(){
  	let add5Minute = this.state.seconds + 300;
  	this.setState({
  		time: this.secondsToTime(add5Minute),
  		seconds: add5Minute,
  	})
  }

  stop(){
  	clearInterval(this.timer);
  	this.setState({ started: false });
  }

  clear(){
      clearInterval(this.timer);
      this.setState({
      time: this.secondsToTime(0),
      seconds: 0,      
      started: false
    })
  }
 

  render() {
    return(
      <div className="timer-contents">
        <div className="timer-functions">
          <button className="start btn-lg btn-success" onClick={this.startTimer}>Start</button>
          <button className="pause btn-lg btn-danger" onClick={this.stop}>Pause</button>
          <button className="clear btn-lg btn-primary" onClick={this.clear}>Clear</button>
        </div>
        <div className="timer-display">
          {this.state.time.h} : {this.state.time.m} : {this.state.time.s}
        </div>
        <div className="timer-add">
          <button className="hours btn btn" onClick={this.addHours}>Add Hour</button>
          <button className="minutes btn btn" onClick={this.addMinutes}>Add Minute</button>
        </div>
        <div className="timer-setAdd">
          <button className="thirtyMin btn btn" onClick={this.add30Minutes}>30 Minutes</button>
          <button className="tenMin btn btn" onClick={this.add10Minutes}>10 Minutes</button>
          <button className="fiveMin btn btn" onClick={this.add5Minutes}>5 Minutes</button>
        </div>
      </div>
    );
  }
}

export default Timer;