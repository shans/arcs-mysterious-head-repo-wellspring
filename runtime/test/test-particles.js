/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var particle = require("../particle.js");
var runtime = require("../runtime.js");
var testEntities = require("./test-entities.js");

exports.TestParticle = particle.define('TestParticle(in Foo foo, out Bar bar)', (map) => {
  map.get('foo').get().then(result => map.get('bar').set(new testEntities.Bar(result.data + 1)));
  return 9;
});

exports.TwoInputTestParticle = particle.define('TwoInputTestParticle(in Foo foo, in Bar bar, out Far far)', map => {
  map.get('far').set(new testEntities.Far(map.get('foo').get().data + ' ' + map.get('bar').get().data));
  return 3;
});

exports.register = function(scope) {
  scope.registerParticle(exports.TestParticle);
  scope.registerParticle(exports.TwoInputTestParticle);
};
