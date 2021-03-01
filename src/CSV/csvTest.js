const CSVRead = require('../src/csvReader');

const City = require('../src/Models/City')

const expect = require('expect');

test('Can Read my New CSV File', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});