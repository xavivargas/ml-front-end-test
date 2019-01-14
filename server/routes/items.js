var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../utils/config');
var helper = require('../utils/helper');

router.get('/', function (req, res, next) {

  const searchValue = req.query.q || '',
    endpoint = `/sites/MLA/search?q=${searchValue}`,
    itemsURL = config.ML_API_BASE_URL + endpoint;

  request.get(itemsURL, function (error, response, body) {
    if (!error && response.statusCode === 200) {

      const data = JSON.parse(body);

      var response = {
        author: config.author,
        categories: data ? helper.getCategories(data) : [],
        items: data ? helper.getItemList(data, config.ML_API_ITEM_LIMIT) : []
      }

      res.json(response);
    }
    else {
      res.json({ error: "Error getting item list" });
    }
  })
});

router.get('/:id', function (req, res, next) {

  const id = req.params.id || '',
    itemURL = config.ML_API_BASE_URL + "/items/​" + id,
    descriptionUrl = `/items/​${id}/description`.replace(/[^\x00-\x7F]/g, ""),
    getDescriptionURL = config.ML_API_BASE_URL + descriptionUrl;

  request.get(itemURL, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);

      request.get(getDescriptionURL, function (error, response, body) {

        if (!error && response.statusCode === 200) {
          const description = JSON.parse(body);
          let mapItem = helper.getItemDetail(data, false);
          mapItem.description = description.plain_text;

          var response = {
            author: config.author,
            categories: data ? helper.getCategories(data) : [],
            item: mapItem ? mapItem : {}
          }

          res.json(response);
        }
        else {
          res.json({ error: "Error getting item detail" });
        }
      })
    }
    else {
      res.json({ error: "Error getting item description" });
    }

  })
});

module.exports = router;