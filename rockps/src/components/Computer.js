import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
     let keyframe = `@keyframes randomItem${Date.now()}{
      0%{top:-50px;}
      25%{top:100px;}
      50%{top:-50px;}
      75%{top:100px;}
      100%{top:0;}
    }`;
    return (
      <div className="computer mt-5">
        <div className="chat iconImg" style={{position:'relative'}}>
          <style>{keyframe}</style>
          <img
            style={{
              position: 'absolute',
              marginTop: "50px",
              animation: ` randomItem${Date.now()}0.5s`,
            }}
            src={this.props.stateComputer.image}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "250px", height: "400px" }}
          src="../img/dogComputer.png"
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    stateComputer: state.RockpsReducer.computer,
  };
}
export default connect(mapStateToProps)(Computer);
