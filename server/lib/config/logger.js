"use strict";

let logger = (function () {
  let log = function (msg) {
    console.log(msg);
  };

  return {
    log: log,
  };
})();

module.exports = logger;
