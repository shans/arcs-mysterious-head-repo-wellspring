// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt
"use strict";

class ParticleExecutionContext {
  constructor() {
  }

  // Instantiates `particle` in this context, connecting `views` to the particle's inputs and outputs.
  // `mutateCallback` will be called each time the particle mutates a view or entity.
  // Returns an identifier to refer to the particle (in `dispatch`).
  instantiate(particle, views, mutateCallback) {
    // views => {name => viewId}
    throw 'unimplemented';
  }

  // Dispatches an event to the particle identified by `particleId` for the view or entity identified
  // by `entityId` concerning `eventDetails. The `morePending` flag indicates whether there are any
  // known further events to be dispatched to the same particle.
  dispatch(particleId, entityId, eventDetails, morePending) {
    throw 'unimplemented';
  }

  // Returns a promise which resolves when the PEC becomes idle (no known input processing).
  get idle() {
    throw 'unimplemented';
  }

  // Returns a promise which resolves to a map from particle identifier to a list of the relevance
  // entries generated by that particle.
  get relevance() {
    throw 'unimplemented';
  }
}

module.exports = ParticleExecutionContext;
