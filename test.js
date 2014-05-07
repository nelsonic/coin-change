var test  = require('tape');
var C = require('./');

test('total=187&paid=400', function(t) {
  C.getChange(187, 400, function(err, change){
    t.deepEqual(change, [200, 10, 2, 1]);
    t.end();
  });
});

// test('total=null&paid=null', function(t) {
//   C.getChange(undefined, undefined, function(err, change){
//     t.equal(err, C.noZeroErrMsg);
//     t.deepEqual(change, []);
//     t.end();
//   });
// });

// test('total=null&paid=null', function(t) {
//   C.getChange(null, null, function(err, change){
//     t.equal(err, C.noZeroErrMsg);
//     t.deepEqual(change, []);
//     t.end();
//   });
// });

test('total=hello&paid=world', function(t) {
  C.getChange('hello', 'world', function(err, change){
    t.equal(err, C.noZeroErrMsg);
    t.deepEqual(change, []);
    t.end();
  });
});

test('test change (difference) is Zero', function(t) {
  C.getChange(42, 42, function(err, change){
    // t.equal(err, 'total/paid cannot be zero');
    t.deepEqual(change, []);
    t.end();
  });
});

// test large numbers
// undefined
