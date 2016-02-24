import { addChannel } from './ChannelActions'
import { addStream } from './StreamActions'
export function fetchUser(name) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/streams/${name}`)
    .then(response => response.json())
    .then(data => {
      data.stream !== null ? dispatch(addStream(data.stream)) : dispatch(fetchChannel(name))
    })
  }
}
export function fetchStream(name) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/streams/${name}`)
    .then(response => response.json())
    .then(data => dispatch(addStream(data.stream)))
  }
}

export function fetchChannel(name) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/channels/${name}`)
    .then(response => response.json())
    .then(data => dispatch(addChannel(data)))
  }
}
