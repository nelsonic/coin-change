# Coin Change
[![Build Status](https://travis-ci.org/nelsonic/coin-change.png?branch=master)](https://travis-ci.org/nelsonic/coin-change)
[![Coverage Status](https://coveralls.io/repos/nelsonic/coin-change/badge.png)](https://coveralls.io/r/nelsonic/coin-change)
[![Code Climate](https://codeclimate.com/github/nelsonic/coin-change.png)](https://codeclimate.com/github/nelsonic/coin-change)
[![Dependencies](https://david-dm.org/nelsonic/coin-change.png?theme=shields.io)](https://david-dm.org/nelsonic/coin-change)
[![devDependency Status](https://david-dm.org/nelsonic/coin-change/dev-status.svg)](https://david-dm.org/nelsonic/coin-change#info=devDependencies)
[![NPM version](https://badge.fury.io/js/coin-change.png)](https://npmjs.org/pcoin-changekage/coin-change)

## Problem

For a given **total** and amount **paid** calculate
the change in notes & coins.

### Coins

In the UK we have the following Notes & Coins:

![GBP Notes](https://raw.github.com/nelsonic/learn-mocha/master/images/gbp-notes.jpg "GBP Notes")
![GBP Coins](https://raw.github.com/nelsonic/learn-mocha/master/images/gbp-coins.jpg "GBP Coins")

Original:http://en.wikipedia.org/wiki/Coin_problem

## Solution

### One Method

- [x] De-coupled from any specific node web framework (e.g express!)
- [x] Asynchronous method (non-blocking)

### Server

```
npm start
```

Vist: http://localhost:3000/?total=287&paid=602


### Many Answers

http://stackoverflow.com/tags/coin-change
