var expect = require("chai").expect;
var request = require("request");
var app = require("../app");

describe("testing the server", function() {
	var url = "http://localhost:3000";
	var server;

	before(function() {
		server = app.listen(3000);
	})

	after(function() {
		server.close();
	})

	it("returns status 200", function(done) {
		request(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});
});
