const protobuf = require("protobufjs");
const assert = require('assert')

const root = protobuf.loadSync("awesome.proto");
const AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
const payload = { field: "2452634885669898024" };

const object = AwesomeMessage.toObject(
  AwesomeMessage.decode(
    AwesomeMessage.encode(
      AwesomeMessage.create(payload)).finish()), { longs: String });

assert.equal(object.field, "2452634885669898024");
