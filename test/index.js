'use strict';

require('dotenv').config({ path: 'test/.env' });

const test = require('tape');
const xlsx = require('../index');

const fs = require('fs');
const path = require('path');

test('Basic test', (t) => {
	t.plan(1);
	t.equal(1, 1);
});
