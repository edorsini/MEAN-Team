var NicoChatMessage = require('../models/nicochatmessage');

module.exports = {
    get: function (req, res) {
        NicoChatMessage.find({}).populate('user', '-pwd').exec(function(err, result) {
            res.send(result);
            });
    }
    
}
