//     Itify
//     (c) simonfan
//     Itify is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module Itify
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(["lodash","document-matcher"], function (Lodash, DocumentMatcher) {
	'use strict';

	console.log('Itify running!');

	var Itify = function Itify() {

	};


	return Itify;
});
