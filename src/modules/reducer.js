import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  // pkmnName,
  // pkmnType,
  // pkmnType2,
  // pkmnHeight,
  // pkmnWeight,
  // pkmnGender,
  // pkmnCatchRate,
  // pkmnAvatar

  items: [{pkmnName:'Charmander',pkmnType:'Fire',pkmnType2:' ',
  pkmnHeight:'61 cm',pkmnWeight:'18.7 lbs',pkmnGender:'Male',
  pkmnCatchRate:'45', pkmnAvatar:'https://www.pinclipart.com/picdir/middle/185-1853222_pokemon-fire-red-charmander-sprite-clipart.png'},

  {pkmnName:'Bulbasaur',pkmnType:'Grass',pkmnType2:'Poison',
  pkmnHeight:'71.1 cm',pkmnWeight:'15.2 lbs',pkmnGender:'Male',
  pkmnCatchRate:'45', pkmnAvatar:'https://i.pinimg.com/originals/1c/b0/cc/1cb0ccc689ae385a0f7505ae8476d6e2.png'},

  {pkmnName:'Squirtle',pkmnType:'Water',pkmnType2:' ',
  pkmnHeight:'50.8 cm',pkmnWeight:'19.8 lbs',pkmnGender:'Male',
  pkmnCatchRate:'45', pkmnAvatar:'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c32a.png'},

  {pkmnName:'Pikachu',pkmnType:'Electric',pkmnType2:' ',
  pkmnHeight:'40.6 cm',pkmnWeight:'13.2 lbs',pkmnGender:'Male',
  pkmnCatchRate:'190', pkmnAvatar:'https://icon2.kisspng.com/20171220/sxe/pikachu-png-5a3a4ac4819dd2.6067654015137696685309.jpg'},

  {pkmnName:'Mew',pkmnType:'Psychic',pkmnType2:' ',
  pkmnHeight:'40.6 cm',pkmnWeight:'8.8 lbs',pkmnGender:'Male',
  pkmnCatchRate:'45', pkmnAvatar:'https://pokemon3d.net/wiki/images/b/bf/Mew.png'}
]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, 
  // pkmnName,
  // pkmnType,
  // pkmnType2,
  // pkmnHeight,
  // pkmnWeight,
  // pkmnGender,
  // pkmnCatchRate,
  // pkmnAvatar
        pkmnName:item.pkmnName,
        pkmnType:item.pkmnType,
        pkmnType2:item.pkmnType2,
        pkmnHeight:item.pkmnHeight,
        pkmnWeight:item.pkmnWeight,
        pkmnGender:item.pkmnGender,
        pkmnCatchRate:item.pkmnCatchRate,
        pkmnAvatar:item.pkmnAvatar
        };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;