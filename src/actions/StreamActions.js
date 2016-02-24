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

export function embedStream(name) {
  return ({
    type: 'EMBED_STREAM',
    name
  })
}
