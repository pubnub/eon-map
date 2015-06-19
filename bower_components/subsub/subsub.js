var subsub = {
  observers: {},
  message: function(message, env, channel) {

    for(var i in subsub.observers[channel]) {
      subsub.observers[channel][i](message, env, channel);
    }

  },
  subscribe: function(pubnub, channel, connect, callback) {

    if(typeof(subsub.observers[channel]) == "undefined") {

      subsub.observers[channel] = [callback];

      connect = connect || function(){};

      pubnub.subscribe({
        channel: channel,
        connect: connect,
        message: function(message, env, channel) {
          subsub.message(message, env, channel );
        }
      });

    } else {
      subsub.observers[channel].push(callback);
    }

  }
};