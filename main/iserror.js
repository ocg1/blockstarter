// Generated by LiveScript 1.5.0
(function(){
  var SlackWebhook, slack;
  SlackWebhook = require('slack-webhook');
  slack = new SlackWebhook('https://hooks.slack.com/services/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', {
    defaults: {
      username: 'Bot',
      channel: '#bot',
      icon_emoji: ':robot_face:'
    }
  });
  module.exports = function(err, moreInfo){
    var ref$;
    if (err != null) {
      slack.send("Error: " + ((ref$ = err.message) != null ? ref$ : err) + " " + (moreInfo != null ? moreInfo : ''));
    }
    return err != null;
  };
}).call(this);
