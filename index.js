'use strict';

// IMPORTS

const XLSX = require('xlsx');

// FUNCTIONS

function readFile(localFilePath, sheetName = null) {
    let workbook = XLSX.readFile(localFilePath);
	if (!sheetName) { sheetName = workbook.SheetNames[0]; }
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

function writeFile(localFilePath, content, sheetName) {
	let workbook = XLSX.utils.book_new();
    let worksheet = XLSX.utils.book_new();
    XLSX.utils.sheet_add_aoa(worksheet, content);
	XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
	XLSX.writeFile(workbook, localFilePath);
}

// EXPORT

module.exports = {
	readFile,
	writeFile
};