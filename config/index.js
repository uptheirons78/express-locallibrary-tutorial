var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.username}:${configValues.password}.mlab.com:23258/mb_local_library`;
    }
}