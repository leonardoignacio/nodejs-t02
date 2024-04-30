const NeDB = require('nedb');
module.exports = new NeDB({
    filename: 'pets.db',
    autoload: true
});