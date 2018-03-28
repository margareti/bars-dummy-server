module.exports = function(req, res, next) {
  var round ={
    "id": 1,
    "bar": {
      "id": 1,
      "name": "The bar at the end of the universe",
      "lat": 48.8607,
      "lon": 2.3057,
      "imageUrl": "data:image/png;base64,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"
    },
    "orderedBeverages": [
    {
      "id": 5,
      "name": "Leffe",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyiHPdkHZ_lhqQZ8NQpASkg784HyQZfGZAJDO6SBLoCHlkP1m",
      "quantity": 3,
      "acutalPrice": 20.64
    },
    {
      "id": 6,
      "name": "Budweiser",
      "imageUrl": "https://www.drinksupermarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/budweiser-premium-american-lager-beer-12-x-660-ml_temp.jpg",
      "quantity": 1,
      "acutalPrice": 8.71
    }
    ],
    "orderedAt": "2018-03-26T22:59:51.532+0000",
    "totalAmount": 29.35
  };

  res.end(JSON.stringify(round));
};