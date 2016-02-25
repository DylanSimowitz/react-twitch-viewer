module.exports = function(streams = [], action) {
  function streamExists() {
    let duplicates = streams.filter(stream => {return stream._id === action.id})
    if (duplicates.length > 0) {
      return true
    }
    return false
  }
  switch(action.type) {
    case 'ADD_STREAM': {
      if (streamExists()) {
        return streams;
      }
      return [
        action.stream,
        ...streams
      ]
    }
    case 'REMOVE_STREAM': {
      return streams.filter(stream => {
        return stream._id !== action.id
      })
    }
    case 'UPDATE_STREAM': {
      return streams.map(stream => {
        if (stream._id === action.stream._id) {
          return stream = action.stream
        }
        return stream
      })
    }
    case 'UPDATE_STREAMS': {
      return action.streams
    }
    default: {
      return streams;
    }
  }
}
