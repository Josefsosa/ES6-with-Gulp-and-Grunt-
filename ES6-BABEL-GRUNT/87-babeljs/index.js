"use strict";

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

var obj = {
  a: [{ foo: 123, bar: "abc" }, {}],
  b: true
};

var _obj$a = _slicedToArray(obj.a, 1);

var fooValue = _obj$a[0].foo;
var bValue = obj.b;
// f = 123

console.log("fooValue:", fooValue, bValue);
//# sourceMappingURL=index.js.map
