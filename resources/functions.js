let searchForWeather = (browser, inputPlace) => {
    browser
        .waitForElementVisible('@searchField', 5000, 'Search field found after %d')
        .setValue('@searchField', inputPlace)
        .click('@submitBtn')
}

module.exports = {
    searchForWeather: searchForWeather
}