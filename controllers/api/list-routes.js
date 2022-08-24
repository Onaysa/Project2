const router = require('express').Router()
const { List } = require('../../models')

// Add list 
router.post("/add", async (req, res) => {
    if (req.session.loggedIn){
        try {
            const newList = await List.create({
                list_name: req.body.listName,
                user_id: req.session.userId
            })
            res.status(200).json(newList)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(404).end()
    }
})

// Delete list
router.delete("/delete", async (req, res) => {
    if (req.session.loggedIn){
        try {
            const deleteList = await List.destroy({
                where: {
                    id: req.body.id
                }
            })
            res.status(200).json(deleteList)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(404).end()
    }
})
module.exports = router