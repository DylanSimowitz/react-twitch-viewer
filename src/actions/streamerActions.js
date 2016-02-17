let actions = {
  addStreamer: function(name) {
    return {
      type: 'ADD_STREAMER',
      name: name
    }
  },

  removeStreamer: function(id) {
    return {
      type: 'REMOVE_STREAMER',
      id: id
    }
  }

}

export default actions
