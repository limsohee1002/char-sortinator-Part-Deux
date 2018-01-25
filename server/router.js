var router = require('express').Router();

router.post('/submit', (req, res) => {
  let input = req.body.input
  let result = input.split('')
                    .sort()
                    .reverse()
                    .join('')

  res.send(result)
})

module.exports = router;