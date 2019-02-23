(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise =  false || resolve(value));
            }
            function onReject(error) {
                promise && (promise =  false || reject(error));
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    if (NativePromise) {
        patchThen(NativePromise);
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    if (typeof fetch !== 'function') {
        return;
    }
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, args, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget_1 = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget_1) {
            patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    attachOriginToPatched(target[method], nativeDelegate);
}
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    patchCallbacks(document, 'Document', 'registerElement', callbacks);
}
function patchCustomElements(_global) {
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    patchCallbacks(_global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    registerElementPatch(global);
    patchCustomElements(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_ella_ella_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/ella/ella.component */ "./src/app/pages/ella/ella.component.ts");
/* harmony import */ var _pages_james_james_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/james/james.component */ "./src/app/pages/james/james.component.ts");
/* harmony import */ var _pages_litters_litters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/litters/litters.component */ "./src/app/pages/litters/litters.component.ts");
/* harmony import */ var _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/fotos/fotos.component */ "./src/app/pages/fotos/fotos.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/impressum/impressum.component */ "./src/app/pages/impressum/impressum.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_dog_cover_dog_cover_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dog-cover/dog-cover.component */ "./src/app/components/dog-cover/dog-cover.component.ts");
/* harmony import */ var _components_news_card_news_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/news-card/news-card.component */ "./src/app/components/news-card/news-card.component.ts");










// Pages









// Components




