const express = require('express');
const router = express.Router();
const CountryService = require('../services/country.services.js');

const service = new CountryService();

router.get('/', async (req, res) => {
   const { name } = req.query;
   if(name){
      const paises = await service.find(name);
      res.json(paises);
   }else{
      const paises = await service.getCountries();
      res.json(paises);
   }
   
})

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const paises = await service.findOne(id);
   res.json(paises);
})





module.exports = router;