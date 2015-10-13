module.exports = function(userIds, load, done) {
  var users = [],
    counter = 0;

  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      counter++;
      if (counter === userIds.length) {
        done(users);
      }
    });
  });
};
