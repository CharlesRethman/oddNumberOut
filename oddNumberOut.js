
function oddNumberOut(a) {
  return (typeof(a) === 'object') && Array.isArray(a)
    ? Array.from(a.reduce((r, v) => {
      return r.delete(v)
        ? r
        : r.add(v)
    }, new Set()))
    : [];
}


module.exports = oddNumberOut;

