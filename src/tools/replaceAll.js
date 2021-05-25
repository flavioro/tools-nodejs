exports.ReplaceAll = function (string, search, replace) {
  const stringNew = String(string).split(search).join(replace)

  return stringNew
}

// console.log(ReplaceAll('Do more', 'more', 'more and more'))

// module.exports = ReplaceAll