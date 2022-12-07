import React, { Component } from "react";
import { connect } from "react-redux";
import Computer from "./Computer";
import InforGame from "./InforGame";
import Player from "./Player";
import "./Rockps.css";
class Rockps extends Component {
  render() {
   
    return (
      <div className="rockps">
       
        <div className="row text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <InforGame />
            <button onClick={()=>{this.props.play()}} className="btn btn-success">Play</button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    play: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count >= 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type:'END_GAME'
          })
        }
      },100)
      
    }
  }
}
export default connect(null,mapDispatchToProp) (Rockps);
