var router = require('express').Router();

router.post('/submit', (req, res) => {
    console.log(req.body)
})

module.exports = router;