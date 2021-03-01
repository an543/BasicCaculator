const CSVRead = require('../src/models/Read_CSV');
const City = require('../src/models/City')
const expect = require('expect');
test('Can Read CSV File', () => {
    let fPath  = 'data/worldcities.csv';
    let records = CSVRead.getRec(fPath, City);
    records.then((response) => {
        expect (response.length).toBe(6);
    });
});