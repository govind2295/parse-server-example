
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
var Pubnub = require('cloud/pubnub');
Parse.Cloud.define('hello_world', function (request, response) {
  var pubnub = PubNub({
    publish_key: 'pub-c-d3caf25f-b2d2-457b-8a47-61e7769b83f7',
    subscribe_key: 'sub-c-14066ce2-df6b-11e5-9f0d-02ee2ddab7fe'
  });
 
  pubnub.publish({
    channel: "hello_world",
    message: "Hello from PubNub Docs!",
    callback: function (result) {
      response.success(result);
    },
    error: function (error) {
      response.error(error)
    }
  });
});
