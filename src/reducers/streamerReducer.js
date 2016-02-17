//const initialState = {};

module.exports = function(streamers = [], action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case 'ADD_STREAMER': {
      return [{
        name: action.name
      }, ...streamers]
    }
    case 'REMOVE_STREAMER': {
      return streamers.filter(streamer => {
        return streamer.id !== action.id
      })
    }
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
    default: {
      return streamers;
    }
  }
}
