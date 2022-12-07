import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      console.log(123),
      (
        <div className="player mt-5">
          <div className="chat iconImg ">
            <img style={{ marginTop: "50px" }} src={this.props.idFlat.find(item=>item.flat===true).image} />
          </div>
          <div className="speech-bubble"></div>
          <img
            style={{ width: "250px", height: "300px" }}
            src="./img/tom.png"
          />
          <div className="row ">
            {this.props.idFlat.map((item, index) => {
              let border = {};
              if (item.flat) {
                border = { border: "3px solid orange" };
              }
              return (
                <div className="col-4  iconImg">
                  <button
                    style={border}
                    onClick={() => {
                      this.props.flat(item.id);
                    }}
                  >
                    <img src={item.image} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    idFlat: state.RockpsReducer.idFlat,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    flat: (id) => {
      dispatch({
        type: "CHOSE_FLAT",
        id
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
