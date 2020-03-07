const { Router } = require('express');
const router = Router();


// Routes
router.get('/', (req, res) => {
    res.json({ "Titutlo": "Hola Mundo en Json desde Router" });
})

router.get('/usuario', (req, res) => {
    const data = {
        "name": "Luis Hernando Valencia",
        "edad" : 27
    }
    res.json(data);
})

module.exports = router;