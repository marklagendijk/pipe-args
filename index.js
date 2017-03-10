#!/usr/bin/env node

'use strict';

module.exports = (() => {
  if(process.stdin.isTTY) return;
  const stdin = require('fs').readFileSync('/dev/stdin').toString();
  process.argv.push(stdin.trim());
})();
