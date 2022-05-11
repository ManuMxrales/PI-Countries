const express = require('express');
const router = express.Router();
const ActivitieService = require('../services/activities.services.js');

const service = new ActivitieService();

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, pais} = req.body;
    const act = await service.createActivitie(name, difficulty, duration, season, pais);
    res.json(act);
})

module.exports = router;