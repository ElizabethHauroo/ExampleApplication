var assert = require('assert');
var utils = require("../modules/utils")

describe('utils', function() {
  describe('#add()', function() {
    it('should return 2 when 1 and 1 is added', function() {
      assert.equal(utils.add(1,1), 2);
    });
    it('should return 37 when 15 and 22 is added', function() {
        assert.equal(utils.add(15,22), 37);
    });
  });

  describe('#multiply()', function() {
    it('should return 4 when 2 and 2 is multiplied', function() {
      assert.equal(utils.multiply(2,2), 4);
    });
    it('should return 49 when 7 and 7 is multiplied', function() {
        assert.equal(utils.multiply(7,7), 49);
    });
  });

  describe('#subtract()', function() {
    it('should return -4 when 4 and 8 is subtracted', function() {
      assert.equal(utils.subtract(4,8), -4);
    });
    it('should return 12 when 4 and -8 is subtracted', function() {
        assert.equal(utils.subtract(4,-8), 12);
      });
    it('should return 1 when 2 and 1 is subtracted', function() {
        assert.equal(utils.subtract(2,1), 1);
    });
  });

  describe('#divide()', function() {
    it('should return 4 when 8 and 2 is divided', function() {
      assert.equal(utils.divide(8,2), 4);
    });
    it('should return 1 when 1 and 1 is divided', function() {
        assert.equal(utils.divide(1,1), 1);
    });
    it('should return 0 when 1 and 0 is divided', function() {
        assert.equal(utils.divide(1,0), Infinity);
    });
  });

});