import React, { Component } from "react";
import { connect } from "react-redux";

class InforGame extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-success">{ this.props.result}</div>
        <div className=" display-4 text-success">
          Số bàn thắng: <span className="text-warning">{ this.props.win}</span>
        </div>
        <div className="display-4 text-success">
          Tổng lượt chơi: <span className="text-warning">{ this.props.turn}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.RockpsReducer.result,
    win: state.RockpsReducer.win,
    turn: state.RockpsReducer.turn,
  };
};
export default connect(mapStateToProps)(InforGame);
