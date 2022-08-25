const {Item} = require('../models')

const itemData = [
    // Alec
    {
        item_name:'Pasta',
        item_cost: 1.50,
        list_id: 1
    },
    {
        item_name:'Rice',
        item_cost: 2.50,
        list_id: 1
    },
    {
        item_name: 'Milk',
        item_cost: 2.50,
        list_id: 1
    },
    {
        item_name: 'Cheese',
        item_cost: 2.50,
        list_id: 1
    },
    {
        item_name: 'Cooking oil',
        item_cost: 1.50,
        list_id: 1
    },
    {
        item_name: 'Onions',
        item_cost: 0.50,
        list_id: 1
    },
    {
        item_name: 'Fruit',
        item_cost: 5.50,
        list_id: 1
    },
    {
        item_name: 'Vegetables',
        item_cost: 3.50,
        list_id: 1
    },
    {
        item_name: 'Herbs & spices',
        item_cost: 1.50,
        list_id: 1
    },
    {
        // Taja
        item_name:'Milk',
        item_cost: 1.50,
        list_id: 1
    },
    {
        item_name:'Bread',
        item_cost: 2.50,
        list_id: 1
    },
    {
        item_name: 'Egg',
        item_cost: 2.50,
        list_id: 1
    },
    // Justin
    {
        item_name: 'Cheese',
        item_cost: 2.50,
        list_id: 5
    },
    {
        item_name: 'Cooking oil',
        item_cost: 1.50,
        list_id: 5
    },
    // Anisa
    {
        item_name: 'Onions',
        item_cost: 2.50,
        list_id: 2
    },
    {
        item_name: 'Fruit',
        item_cost: 3.50,
        list_id: 2
    },
    {
        item_name: 'Vegetables',
        item_cost: 5.50,
        list_id: 2
    },
    {
        item_name: 'Herbs & spices',
        item_cost: 1.50,
        list_id: 2
    },
    // // Abdigani
    {
        item_name:'Pasta',
        item_cost: 1.50,
        list_id: 4
    },
    {
        item_name:'Rice',
        item_cost: 2.50,
        list_id: 4
    },
    {
        item_name: 'Milk',
        item_cost: 2.50,
        list_id: 4
    },
    {
        item_name: 'Cheese',
        item_cost: 2.50,
        list_id: 4
    },
    {
        item_name: 'Cooking oil',
        item_cost: 1.50,
        list_id: 4
    },
    {
        item_name: 'Onions',
        item_cost: 0.50,
        list_id: 4
    },
]

const seedItem = () => Item.bulkCreate(itemData, {})

module.exports = seedItem