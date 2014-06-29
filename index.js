var C = {};  // C Object simplifies exporting the module
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var tooBig = 10000000; // nobody needs change for more than £10M
C.noZeroErrMsg = 'total/paid cannot be zero';
C.noChangeErrMsg = 'no change';
C.tooBigErrMsg = 'total/paid are too big. please try again';
/**
 * getChange returns and Array containing the values of notes & coins
 * equivalent to the change for a given transaction
 * @param {Number}  totalPayable the amount payable for a transaction
 * @param {Number}  cashPaid  the amount the customer hands over to pay
 * @returns {Array} [500,20,5] the array equivalent of the change
 */
C.getChange = function (totalPayable, cashPaid, callback) {
    'use strict';

// console.log(totalPayable +' | ' +cashPaid);


    if(totalPayable === 0 || isNaN(totalPayable) || isNaN(cashPaid)) {
      callback(C.noZeroErrMsg, []);
    }

    if(totalPayable > tooBig
      || cashPaid > tooBig) {
      callback(C.tooBigErrMsg, []);
    }

    if(cashPaid - totalPayable === 0 || totalPayable - cashPaid === 0) {
      callback(C.noChangeErrMsg, []);
    }

    var change = [], length = coins.length,
    remaining = cashPaid - totalPayable; // we reduce this below

    for (var i = 0; i < length; i++) { // loop through array of notes & coins:
        var coin = coins[i];

        if(remaining/coin >= 1) { // check coin fits into the remaining amount
            var times = Math.floor(remaining/coin); // no partial coins

            for(var j = 0; j < times; j++) { // add coin to change array x times
                change.push(coin);
                remaining = remaining - coin; // reduce remaining amount by coin
                if(remaining === 0){
                  callback(null, change);
                }
            }
        }
    }
};

module.exports = C;         // export the module with a single method
