module.exports = function(embed = '', action) {
  switch (action.type) {
    case 'EMBED_STREAM': {
      return embed = action.name
    }
    default: {
      return embed;
    }
  }
}
