const express = require('express');
const router = express.Router();

const Restaurants = require('../../models/restaurants');




//render index
router.get("/", (req, res) => {
  const userId = req.user._id;
  return Restaurants.find({userId})
    .lean()
    .then(restaurants =>

      res.render("index", {
        pageTitle: "index",
        isIndex: true,
        restaurants: restaurants,
      })
    )
    .catch(() => console.log('index error'))

});

module.exports = router;