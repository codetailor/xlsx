'use strict';

const test = require('tape');
const xlsx = require('../index');

const fs = require('fs');
const path = require('path');

test('Basic test', (t) => {
	t.equal(1, 1);
	t.end();
});

test('Read XLSX file', async (t) => {
	// Init
	const localFilePath = path.join('test', 'test-input.xlsx');

	// Test
	const res = xlsx.readFile(localFilePath);

	// Check
	const expected = [
		{ Field1: 'Val1', Field2: 'Val2', Field3: 'Val3' },
		{ Field1: 'Val4', Field2: 'Val5', Field3: 'Val6' }
	];
	t.deepEqual(res, expected);
	t.end();
});

test('Read XLSX file sheet', async (t) => {
	// Init
	const localFilePath = path.join('test', 'test-input.xlsx');

	// Test
	const res = xlsx.readFile(localFilePath, 'Test');

	// Check
	const expected = [
		{ Col1: 'D', Col2: 'E', Col3: 'F' },
		{ Col1: 4, Col2: 5, Col3: 6 }
	];
	t.deepEqual(res, expected);
	t.end();
});

test('Write XLSX file', async (t) => {
	// Init
	const localFilePath = path.join('test', 'test-output.xlsx');
	const content = [
		['Col 1', 'Col 2', 'Col 3'],
		['A', 'B', 'C'],
		['1', '2', '2'],
	];

	// Test
	xlsx.writeFile(localFilePath, content, 'Test');

	// Check
	t.ok(fs.existsSync(localFilePath));
	t.end();
});
