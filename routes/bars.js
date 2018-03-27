module.exports = function(req, res, next) {
  var bars = [{"id":1,"name":"The bar at the end of the universe","lat":48.8607,"lon":2.3057,"imgageUrl":"https://goo.gl/maps/BpYvxubFY2D2"},{"id":2,"name":"Feel Like Home","lat":48.8607,"lon":2.3057,"imgageUrl":"http://static.tumblr.com/4c3258467f8af35cbd10c121e0200a96/ms8ee2t/PZKmfvqr9/tumblr_static_header.png"},{"id":3,"name":"I came by myself","lat":48.8607,"lon":2.3057,"imgageUrl":"http://i2.wp.com/almostveggiehouston.com/wp-content/uploads/2010/10/bar-long-764x1024.jpg?fit=298%2C400"},{"id":4,"name":"Jack, my best friend","lat":48.8607,"lon":2.3057,"imgageUrl":"https://www.abouttimemagazine.co.uk/wp-content/uploads/2017/05/The-Mint-Bar-Westin-Dublin-City-Centre-Mixologist-Drink.jpg"}];

  res.end(JSON.stringify(bars));
};