module.exports = function(req, res, next) {
  var toto = {
    name: 'Default'
  };
  setTimeout(function(){
    res.end(JSON.stringify(toto))
  }, 5000);
};