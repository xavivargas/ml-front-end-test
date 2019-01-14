
function getCategories(results) {
  let categories = [];

  if (results.filters) {
    const categoryFilter = results.filters.find(filter => filter.id === 'category');

    if (categoryFilter && categoryFilter.values.length) {
      categories = categoryFilter.values[0].path_from_root.map(c => c.name);
    }
  }

  return categories;
}

function getItemDetail(item, isSearch) {
  const integerPrice = Math.floor(Number(item.price));
  const decimalPrice = Number((Number(item.price) - integerPrice).toFixed(2)) * 100;

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: integerPrice,
      decimals: decimalPrice
    },
    picture: isSearch ? item.thumbnail : item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping ? item.shipping.free_shipping : '',
    state: item.address ? item.address.state_name : ''
  };
}

function getItemList(results, limit) {
  const itemList = results.results.slice(0, limit);
  return itemList.map(valueItem => getItemDetail(valueItem, true));
}

module.exports = {
  getItemList: getItemList,
  getItemDetail: getItemDetail,
  getCategories: getCategories
}