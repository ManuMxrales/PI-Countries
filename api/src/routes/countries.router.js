const express = require("express");
const router = express.Router();
const CountryService = require("../services/country.services.js");

const service = new CountryService();

router.get("/", async (req, res) => {
try {
  const { name } = req.query;
  if (name) {
    const paises = await service.find(name);
    if(typeof paises === 'string'){
      res.status(404).json(paises);
    }else{
      res.json(paises);
    }
  } else {
    const paises = await service.getCountries();
    res.json(paises);
  }
} catch (error) {
  console.log(error)
}
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let idPais = id.toUpperCase();
  const paises = await service.findOne(idPais);
  if(typeof paises === 'string'){
    res.status(404).json(paises);
  }else{
    res.json(paises);
  }
});




module.exports = router;
