"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Concat = exports.Multiply = exports.Sum = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Sum {
  constructor() {
    _defineProperty(this, "compose", (x, y) => x + y);

    _defineProperty(this, "identity", 0);
  }

}

exports.Sum = Sum;

class Multiply {
  constructor() {
    _defineProperty(this, "compose", (x, y) => x * y);

    _defineProperty(this, "identity", 1);
  }

}

exports.Multiply = Multiply;

class Concat {
  constructor() {
    _defineProperty(this, "compose", (x, y) => `${x}${y}`);

    _defineProperty(this, "identity", void 0);
  }

} // module.exports = ({
//   sumMonoid: new Sum(),
//   mulMonoid: new Multiply(),
//   concatMonoid: new Concat(),
// }: { [key: string]: Monoid<*> })


exports.Concat = Concat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnN0YW5jZXMvbW9ub2lkLmpzIl0sIm5hbWVzIjpbIlN1bSIsIngiLCJ5IiwiTXVsdGlwbHkiLCJDb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdPLE1BQU1BLEdBQU4sQ0FBb0M7QUFBQTtBQUFBLHFDQUMvQixDQUFDQyxDQUFELEVBQVlDLENBQVosS0FBMEJELENBQUMsR0FBR0MsQ0FEQzs7QUFBQSxzQ0FFOUIsQ0FGOEI7QUFBQTs7QUFBQTs7OztBQUtwQyxNQUFNQyxRQUFOLENBQXlDO0FBQUE7QUFBQSxxQ0FDcEMsQ0FBQ0YsQ0FBRCxFQUFZQyxDQUFaLEtBQTBCRCxDQUFDLEdBQUdDLENBRE07O0FBQUEsc0NBRW5DLENBRm1DO0FBQUE7O0FBQUE7Ozs7QUFLekMsTUFBTUUsTUFBTixDQUF1QztBQUFBO0FBQUEscUNBQ2xDLENBQUNILENBQUQsRUFBWUMsQ0FBWixLQUEyQixHQUFFRCxDQUFFLEdBQUVDLENBQUUsRUFERDs7QUFBQTtBQUFBOztBQUFBLEMsQ0FLOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IE1vbm9pZCB9IGZyb20gJy4uL21vbm9pZCdcblxuZXhwb3J0IGNsYXNzIFN1bSBpbXBsZW1lbnRzIE1vbm9pZDxudW1iZXI+IHtcbiAgY29tcG9zZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCArIHlcbiAgaWRlbnRpdHkgPSAwXG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBseSBpbXBsZW1lbnRzIE1vbm9pZDxudW1iZXI+IHtcbiAgY29tcG9zZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCAqIHlcbiAgaWRlbnRpdHkgPSAxXG59XG5cbmV4cG9ydCBjbGFzcyBDb25jYXQgaW1wbGVtZW50cyBNb25vaWQ8c3RyaW5nPiB7XG4gIGNvbXBvc2UgPSAoeDogc3RyaW5nLCB5OiBzdHJpbmcpID0+IGAke3h9JHt5fWBcbiAgaWRlbnRpdHk6ICcnXG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gKHtcbi8vICAgc3VtTW9ub2lkOiBuZXcgU3VtKCksXG4vLyAgIG11bE1vbm9pZDogbmV3IE11bHRpcGx5KCksXG4vLyAgIGNvbmNhdE1vbm9pZDogbmV3IENvbmNhdCgpLFxuLy8gfTogeyBba2V5OiBzdHJpbmddOiBNb25vaWQ8Kj4gfSlcbiJdfQ==