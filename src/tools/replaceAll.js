// exports.ReplaceAll = function (string, search, replace) {
// const ReplaceAll = function (string, search, replace) { //error
function ReplaceAll (string, search, replace) { // error
  const stringNew = String(string).split(search).join(replace)

  return stringNew
}

// console.log(ReplaceAll('Do more', 'more', 'more and more'))

// module.exports = ReplaceAll
module.exports.ReplaceAll = ReplaceAll
