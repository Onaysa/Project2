const router = require('express').Router()
const { Item } = require("../../models")

// Add item 
router.post("/add", async (req, res) => {
    if (req.session.loggedIn){
        try {
            const newItem = await Item.create({
                item_name: req.body.itemName,
                item_cost: req.body.itemCost,
                list_id: req.body.listId
            })
            res.status(200).json(newItem)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(404).end()
    }
})

// Delete item
router.delete("/delete", async (req, res) => {
    if (req.session.loggedIn){
        try {
            const deleteItem = await Item.destroy({
                where: {
                    id: req.body.id
                }
            })
            res.status(200).json(deleteItem)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(404).end()
    }
})

module.exports = router