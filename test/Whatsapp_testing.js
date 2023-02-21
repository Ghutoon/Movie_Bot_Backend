var expect = require("chai").expect;
var request = require("request");
const assert = require("assert");
const { response } = require("express");
const whatsapp = require("../WhatsappUtils");
const test = require("../Whatsapp_Message_Template.json");

describe("Check payload to whatsapp info", () => {
  it("Check phone number and user message", (done) => {
    let payload = test;
    let x = new whatsapp.WhatsappUtils();
    let res = x.extract_number_and_message(payload);
    expect(res).to.have.property("num");
    assert(typeof res.num === "string");
    expect(res).to.have.property("msg");
    assert(typeof res.msg === "string");
    done();
  });
});

let number = "917044174529";
let message_body = "hello";

describe("Check payload of posting to whatsapp", () => {
  it("check whether the configuration file is okay or not", (done) => {
    let res = new whatsapp.WhatsappUtils().generate_payload(
      number,
      message_body
    );
    expect(res).to.have.property("method");
    expect(res).to.have.property("url");
    expect(res).to.have.nested.property("headers.Authorization");
    expect(res).to.have.nested.property("headers.Content-Type");
    expect(res).to.have.property("data");
    done();
  });
});
