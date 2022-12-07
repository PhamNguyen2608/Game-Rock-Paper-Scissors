const stateDefault = {
  idFlat: [
    { id: "keo", image: "./img/keo.png", flat: false },
    { id: "bua", image: "./img/bua.png", flat: false },
    { id: "bao", image: "./img/bao.png", flat: true },
  ],
  result: "You win",
  win: 0,
  turn: 0,
  computer: { id: "keo", image: "./img/keo.png", flat: true },
};
const RockpsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOSE_FLAT": {
      let idFlatUpdate = [...state.idFlat];
      idFlatUpdate = idFlatUpdate.map((item, index) => {
        return { ...item, flat: false };
      });
      let index = idFlatUpdate.findIndex((qc) => qc.id === action.id);
      if (index !== -1) {
        idFlatUpdate[index].flat = true;
      }
      state.idFlat = idFlatUpdate;

      return { ...state };
    }
    case "RAN_DOM": {
      let number = Math.floor(Math.random() * 3);
      let flatRandom = state.idFlat[number];
      console.log("computer", flatRandom);
      state.computer = flatRandom;
      console.log("random", action);
      return { ...state };
    }
    case "END_GAME": {
    state.turn +=1;
      let player = state.idFlat.find((qc) => qc.flat === true);
      console.log("🚀 ~ file: RockpsReducer.js:38 ~ RockpsReducer ~ player", player)
      let computer = state.computer;
      console.log("🚀 ~ file: RockpsReducer.js:40 ~ RockpsReducer ~ computer", computer)
      switch (player.id) {
        case "keo":
          if (computer.id == "keo") {
            state.result = "Drew !!!";
          } else if (computer.id == "bua") {
            state.result = "Dog Won !!!";
          } else {
            state.result = "Tom Won !!!";
            state.win +=1
          }
          break;
        case "bao":
          if (computer.id == "keo") {
            state.result = "Dog Won !!!";
          } else if (computer.id == "bua") {
            state.result = "Tom Won !!!";
            state.win += 1;
          } else {
            state.result = "Drewww !!!";
          }
          break;
        case "keo":
          if (computer.id == "keo") {
            state.result = "Drew !!!";
          } else if (computer.id == "bua") {
            state.result = "Dog Won !!!";
          } else {
            state.result = "Tom Won !!!";
            state.win += 1;
          }
          break;
        default:
          state.result = "Tom Won !!!";
          state.win += 1;
        
          return {
            ...state,
          };
        
      }
      
    }
    
    default:
      return { ...state };
  }
};
export default RockpsReducer;
