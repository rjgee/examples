var chai = require('chai');
var should = require('chai').should();
var chaiAsPromised = require('chai-as-promised');
var example = require('./example');

chai.use(chaiAsPromised);

describe ('nested promise throws exception', function() {
	describe ('with catches', function () {
		it ('should be rejected at the top level', function() {
			return example.withCatches().should.be.rejected;
		});
	});
	
	describe ('without catches', function() {
		it ('should be rejected at the top level', function() {
			return example.withoutCatches().should.be.rejected;
		});
	});
})