export function addStream(stream) {
  return ({
    type: 'ADD_STREAM',
    id: stream._id,
    stream
  })
}

export function removeStream(id) {
  return ({
    type: 'REMOVE_STREAM',
    id
  })
}

export function updateStream(stream) {
  return ({
    type: 'UPDATE_STREAM',
    stream
  })
}

export function updateStreams(streams) {
  type: 'UPDATE_STREAMS',
  streams
}

export function embedStream(name) {
  return ({
    type: 'EMBED_STREAM',
    name
  })
}
