var User = require('../utils/db.js').User;
var UserUser = require('../utils/db.js').User_User;

module.exports = {

  getFriends: function (userId, callback) {
    User.findAll({
      include: [{
        model: UserUser,
        where: { Userid: userId }
      }]
    }).then(function (friends) {
      callback(friends[0].User_Users);
    });
  }
};
