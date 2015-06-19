# subsub.js

Subsub allows you to create multiple callbacks for a single channel.

# Usage

```
subsub.subscribe(pubnub, channel, connect, callback);
```

Option | Explanation
-------|-----------
pubnub | Your PubNub javascript object.
channel | The string of the PubNub channel to subscribe to
connect | Optional callback to call when PubNub connects
callback | function to fire when a message is recieved. Works same way as ```pubnub.subscribe```
