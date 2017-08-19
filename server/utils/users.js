[{
  id: 'adadaswqdas',
  name: 'Chang',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor (id, name, room) {
    this.users = [];
  };
  addUser (id, name, room) {
    var user = {id, name, room}
    this.users.push(user);
    return user;
  };
  removeUser (id) {
    // return user that was removed
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    };

    return user;
  };
  getUser (id) {
    return this.users.filter((user) => {
      return user.id === id
    })[0];
  };
  getUserList (room) {

    // or, var users = this.users.filter((user) => user.room === room);
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    // or, var namesArray = users.map((user) => user.name);
    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  };
}

module.exports = {Users};

// class Person {
//   constructor (id, name, room) {
//     this.id=id;
//     this.name = name;
//     this.room = room;
//   }
//   getUserDescription () {
//     return `${this.name} is my name`
//   }
// }
//
// var me = new Person('123', 'chang', 'room1');
// var description = me.getUserDescription();
// console.log(description);
