// Generated by LiveScript 1.5.0
(function(){
  var rates;
  rates = {
    btc: 2470,
    ltc: 28.87,
    eth: 187.96
  };
  module.exports = curry$(function(currency, cb){
    if (rates[currency] == null) {
      return cb("Currency " + currency + " Not Found");
    }
    return cb(null, rates[currency]);
  });
  module.exports.update = function(currency, newRate){
    return rates[currency] = newRate;
  };
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);
