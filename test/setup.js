/*
 * LiskHQ/lisk-newrelic
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import mochaBDD from 'mocha-bdd';
import chai from 'chai';
import 'chai/register-expect';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

process.env.NODE_ENV = 'test';

mochaBDD();

[chaiAsPromised, sinonChai].forEach(plugin => chai.use(plugin));

global.sinon = sinon;
global.sandbox = sinon.createSandbox({
	useFakeTimers: false,
});
