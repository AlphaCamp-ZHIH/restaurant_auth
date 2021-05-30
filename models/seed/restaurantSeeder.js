const Restaurant = require("../restaurants");
const User = require("../users");
const data = require("../../restaurant.json").results;

const bcrypt = require("bcryptjs");
const db = require("../../config/mongoose");

const data1 = data.slice(0, 4);
const data2 = data.slice(4);

const userData = [
  {
    organizer: "Chen",
    email: "user1@example.com",
    password: "12345678",
    data: data1,
  },
  {
    organizer: "Zhih",
    email: "user2@example.com",
    password: "12345678",
    data: data2,
  },
];

db.once("open", async() => {
  await Promise.all(
    userData.map((user) => {
      const { organizer, email, password, data } = user;
      return bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(password, salt))
        .then((hash) => User.create({ organizer, email, password: hash }))
        .then((_user) => {
          const userId= _user._id;
          return Promise.all(data.map(item =>{
            return Restaurant.create({
              ...item,
              userId
            })
          }))
          .catch(e =>console.log('inner error:',e))
        })
        .catch(e =>console.log('outer error:',e))
    })
  )
  db.close();
  console.log('create seeds successfully')
});
