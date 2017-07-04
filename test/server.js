var expect = require("chai").expect;
var request = require("request");
var server = require("../app/server");

describe("testing the server", function() {
	var url = "http://localhost:8080";

	it("returns status 200", function() {
		request(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});

	it("returns kobizu", function() {
		request(url, function(error, response, body) {
			expect(body).to.equal("kobizu");
			done();
		});
	});
});