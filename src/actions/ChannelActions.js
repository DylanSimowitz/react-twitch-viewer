export function addChannel(channel) {
  return ({
    type: 'ADD_CHANNEL',
    id: channel._id,
    channel
  })
}

export function removeChannel(id) {
  return ({
    type: 'REMOVE_CHANNEL',
    id
  })
}
