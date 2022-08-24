const router = require("express").Router();
const { User, List, Item } = require("../models");

// home route
router.get("/", (req, res) => {
    try {
        // res.render("home")
        res.render("home", {
            logged_in: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

// Login page route
router.get("/login", (req, res) => {
    res.render("login", {})
});

// User lists route
router.get("/lists", async (req, res) => {
    if (req.session.loggedIn == true) {
        try {
            const dbListData = await List.findAll({
                where: {
                    user_id: req.session.userId,
                },
            });

            // serialize post data
            const lists = dbListData.map((cleaningLists) =>
                cleaningLists.get({ plain: true })
            );

            res.render("lists", {
                lists,
                logged_in: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    } else {
        res.redirect("/login");
    }
});

// Get individual posts with comments
router.get("/list/:id", async (req, res) => {
    if (req.session.loggedIn == true) {
        try {
            // Get posts
            const listData = await List.findByPk(req.params.id, {
                include: [{ model: Item }],
            });

            if (listData.user_id == req.session.userId) {
                // serialize post data
                const list = listData.get({ plain: true });
                // Use serilized data
                console.log(list);
                res.render("list", {
                    list,
                    logged_in: req.session.loggedIn,
                });
            } else {
                res.json({ message: "That is not your list" });
            }
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    } else {
        res.redirect("/login");
    }
});

// User signup route
router.get("/signup", (req, res) => {
    try {
        res.render("signup");
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

module.exports = router;
