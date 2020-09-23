function fruits(str) {

    return str.split(',');

}

module.exports = fruits;

Unit Test

var fruits = require("../fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Watermelon,Pineapple,Banana');

        assert(Array.isArray(f));

    });

});