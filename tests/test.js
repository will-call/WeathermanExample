const functions = require('../resources/functions')
const data = require('../resources/data')


module.exports = {
    beforeEach: browser => {
        weatherman = browser.page.weatherman()
        weatherman.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Search by valid City' : browser => {
        functions.searchForWeather(weatherman, 'Tucson')
        weatherman
            .waitForElementVisible('@weatherLocation', 5000, 'Valid City Found')
            .expect.element('@weatherLocation').text.to.be.equal('Tucson')
    },

    'Search by valid zip' : browser => {
        functions.searchForWeather(weatherman, data.searchByZip.zip)
        weatherman
            .waitForElementVisible('@weatherLocation', 5000, 'Valid City Found')
            .expect.element('@weatherLocation').text.to.be.equal(data.searchByZip.cityOutput)
    }


}
let weatherman = {}