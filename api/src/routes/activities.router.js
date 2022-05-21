const express = require('express');
const router = express.Router();
const ActivitieService = require('../services/activities.services.js');
const { Country, Activities } = require("../db");

const service = new ActivitieService();

router.get('/', async (req, res) => {
    try {
        const actividades = await Activities.findAll({ include: Country })
        return res.json(actividades)
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
try {
    const { name, difficulty, duration, season, pais} = req.body;
    const act = await service.createActivitie(name, difficulty, duration, season, pais);
    res.json(act);
} catch (error) {
    console.log(error);
}
})

module.exports = router;