import { addChannel, updateChannels } from './ChannelActions'
import { addStream, updateStream, updateStreams } from './StreamActions'
export function fetchUser(name) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/streams/?channel=${name}`)
    .then(response => response.json())
    .then(data => {
      data.streams.length > 0 ? dispatch(addStream(data.streams[0])) : dispatch(fetchChannel(name))
    })
  }
}
export function fetchStream(name, update = false) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/streams/?channel=${name}`)
    .then(response => response.json())
    .then(data => {
      update ? dispatch(updateStream(data.streams[0])) : dispatch(addStream(data.stream[0]))
    })
  }
}

export function fetchChannel(name) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/channels/${name}`)
    .then(response => response.json())
    .then(data => dispatch(addChannel(data)))
  }
}
export function updateUsers(streams,channels) {
  let names = streams.map(stream => {return stream.channel.name})
              .concat(channels.map(channel => {return channel.name}))
  channels = []
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/streams/${names.join(',')}`)
    .then(response => response.json())
    .then(data => {
      dispatch(updateStreams(data.streams))
      data.streams.map(stream => {
        names.filter(name => {
          name !== stream.channel.name
        })
      })
    })
    names.forEach(name => {
      fetch(`https://api.twitch.tv/kraken/channels/${name}`)
      .then(response => response.json())
      .then(data => {channels.push(data)})
    })
    dispatch(updateChannels(channels))
  }
}
export function fetchUpdateStream(stream) {
  return dispatch => {
    fetch(`https://api.twitch.tv/kraken/streams/${stream.channel.name}`)
    .then(response => response.json())
    .then(data => {
      dispatch(updateStream(data.stream))
    })
  }
}
// export function updateUsers(streams, channels) {
//   let names = streams.map(stream => {
//     return stream.channel.name
//   }).concat(channels.map(channel => {return channel.name})).join(',')
//   fetch(`https://api.twitch.tv/kraken/streams/${names}`)
//   .then(response => response.json())
//   .then(streams => {
//     s ? dispatch(addStream(data.stream)) : dispatch(fetchChannel(name))
//   })
//   streams.filter(stream => {
//     fetch(`https://api.twitch.tv/kraken/streams/${stream.channel.name}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.stream !== null) {
//         return stream = data.stream
//       }
//       else {
//         fetchChannel(stream.channel.name)
//       }
//     })
//   })
// }