var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
    { path: 'ella', component: _pages_ella_ella_component__WEBPACK_IMPORTED_MODULE_12__["EllaComponent"] },
    { path: 'james', component: _pages_james_james_component__WEBPACK_IMPORTED_MODULE_13__["JamesComponent"] },
    { path: 'litters', component: _pages_litters_litters_component__WEBPACK_IMPORTED_MODULE_14__["LittersComponent"] },
    { path: 'fotos', component: _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_15__["FotosComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"] },
    { path: 'impressum', component: _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_17__["ImpressumComponent"] },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                // Pages
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_ella_ella_component__WEBPACK_IMPORTED_MODULE_12__["EllaComponent"],
                _pages_james_james_component__WEBPACK_IMPORTED_MODULE_13__["JamesComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_litters_litters_component__WEBPACK_IMPORTED_MODULE_14__["LittersComponent"],
                _pages_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_15__["FotosComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                // Components
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_17__["ImpressumComponent"],
                _components_dog_cover_dog_cover_component__WEBPACK_IMPORTED_MODULE_21__["DogCoverComponent"],
                _components_news_card_news_card_component__WEBPACK_IMPORTED_MODULE_22__["NewsCardComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dog-cover/dog-cover.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dog-cover/dog-cover.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class='dog-cover'>\n  <mat-card-header>\n      <mat-card-title>{{name}}</mat-card-title>\n      <mat-card-subtitle>Geb. {{birthdate}}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src='{{imgPath}}'>\n  <mat-card-content>\n      <p>\n          {{description}}\n      </p>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/dog-cover/dog-cover.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dog-cover/dog-cover.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dog-cover {\n  max-width: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2ctY292ZXIvQzpcXFVzZXJzXFxNaWNoZWxcXERvY3VtZW50c1xcV29ya3NwYWNlXFxtYXJ5c3J1Ynkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRvZy1jb3ZlclxcZG9nLWNvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvZy1jb3Zlci9kb2ctY292ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9nLWNvdmVyIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dog-cover/dog-cover.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dog-cover/dog-cover.component.ts ***!
  \*************************************************************/
/*! exports provided: DogCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogCoverComponent", function() { return DogCoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/datatypes/language */ "./src/app/datatypes/language.ts");




var DogCoverComponent = /** @class */ (function () {
    function DogCoverComponent(languageService) {
        this.languageService = languageService;
    }
    DogCoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.subscribe(function (language) { return _this.languageChanged(language); });
        this.languageChanged(this.languageService.language);
    };
    DogCoverComponent.prototype.languageChanged = function (language) {
        if (language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_3__["Language"].ENGLISH) {
            this.description = this.descriptionEn;
        }
        else {
            this.description = this.descriptionDe;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DogCoverComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DogCoverComponent.prototype, "birthdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DogCoverComponent.prototype, "imgPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DogCoverComponent.prototype, "descriptionDe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DogCoverComponent.prototype, "descriptionEn", void 0);
    DogCoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dog-cover',
            template: __webpack_require__(/*! ./dog-cover.component.html */ "./src/app/components/dog-cover/dog-cover.component.html"),
            styles: [__webpack_require__(/*! ./dog-cover.component.scss */ "./src/app/components/dog-cover/dog-cover.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], DogCoverComponent);
    return DogCoverComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header-wrapper'>\n  <div style=\"text-align:center\">\n    <div class='headline'>\n      {{ title }}\n    </div>\n    <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.header-wrapper {\n  background-color: #bdbdbd;\n  border-bottom: 2px solid #ff7043;\n  width: 100%;\n  height: 60px; }\n.headline {\n  padding: 12px;\n  font-weight: bold;\n  font-size: 32px;\n  padding-left: 60px;\n  color: rgba(0, 0, 0, 0.87);\n  white-space: nowrap;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxNaWNoZWxcXERvY3VtZW50c1xcV29ya3NwYWNlXFxtYXJ5c3J1Ynkvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxNaWNoZWxcXERvY3VtZW50c1xcV29ya3NwYWNlXFxtYXJ5c3J1Ynkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFLQTs7Ozs7O0VDL0pFO0FEdzBDRixrQ0FBQTtBQTQrQ0EsMkNBQUE7QUF3Q0EscUJBQUE7QUVoMkZBO0VBQ0kseUJGc2tDVTtFRXJrQ1YsZ0NGbWdDVTtFRWxnQ1YsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdoQjtFQUNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkYwZjBCO0VFemYxQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSBjYW4gdXNlIHJlbGF0aXZlIGltcG9ydHMgZm9yIGltcG9ydHMgZnJvbSB0aGUgY2RrIGJlY2F1c2Ugd2UgYnVuZGxlIGV2ZXJ5dGhpbmdcbi8vIHVwIGludG8gYSBzaW5nbGUgZmxhdCBzY3NzIGZpbGUgZm9yIG1hdGVyaWFsLlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDA7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8qKlxuICogQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4gKiB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4gKiBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbiAqIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4gKiAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4gKi9cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUpIHtcbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogJHRhcmdldCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwKSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG4gICRvcGFjaXR5OiBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KTtcblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDApLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWUgY29tZXMgZnJvbVxuICAvLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIFdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkXG4gICAgICAvLyBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGVcbiAgICAgIC8vIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAvIDI7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChibGFjay1vbi13aGl0ZSkge1xuICAgICAgLy8gSGF2aW5nIHRoZSBvbmUgYWJvdmUgYmUgIWltcG9ydGFudCBlbmRzIHVwIG92ZXJyaWRpbmcgdGhlIGJyb3dzZXIncyBhdXRvbWF0aWNcbiAgICAgIC8vIGNvbG9yIGludmVyc2lvbiBzbyB3ZSBuZWVkIHRvIHJlLWludmVydCBpdCBvdXJzZWx2ZXMgZm9yIGJsYWNrLW9uLXdoaXRlLlxuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dChtYXQtY29sb3IoJHBhbGV0dGUpLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KSwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICRkcmF3ZXItYmFja2Ryb3AtY29sb3I6IGludmVydChtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsIDAuNikpO1xuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tkcm9wLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgMC4yKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC4xMik7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC43KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIFdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkXG4gICAgLy8gY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkbWF0LWdyZXksIDcwMCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiLyoqXG4gKiBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbiAqIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbiAqIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuICogQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbiAqICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbiAqL1xuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG4uaGVhZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmNzA0MztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDsgfVxuXG4uaGVhZGxpbmUge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZSc7XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iYXItY29sb3VyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJG1lbnUtYm9yZGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5oZWFkbGluZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgY29sb3I6ICRoZWFkZXItdGV4dC1jb2xvdXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        // tslint:disable-next-line:quotemark
        this.title = "Mary's Ruby";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class='sidenav-container' autosize>\n  <mat-drawer #drawer class='sidenav' mode='side'>\n    <div class='drawer-content'>\n      <button mat-button class='sidenav-button' (click)='navHome()'>\n        <mat-icon>home</mat-icon>\n        <span>{{homepage}}</span>\n      </button>\n      <button mat-button class='sidenav-button' (click)='navAbout()'>\n        <span>{{about}}</span>\n      </button>\n      <mat-accordion displayMode='flat'>\n        <mat-expansion-panel class='sidenav-expansion-panel'>\n          <mat-expansion-panel-header class='sidenav-button-expansion'>\n            <mat-panel-title class='sidenav-expansion-title'>\n              {{dogs}}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class='expansion-panel-content'>\n            <button mat-button class='sidenav-button' (click)='navElla()'>\n              <span>Ella</span>\n            </button>\n            <button mat-button class='sidenav-button' (click)='navJames()'>\n              <span>James</span>\n            </button>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel class='sidenav-expansion-panel'>\n          <mat-expansion-panel-header class='sidenav-button-expansion'>\n            <mat-panel-title class='sidenav-expansion-title'>\n              {{puppies}}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class='expansion-panel-content'>\n            <button mat-button class='sidenav-button'>\n              <span>A</span>\n            </button>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n      \n      <button mat-button class='sidenav-button' (click)='navFotos()'>\n        <span>Fotos</span>\n      </button>\n      <button mat-button class='sidenav-button' (click)='navContact()'>\n        <span>{{contact}}</span>\n      </button>\n\n      <div class='languages'>\n        <button mat-button (click)='langGerman()'>\n          <img src='assets/flag-de.png' alt='De'>\n        </button>\n        <button mat-button (click)='langEnglish()'>\n          <img src='assets/flag-uk.png' alt='Eng'>\n        </button>\n      </div>\n\n      <button mat-button class='sidenav-button' (click)='navImpressum()'>\n        <span>Impressum</span>\n      </button>\n    </div>\n  </mat-drawer>\n\n  <div class='sidenav-content'>\n    <app-header class='header'></app-header>\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class='menu-button'>\n      <button mat-raised-button color='accent' (click)='drawer.toggle()'>\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.sidenav-container {\n  width: 100%;\n  height: 100%;\n  background-color: #616161; }\n.sidenav-container mat-drawer {\n    background-color: #616161; }\n.sidenav-content {\n  display: flex;\n  min-height: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: whitesmoke; }\n.sidenav {\n  padding: 20px;\n  z-index: 999;\n  position: fixed;\n  top: 60px;\n  left: 0;\n  border-right: 2px solid #ff7043; }\n.header {\n  width: 100%; }\n.menu-button button {\n  padding: 6px 12px 6px 6px;\n  position: fixed;\n  top: 4px;\n  left: 0;\n  border-radius: 0 25px 25px 0;\n  z-index: 1000; }\n.sidenav-button {\n  background-color: transparent;\n  text-align: left;\n  color: white; }\n.sidenav-button:hover {\n    color: rgba(0, 0, 0, 0.87);\n    background-color: #ff9e80 !important; }\n.sidenav-expansion-panel {\n  border-radius: 0 !important;\n  box-shadow: none; }\n.sidenav-expansion-panel ::ng-deep .mat-expansion-panel-content {\n    background-color: #616161 !important; }\n.sidenav-button-expansion {\n  text-align: left;\n  padding-left: 16px;\n  background-color: #616161 !important; }\n.sidenav-button-expansion:hover {\n    background-color: #ff9e80 !important; }\n.sidenav-button-expansion:hover .sidenav-expansion-title {\n      color: rgba(0, 0, 0, 0.87); }\n.sidenav-button-expansion:hover ::ng-deep .mat-expansion-indicator:after {\n      color: rgba(0, 0, 0, 0.87); }\n.sidenav-button-expansion ::ng-deep .mat-expansion-indicator:after {\n    color: white; }\n.sidenav-expansion-title {\n  color: white; }\n.drawer-content {\n  display: flex;\n  flex-direction: column; }\n.expansion-panel-content {\n  display: flex;\n  flex-direction: column; }\n.languages button {\n  margin: 2px; }\n.languages button:hover {\n    background-color: #ff9e80; }\n.languages img {\n  max-width: 26px;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0M6XFxVc2Vyc1xcTWljaGVsXFxEb2N1bWVudHNcXFdvcmtzcGFjZVxcbWFyeXNydWJ5L25vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0M6XFxVc2Vyc1xcTWljaGVsXFxEb2N1bWVudHNcXFdvcmtzcGFjZVxcbWFyeXNydWJ5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFLQTs7Ozs7O0VDL0pFO0FEdzBDRixrQ0FBQTtBQTQrQ0EsMkNBQUE7QUF3Q0EscUJBQUE7QUVoMkZBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkZ1a0NZLEVBQUE7QUUxa0NkO0lBS0kseUJGcWtDVSxFQUFBO0FFamtDZDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJGcWpDWSxFQUFBO0FFbGpDZDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsK0JGNitCWSxFQUFBO0FFMStCZDtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBRUkseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixRQUFRO0VBQ1IsT0FBTztFQUNQLDRCQUE0QjtFQUM1QixhQUFhLEVBQUE7QUFJakI7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFlGOGR3QixFQUFBO0FFamUxQjtJQUtJLDBCRnVkMEI7SUV0ZDFCLG9DQUE2QyxFQUFBO0FBSWpEO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQixFQUFBO0FBRmxCO0lBSUksb0NBQTZDLEVBQUE7QUFJakQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9DQUE2QyxFQUFBO0FBSC9DO0lBS0ksb0NBQTZDLEVBQUE7QUFMakQ7TUFPTSwwQkZtY3dCLEVBQUE7QUUxYzlCO01BVU0sMEJGZ2N3QixFQUFBO0FFMWM5QjtJQWNJLFlGaWNzQixFQUFBO0FFN2IxQjtFQUNFLFlGNGJ3QixFQUFBO0FFemIxQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtBQUd4QjtFQUVJLFdBQVcsRUFBQTtBQUZmO0lBSU0seUJGMjZCUyxFQUFBO0FFLzZCZjtFQVFJLGVBQWU7RUFDZixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDA7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbiAqIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbiAqIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuICogQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbiAqICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbiAqL1xuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKX0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMil9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KX0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCl9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3tyZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKX0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAje3JnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7cmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMil9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDApIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcbiAgJG9wYWNpdHk6IGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpO1xuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBsaWdodCB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiB0cnVlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwX2dldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG51bGwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDApLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpICogMC44MyxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuNjcsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAvLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZSBjb21lcyBmcm9tXG4gIC8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWJvdmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICB0b3A6IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLW92ZXJsYXAge1xuICAgICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpIHtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gV2UgY29udmVydCBpdCBpbnRvIGEgc29saWRcbiAgICAgIC8vIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZVxuICAgICAgLy8gcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplIC8gMjtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgICAvLyBIYXZpbmcgdGhlIG9uZSBhYm92ZSBiZSAhaW1wb3J0YW50IGVuZHMgdXAgb3ZlcnJpZGluZyB0aGUgYnJvd3NlcidzIGF1dG9tYXRpY1xuICAgICAgLy8gY29sb3IgaW52ZXJzaW9uIHNvIHdlIG5lZWQgdG8gcmUtaW52ZXJ0IGl0IG91cnNlbHZlcyBmb3IgYmxhY2stb24td2hpdGUuXG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgb25lIGlzIG1vdmVkIGRvd24gaGVyZSBzbyBpdCBjYW4gdGFyZ2V0IGJvdGhcbiAgLy8gdGhlIHRoZW1lIGNvbG9ycyBhbmQgdGhlIGRpc2FibGVkIHN0YXRlLlxuICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIC8vIE5lZWRzIHRvIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBoaWRlcyB0aGUgY2hlY2tib3ggb3V0bGluZS5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDMsICR0aGVtZSk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KG1hdC1jb2xvcigkcGFsZXR0ZSksICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQobWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgJGRyYXdlci1iYWNrZHJvcC1jb2xvcjogaW52ZXJ0KG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgMC42KSk7XG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2Ryb3AtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAwLjIpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjEyKTtcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjcpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgIC8vIEJlY2F1c2UgdGhlIGFycm93IGlzIG1hZGUgdXAgb2YgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlcixcbiAgICAvLyB3ZSBjYW4ndCB1c2UgdGhlIHNlbWktdHJhc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gV2UgY29udmVydCBpdCBpbnRvIGEgc29saWRcbiAgICAvLyBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAkdGFibGUtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICAgICR0ZXh0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRtYXQtZ3JleSwgNzAwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCIvKipcbiAqIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuICogdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuICogYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4gKiBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuICogICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuICovXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7IH1cbiAgLnNpZGVuYXYtY29udGFpbmVyIG1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7IH1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XG5cbi5zaWRlbmF2IHtcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmNzA0MzsgfVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm1lbnUtYnV0dG9uIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMnB4IDZweCA2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XG4gIHotaW5kZXg6IDEwMDA7IH1cblxuLnNpZGVuYXYtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAuc2lkZW5hdi1idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllODAgIWltcG9ydGFudDsgfVxuXG4uc2lkZW5hdi1leHBhbnNpb24tcGFuZWwge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cbiAgLnNpZGVuYXYtZXhwYW5zaW9uLXBhbmVsIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxICFpbXBvcnRhbnQ7IH1cblxuLnNpZGVuYXYtYnV0dG9uLWV4cGFuc2lvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MSAhaW1wb3J0YW50OyB9XG4gIC5zaWRlbmF2LWJ1dHRvbi1leHBhbnNpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllODAgIWltcG9ydGFudDsgfVxuICAgIC5zaWRlbmF2LWJ1dHRvbi1leHBhbnNpb246aG92ZXIgLnNpZGVuYXYtZXhwYW5zaW9uLXRpdGxlIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gICAgLnNpZGVuYXYtYnV0dG9uLWV4cGFuc2lvbjpob3ZlciA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOmFmdGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5zaWRlbmF2LWJ1dHRvbi1leHBhbnNpb24gOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjphZnRlciB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG5cbi5zaWRlbmF2LWV4cGFuc2lvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uZHJhd2VyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmxhbmd1YWdlcyBidXR0b24ge1xuICBtYXJnaW46IDJweDsgfVxuICAubGFuZ3VhZ2VzIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU4MDsgfVxuXG4ubGFuZ3VhZ2VzIGltZyB7XG4gIG1heC13aWR0aDogMjZweDtcbiAgbWFyZ2luOiAwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWVcIjtcclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWJhci1jb2xvdXI7XHJcbiAgbWF0LWRyYXdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYXItY29sb3VyO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvdXI7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAkbWVudS1ib3JkZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweCA2cHggNnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDI1cHggMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZW5hdi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICRtZW51LXRleHQtY29sb3VyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRtZW51LWl0ZW0taG92ZXItdGV4dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWl0ZW0taG92ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFyLWNvbG91ciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtYnV0dG9uLWV4cGFuc2lvbiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtYmFyLWNvbG91ciAhaW1wb3J0YW50O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtaXRlbS1ob3ZlciAhaW1wb3J0YW50O1xyXG4gICAgLnNpZGVuYXYtZXhwYW5zaW9uLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICRtZW51LWl0ZW0taG92ZXItdGV4dDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6YWZ0ZXIge1xyXG4gICAgICBjb2xvcjogJG1lbnUtaXRlbS1ob3Zlci10ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGNvbG9yOiAkbWVudS10ZXh0LWNvbG91cjtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LWV4cGFuc2lvbi10aXRsZSB7XHJcbiAgY29sb3I6ICRtZW51LXRleHQtY29sb3VyO1xyXG59XHJcblxyXG4uZHJhd2VyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sYW5ndWFnZXMge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1pdGVtLWhvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/datatypes/language */ "./src/app/datatypes/language.ts");






var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, languageService) {
        this.router = router;
        this.languageService = languageService;
        this.homepageDe = 'Startseite';
        this.homepageEn = 'Homepage';
        this.aboutDe = 'Über Uns';
        this.aboutEn = 'About Us';
        this.dogsDe = 'Unsere Hunde';
        this.dogsEn = 'Our Dogs';
        this.puppiesDe = 'Welpen';
        this.puppiesEn = 'Litters';
        this.contactDe = 'Kontakt';
        this.contactEn = 'Contact Us';
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.subscribe(function (language) { return _this.languageChanged(language); });
        this.languageChanged(this.languageService.language);
    };
    MenuComponent.prototype.closeDrawer = function () {
        this.drawer.close();
    };
    MenuComponent.prototype.navHome = function () {
        this.router.navigateByUrl('/home');
        this.closeDrawer();
    };
    MenuComponent.prototype.navAbout = function () {
        this.router.navigateByUrl('/about');
        this.closeDrawer();
    };
    MenuComponent.prototype.navElla = function () {
        this.router.navigateByUrl('/ella');
        this.closeDrawer();
    };
    MenuComponent.prototype.navJames = function () {
        this.router.navigateByUrl('/james');
        this.closeDrawer();
    };
    MenuComponent.prototype.navLitters = function () {
        this.router.navigateByUrl('/litters');
        this.closeDrawer();
    };
    MenuComponent.prototype.navFotos = function () {
        this.router.navigateByUrl('/fotos');
        this.closeDrawer();
    };
    MenuComponent.prototype.navContact = function () {
        this.router.navigateByUrl('/contact');
        this.closeDrawer();
    };
    MenuComponent.prototype.navImpressum = function () {
        this.router.navigateByUrl('/impressum');
        this.closeDrawer();
    };
    MenuComponent.prototype.langGerman = function () {
        this.languageService.language = src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_5__["Language"].GERMAN;
    };
    MenuComponent.prototype.langEnglish = function () {
        this.languageService.language = src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_5__["Language"].ENGLISH;
    };
    MenuComponent.prototype.languageChanged = function (language) {
        if (language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_5__["Language"].ENGLISH) {
            this.homepage = this.homepageEn;
            this.about = this.aboutEn;
            this.dogs = this.dogsEn;
            this.puppies = this.puppiesEn;
            this.contact = this.contactEn;
        }
        else {
            this.homepage = this.homepageDe;
            this.about = this.aboutDe;
            this.dogs = this.dogsDe;
            this.puppies = this.puppiesDe;
            this.contact = this.contactDe;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
    ], MenuComponent.prototype, "drawer", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/news-card/news-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/news-card/news-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>{{title}}</mat-card-title>\n    <mat-card-subtitle>{{date}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      {{text}}\n    </p>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/news-card/news-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/news-card/news-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1jYXJkL25ld3MtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/news-card/news-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/news-card/news-card.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function() { return NewsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/datatypes/language */ "./src/app/datatypes/language.ts");




var NewsCardComponent = /** @class */ (function () {
    function NewsCardComponent(languageService) {
        this.languageService = languageService;
    }
    NewsCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.subscribe(function (language) { return _this.languageChanged(language); });
        this.languageChanged(this.languageService.language);
    };
    NewsCardComponent.prototype.languageChanged = function (language) {
        if (language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_3__["Language"].ENGLISH) {
            this.title = this.titleEn;
            this.text = this.textEn;
        }
        else {
            this.title = this.titleDe;
            this.text = this.textDe;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsCardComponent.prototype, "titleDe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsCardComponent.prototype, "titleEn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsCardComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsCardComponent.prototype, "textDe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsCardComponent.prototype, "textEn", void 0);
    NewsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-card',
            template: __webpack_require__(/*! ./news-card.component.html */ "./src/app/components/news-card/news-card.component.html"),
            styles: [__webpack_require__(/*! ./news-card.component.scss */ "./src/app/components/news-card/news-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], NewsCardComponent);
    return NewsCardComponent;
}());



/***/ }),

/***/ "./src/app/datatypes/contact.ts":
/*!**************************************!*\
  !*** ./src/app/datatypes/contact.ts ***!
  \**************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/datatypes/language.ts":
/*!***************************************!*\
  !*** ./src/app/datatypes/language.ts ***!
  \***************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
var Language;
(function (Language) {
    Language[Language["GERMAN"] = 0] = "GERMAN";
    Language[Language["ENGLISH"] = 1] = "ENGLISH";
})(Language || (Language = {}));


/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>{{title}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n\n    <p>\n      {{subtitle}}\n    </p>\n\n    <form class='contact-form' (ngSubmit)='onSubmit()'>\n\n      <mat-form-field appearance='standard' class='form-item'>\n        <mat-label>Name</mat-label>\n        <input matInput ([ngModel])='contactDetails.name'\n          name='first'>\n        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field class='form-item'>\n        <mat-label>E-Mail</mat-label>\n        <input matInput [formControl]='emailFormControl'>\n        <mat-icon matSuffix>mail_outline</mat-icon>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') &&\n          !emailFormControl.hasError('required')\">\n          {{mailInvalid}}\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          {{mailRequired1}}<strong>{{mailRequired2}}</strong>.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance='outline' class='form-item form-message'>\n        <mat-label>{{message}}</mat-label>\n        <textarea matInput\n          cdkTextareaAutosize\n          #autosize='cdkTextareaAutosize'\n          [(ngModel)]='contactDetails.message'\n          name='message'></textarea>\n        <mat-icon matSuffix>comment</mat-icon>\n      </mat-form-field>\n\n      <p class='submit-wrapper'>\n        <button mat-raised-button color='accent' type='submit'>{{submit}}</button>\n      </p>\n\n    </form>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-card-header>\n      <mat-card-title>{{title2}}</mat-card-title>\n    </mat-card-header>\n  <mat-card-content>\n    <div class='icon-row'>\n        <div class='icon-wrapper'>\n            <button mat-fab color='accent' (click)='onPhoneClick()'>\n                <mat-icon>phone</mat-icon>\n            </button>\n        </div>\n      <div class='icon-wrapper'>\n          <button mat-fab color='accent' (click)='onMailClick()'>\n              <mat-icon>mail_outline</mat-icon>\n          </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n    <mat-card>\n        <mat-card-header>\n          <mat-card-title>{{title3}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div id='google-maps'>\n            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.6812380654014!2d8.763231315755515!3d52.26733326267584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba0da240514d91%3A0xf82c8d5a6222eaa4!2sMary&#39;s+Ruby!5e0!3m2!1sde!2sde!4v1550918838636' \n            width='100%' \n            height='450' \n            frameborder='0' \n            style='border:0' \n            allowfullscreen></iframe>\n          </div>\n        </mat-card-content>\n      </mat-card>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.form-item {\n  width: 80%; }\n\n.form-message {\n  margin-top: 16px; }\n\n.submit-wrapper button {\n  margin-left: auto; }\n\n.icon-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around; }\n\n.icon-wrapper {\n  padding: 6px;\n  border-radius: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXE1pY2hlbFxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXG1hcnlzcnVieS9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1pdGVtIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9ybS1tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtd3JhcHBlciB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyAvLyBUT0RPXHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uaWNvbi13cmFwcGVyIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXQtaWNvbiB7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/datatypes/language */ "./src/app/datatypes/language.ts");
/* harmony import */ var src_app_datatypes_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/datatypes/contact */ "./src/app/datatypes/contact.ts");
/* harmony import */ var src_app_services_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/email.service */ "./src/app/services/email.service.ts");







var ContactComponent = /** @class */ (function () {
    function ContactComponent(languageService, emailService) {
        this.languageService = languageService;
        this.emailService = emailService;
        this.titleDe = 'Kontakt';
        this.titleEn = 'Contact';
        this.title2De = 'Weitere Kontaktmöglichkeiten';
        this.title2En = 'Further contact options';
        this.title3De = 'Wo unsere Welpen ihre ersten Schritte machen';
        this.title3En = 'Where our puppies take their first steps';
        this.subtitleDe = 'Wir freuen uns auf Ihre Nachricht!';
        this.subtitleEn = 'Please use this contact form to get in touch with us!';
        this.messageDe = 'Nachricht';
        this.messageEn = 'Message';
        this.submitDe = 'Senden';
        this.submitEn = 'Submit';
        this.mailInvalidDe = 'Bitte geben Sie eine gültige E-Mail Adresse ein.';
        this.mailInvalidEn = 'Please enter a valid e-mail address.';
        this.mailRequired1De = 'E-Mail ist ein ';
        this.mailRequired1En = 'E-Mail is ';
        this.mailRequired2De = 'Pflichtfeld';
        this.mailRequired2En = 'required';
        this.contactDetails = new src_app_datatypes_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.subscribe(function (language) { return _this.languageChanged(language); });
        this.languageChanged(this.languageService.language);
    };
    ContactComponent.prototype.onSubmit = function () {
        this.emailService.sendContactEmail(this.contactDetails);
    };
    ContactComponent.prototype.onPhoneClick = function () {
        location.href = 'tel:+49 171 4871595';
    };
    ContactComponent.prototype.onMailClick = function () {
        location.href = 'mailto:sarah-seidel@web.de';
    };
    ContactComponent.prototype.languageChanged = function (language) {
        if (language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_4__["Language"].ENGLISH) {
            this.title = this.titleEn;
            this.title2 = this.title2En;
            this.title3 = this.title3En;
            this.message = this.messageEn;
            this.subtitle = this.subtitleEn;
            this.submit = this.submitEn;
            this.mailInvalid = this.mailInvalidEn;
            this.mailRequired1 = this.mailRequired1En;
            this.mailRequired2 = this.mailRequired2En;
        }
        else {
            this.title = this.titleDe;
            this.title2 = this.title2De;
            this.title3 = this.title3De;
            this.message = this.messageDe;
            this.subtitle = this.subtitleDe;
            this.submit = this.submitDe;
            this.mailInvalid = this.mailInvalidDe;
            this.mailRequired1 = this.mailRequired1De;
            this.mailRequired2 = this.mailRequired2De;
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            src_app_services_email_service__WEBPACK_IMPORTED_MODULE_6__["EmailService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/ella/ella.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/ella/ella.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dog-cover \r\n    name=\"Sophisticated Wheaten Noelle 'Ella'\"\r\n    birthdate='13.11.2013'\r\n    imgPath='assets/ella/ella-profil.JPG'\r\n    descriptionDe='Dieser Text beschreibt Ella.'\r\n    descriptionEn='This text describes Ella.'>\r\n</app-dog-cover>"

/***/ }),

/***/ "./src/app/pages/ella/ella.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/ella/ella.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VsbGEvZWxsYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ella/ella.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/ella/ella.component.ts ***!
  \**********************************************/
/*! exports provided: EllaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllaComponent", function() { return EllaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EllaComponent = /** @class */ (function () {
    function EllaComponent() {
    }
    EllaComponent.prototype.ngOnInit = function () {
    };
    EllaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ella',
            template: __webpack_require__(/*! ./ella.component.html */ "./src/app/pages/ella/ella.component.html"),
            styles: [__webpack_require__(/*! ./ella.component.scss */ "./src/app/pages/ella/ella.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EllaComponent);
    return EllaComponent;
}());



/***/ }),

/***/ "./src/app/pages/fotos/fotos.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/fotos/fotos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fotos works!\n</p>"

/***/ }),

/***/ "./src/app/pages/fotos/fotos.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/fotos/fotos.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvdG9zL2ZvdG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/fotos/fotos.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/fotos/fotos.component.ts ***!
  \************************************************/
/*! exports provided: FotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosComponent", function() { return FotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FotosComponent = /** @class */ (function () {
    function FotosComponent() {
    }
    FotosComponent.prototype.ngOnInit = function () {
    };
    FotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fotos',
            template: __webpack_require__(/*! ./fotos.component.html */ "./src/app/pages/fotos/fotos.component.html"),
            styles: [__webpack_require__(/*! ./fotos.component.scss */ "./src/app/pages/fotos/fotos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FotosComponent);
    return FotosComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{news}}</h1>\n\n<app-news-card\n  titleDe='Ellas Untersuchung'\n  titleEn=\"Ella's Doctors Appointment\"\n  date='15.02.2019'\n  textDe='Ellas Schwangerschaft ist nun offiziell bestätigt!'\n  textEn=\"Ella's pregnancy is now officially confirmed!\">\n</app-news-card>\n\n<app-news-card\n  titleDe=\"Mary's Ruby offiziell gegründet!\"\n  titleEn=\"Mary's Ruby officially created!\"\n  date='18.08.2018'\n  textDe='Ellas Schwangerschaft ist nun offiziell bestätigt!'\n  textEn=\"Ella's pregnancy is now officially confirmed!\">\n</app-news-card>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/datatypes/language */ "./src/app/datatypes/language.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(languageService) {
        this.languageService = languageService;
        this.newsDe = 'Aktuelles';
        this.newsEn = 'News';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.subscribe(function (language) { return _this.languageChanged(language); });
        this.languageChanged(this.languageService.language);
    };
    HomeComponent.prototype.languageChanged = function (language) {
        if (language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_3__["Language"].ENGLISH) {
            this.news = this.newsEn;
        }
        else {
            this.news = this.newsDe;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/impressum/impressum.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/impressum/impressum.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  impressum works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/impressum/impressum.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/impressum/impressum.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/impressum/impressum.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/impressum/impressum.component.ts ***!
  \********************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumComponent = /** @class */ (function () {
    function ImpressumComponent() {
    }
    ImpressumComponent.prototype.ngOnInit = function () {
    };
    ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-impressum',
            template: __webpack_require__(/*! ./impressum.component.html */ "./src/app/pages/impressum/impressum.component.html"),
            styles: [__webpack_require__(/*! ./impressum.component.scss */ "./src/app/pages/impressum/impressum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumComponent);
    return ImpressumComponent;
}());



/***/ }),

/***/ "./src/app/pages/james/james.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/james/james.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dog-cover \r\n    name=\"Ballyhara's Alroy Adare 'James'\"\r\n    birthdate='24.09.2015'\r\n    imgPath='assets/james/james-profil.JPG'\r\n    descriptionDe='Dieser Text beschreibt James.'\r\n    descriptionEn='This text describes James.'>\r\n</app-dog-cover>"

/***/ }),

/***/ "./src/app/pages/james/james.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/james/james.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2phbWVzL2phbWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/james/james.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/james/james.component.ts ***!
  \************************************************/
/*! exports provided: JamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamesComponent", function() { return JamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JamesComponent = /** @class */ (function () {
    function JamesComponent() {
    }
    JamesComponent.prototype.ngOnInit = function () {
    };
    JamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-james',
            template: __webpack_require__(/*! ./james.component.html */ "./src/app/pages/james/james.component.html"),
            styles: [__webpack_require__(/*! ./james.component.scss */ "./src/app/pages/james/james.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JamesComponent);
    return JamesComponent;
}());



/***/ }),

/***/ "./src/app/pages/litters/litters.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/litters/litters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  litters works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/litters/litters.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/litters/litters.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpdHRlcnMvbGl0dGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/litters/litters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/litters/litters.component.ts ***!
  \****************************************************/
/*! exports provided: LittersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LittersComponent", function() { return LittersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LittersComponent = /** @class */ (function () {
    function LittersComponent() {
    }
    LittersComponent.prototype.ngOnInit = function () {
    };
    LittersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-litters',
            template: __webpack_require__(/*! ./litters.component.html */ "./src/app/pages/litters/litters.component.html"),
            styles: [__webpack_require__(/*! ./litters.component.scss */ "./src/app/pages/litters/litters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LittersComponent);
    return LittersComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not Found!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendContactEmail = function (contact) {
        console.log(contact);
    };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/datatypes/language */ "./src/app/datatypes/language.ts");



var LanguageService = /** @class */ (function () {
    function LanguageService() {
        this._language = src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_2__["Language"].GERMAN;
        this.languageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(LanguageService.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (language) {
            this._language = language;
            this.languageChange.emit(language);
        },
        enumerable: true,
        configurable: true
    });
    LanguageService.prototype.subscribe = function (callbackfkt) {
        return this.languageChange.subscribe(callbackfkt);
    };
    LanguageService.prototype.isGerman = function () {
        if (this.language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_2__["Language"].GERMAN) {
            return true;
        }
        return false;
    };
    LanguageService.prototype.isEnglish = function () {
        if (this.language === src_app_datatypes_language__WEBPACK_IMPORTED_MODULE_2__["Language"].ENGLISH) {
            return true;
        }
        return false;
    };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10, IE11, and Chrome <55 requires all of the following polyfills.
 *  This also includes Android Emulators with older versions of Chrome and Google Search/Googlebot
 */
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */


/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michel\Documents\Workspace\marysruby\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map