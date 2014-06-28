var test  = require('tape');
var C = require('./');

test('total=187&paid=400', function(t) {
  C.getChange(187, 400, function(err, change){
    t.equal(err, null);
    t.deepEqual(change, [200, 10, 2, 1]);
    t.end();
  });
});

test('both values undefined', function(t) {
  C.getChange(undefined, undefined, function(err, change){
    t.equal(err, C.noZeroErrMsg);
    t.deepEqual(change, []);
    t.end();
  });
});

test('total=null&paid=null', function(t) {
  C.getChange(null, null, function(err, change){
    t.equal(err, C.noChangeErrMsg);
    t.deepEqual(change, []);
    t.end();
  });
});

test('total=hello&paid=world', function(t) {
  C.getChange('hello', 'world', function(err, change){
    t.equal(err, C.noZeroErrMsg);
    t.deepEqual(change, []);
    t.end();
  });
});

test('test change (difference) is Zero', function(t) {
  C.getChange(42, 42, function(err, change){
    t.equal(err, C.noChangeErrMsg);
    t.deepEqual(change, []);
    t.end();
  });
});

test('test large numbers', function(t) {
  C.getChange(Number.MAX_SAFE_INTEGER*2, Number.MAX_SAFE_INTEGER+1, function(err, change){
    // t.equal(err, C.tooBigErrMsg);
    t.deepEqual(change, []);
    t.end();
  });
});
