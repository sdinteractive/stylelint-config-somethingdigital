"use strict";

module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-empty-line-before": [ "always", {
      except: [
        "blockless-after-same-name-blockless",
        "first-nested",
        "inside-block",
      ],
      ignore: ["after-comment"],
      ignoreAtRules: ["include"],
    } ],
    "number-leading-zero": "never",
  }
}
