const request = require("supertest");
const express = require("express");
const app = express();

describe("GET /", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/query/get_genre_frequencies")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
