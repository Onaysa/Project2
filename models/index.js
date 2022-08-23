const User = require("./User")
const List = require("./List")
const Item = require("./Item")

// User to List relationship
User.hasMany(List, {
    foreignKey: "user_id",
})

List.belongsTo(User, {
   foreignKey: "user_id",
})

// List to Item relationship
List.hasMany(Item, {
  foreignKey: "list_id"
})

Item.belongsTo(List, {
  foreignKey: "list_id"
})


module.exports = { User, List, Item }
