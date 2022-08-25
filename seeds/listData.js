const {List} = require('../models')

const listData = [
    {
        list_name: "Alec's Grocery List",
        user_id: 1
    },
    {
        list_name: "Justin's Grocery List",
        user_id: 5
    },
    {
        list_name: "Anisa's Grocery List",
        user_id: 2
    },
    {
        list_name: "Taja's Grocery List",
        user_id: 3
    },
    {
        list_name: "Abdigani's Grocery List",
        user_id: 4
    },
]

const seeList = () => List.bulkCreate(listData, {})

module.exports = seeList