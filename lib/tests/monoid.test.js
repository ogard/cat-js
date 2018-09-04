"use strict";

var Monoid = _interopRequireWildcard(require("../instances/monoid"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// test('Monoid instances to pass rules of identity, composition, associativity', () => {
//   Object.keys(Monoid).forEach(key => {
//     console.log(Monoid)
//     // identity law:
//     expect(
//       // Monoid[key].compose(
//       //   5,
//       //   Monoid[key].identity,
//       // ) ==
//       //   Monoid[key].compose(
//       //     Monoid[key].identity,
//       //     4,
//       //   ),
//       false,
//     ).toBe(true)
//   })
// })
test('Monoid instances to pass identity law', () => {
  const SumMonoid = new Monoid.Sum();
  const MultiplyMonoid = new Monoid.Multiply();
  const ConcatMonoid = new Monoid.Concat();
  expect(SumMonoid.compose(5, SumMonoid.identity) === SumMonoid.compose(SumMonoid.identity, 5)).toBe(true);
  expect(MultiplyMonoid.compose(5, MultiplyMonoid.identity) === MultiplyMonoid.compose(MultiplyMonoid.identity, 5)).toBe(true);
  expect(ConcatMonoid.compose('TestString', ConcatMonoid.identity) === ConcatMonoid.compose(ConcatMonoid.identity, 'TestString')).toBe(true);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9tb25vaWQudGVzdC5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwiU3VtTW9ub2lkIiwiTW9ub2lkIiwiU3VtIiwiTXVsdGlwbHlNb25vaWQiLCJNdWx0aXBseSIsIkNvbmNhdE1vbm9pZCIsIkNvbmNhdCIsImV4cGVjdCIsImNvbXBvc2UiLCJpZGVudGl0eSIsInRvQmUiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLElBQUksQ0FBQyx1Q0FBRCxFQUEwQyxNQUFNO0FBQ2xELFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxNQUFNLENBQUNDLEdBQVgsRUFBbEI7QUFDQSxRQUFNQyxjQUFjLEdBQUcsSUFBSUYsTUFBTSxDQUFDRyxRQUFYLEVBQXZCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLElBQUlKLE1BQU0sQ0FBQ0ssTUFBWCxFQUFyQjtBQUNBQyxFQUFBQSxNQUFNLENBQ0pQLFNBQVMsQ0FBQ1EsT0FBVixDQUNFLENBREYsRUFFRVIsU0FBUyxDQUFDUyxRQUZaLE1BSUVULFNBQVMsQ0FBQ1EsT0FBVixDQUNFUixTQUFTLENBQUNTLFFBRFosRUFFRSxDQUZGLENBTEUsQ0FBTixDQVNFQyxJQVRGLENBU08sSUFUUDtBQVVBSCxFQUFBQSxNQUFNLENBQ0pKLGNBQWMsQ0FBQ0ssT0FBZixDQUNFLENBREYsRUFFRUwsY0FBYyxDQUFDTSxRQUZqQixNQUlFTixjQUFjLENBQUNLLE9BQWYsQ0FDRUwsY0FBYyxDQUFDTSxRQURqQixFQUVFLENBRkYsQ0FMRSxDQUFOLENBU0VDLElBVEYsQ0FTTyxJQVRQO0FBVUFILEVBQUFBLE1BQU0sQ0FDSkYsWUFBWSxDQUFDRyxPQUFiLENBQ0UsWUFERixFQUVFSCxZQUFZLENBQUNJLFFBRmYsTUFJRUosWUFBWSxDQUFDRyxPQUFiLENBQ0VILFlBQVksQ0FBQ0ksUUFEZixFQUVFLFlBRkYsQ0FMRSxDQUFOLENBU0VDLElBVEYsQ0FTTyxJQVRQO0FBVUQsQ0FsQ0csQ0FBSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIE1vbm9pZCBmcm9tICcuLi9pbnN0YW5jZXMvbW9ub2lkJ1xuXG4vLyB0ZXN0KCdNb25vaWQgaW5zdGFuY2VzIHRvIHBhc3MgcnVsZXMgb2YgaWRlbnRpdHksIGNvbXBvc2l0aW9uLCBhc3NvY2lhdGl2aXR5JywgKCkgPT4ge1xuLy8gICBPYmplY3Qua2V5cyhNb25vaWQpLmZvckVhY2goa2V5ID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhNb25vaWQpXG4vLyAgICAgLy8gaWRlbnRpdHkgbGF3OlxuLy8gICAgIGV4cGVjdChcbi8vICAgICAgIC8vIE1vbm9pZFtrZXldLmNvbXBvc2UoXG4vLyAgICAgICAvLyAgIDUsXG4vLyAgICAgICAvLyAgIE1vbm9pZFtrZXldLmlkZW50aXR5LFxuLy8gICAgICAgLy8gKSA9PVxuLy8gICAgICAgLy8gICBNb25vaWRba2V5XS5jb21wb3NlKFxuLy8gICAgICAgLy8gICAgIE1vbm9pZFtrZXldLmlkZW50aXR5LFxuLy8gICAgICAgLy8gICAgIDQsXG4vLyAgICAgICAvLyAgICksXG4vLyAgICAgICBmYWxzZSxcbi8vICAgICApLnRvQmUodHJ1ZSlcbi8vICAgfSlcbi8vIH0pXG5cbnRlc3QoJ01vbm9pZCBpbnN0YW5jZXMgdG8gcGFzcyBpZGVudGl0eSBsYXcnLCAoKSA9PiB7XG4gIGNvbnN0IFN1bU1vbm9pZCA9IG5ldyBNb25vaWQuU3VtKClcbiAgY29uc3QgTXVsdGlwbHlNb25vaWQgPSBuZXcgTW9ub2lkLk11bHRpcGx5KClcbiAgY29uc3QgQ29uY2F0TW9ub2lkID0gbmV3IE1vbm9pZC5Db25jYXQoKVxuICBleHBlY3QoXG4gICAgU3VtTW9ub2lkLmNvbXBvc2UoXG4gICAgICA1LFxuICAgICAgU3VtTW9ub2lkLmlkZW50aXR5LFxuICAgICkgPT09XG4gICAgICBTdW1Nb25vaWQuY29tcG9zZShcbiAgICAgICAgU3VtTW9ub2lkLmlkZW50aXR5LFxuICAgICAgICA1LFxuICAgICAgKSxcbiAgKS50b0JlKHRydWUpXG4gIGV4cGVjdChcbiAgICBNdWx0aXBseU1vbm9pZC5jb21wb3NlKFxuICAgICAgNSxcbiAgICAgIE11bHRpcGx5TW9ub2lkLmlkZW50aXR5LFxuICAgICkgPT09XG4gICAgICBNdWx0aXBseU1vbm9pZC5jb21wb3NlKFxuICAgICAgICBNdWx0aXBseU1vbm9pZC5pZGVudGl0eSxcbiAgICAgICAgNSxcbiAgICAgICksXG4gICkudG9CZSh0cnVlKVxuICBleHBlY3QoXG4gICAgQ29uY2F0TW9ub2lkLmNvbXBvc2UoXG4gICAgICAnVGVzdFN0cmluZycsXG4gICAgICBDb25jYXRNb25vaWQuaWRlbnRpdHksXG4gICAgKSA9PT1cbiAgICAgIENvbmNhdE1vbm9pZC5jb21wb3NlKFxuICAgICAgICBDb25jYXRNb25vaWQuaWRlbnRpdHksXG4gICAgICAgICdUZXN0U3RyaW5nJyxcbiAgICAgICksXG4gICkudG9CZSh0cnVlKVxufSlcbiJdfQ==