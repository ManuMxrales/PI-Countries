const express = require('express');
const router = express.Router();
const ActivitieService = require('../services/activities.services.js');

const service = new ActivitieService();

router.post('/', async (req, res) => {
    const act = await service.createActivitie();
    res.json(act);
})

module.exports = router;