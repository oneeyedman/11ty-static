module.exports = function(array, filterString) {
  return array.filter(item => item.name.includes(filterString));
}