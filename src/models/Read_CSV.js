const parse = require('csv-parse')
const fs = require('fs');
const outData = []


class Read_CSV {
    static async getRec(fPath, model) {
        // return
        return new Promise((resolve, reject) => {
            fs.createReadStream(fPath)
                //creating a pipe of data to flow
                .pipe(parse({
                    columns: true,
                    delimiter: ',',
                    trim: true,
                    skip_empty_lines: true
                }))
                .on('readable', function () {
                    let record
                    while (record = this.read()) {
                        let city = model.create(record);
                        outData.push(record)
                    }
                })
                // Following is creating the output for the data
                .on('end', function () {

                    resolve(outData);

                })
        });
    }
}
module.exports = Read_CSV;







