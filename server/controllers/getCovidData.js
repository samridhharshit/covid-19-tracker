const csv = require('csvtojson')

const csvFilePath = `${__dirname}/../databank/CovidData/raw_data2.csv`

const getCovidData = async () => {
    return csv().fromFile(csvFilePath)
}


module.exports = getCovidData