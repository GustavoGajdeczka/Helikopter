import React, { Component } from 'react';
import heli from './heli.mp3'

class Musica extends Component {
  render() {
    let audio = new Audio(heli)
    const start = () => {
      audio.play()
    }
    const stop = () => {
      audio.pause()
    }
    return (
      <div>
        <button onClick={start}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
    );
  }
}

export default Musica;
