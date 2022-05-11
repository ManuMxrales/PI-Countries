const axios = require("axios");
const e = require("express");
const { Sequelize } = require("sequelize");
const { Country } = require("../db");

class CountryService {
  constructor() {
    this.getApiCountries();
  }
  async getApiCountries() {
    const con = await axios.get("https://restcountries.com/v3/all");
    const info = await con.data.map((c) => {
      return {
        id: c.cca3,
        name: c.name.official,
        image: c.flags[0],
        continents: Array.isArray(c.continents)? c.continents[0] : c.continents,
        capital: typeof c.capital === 'object'? c.capital[0] : "Capital no encontrada",
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      };
    });
    Country.bulkCreate(info);
    return info;
  }
  async getCountries() {
    try {
      const instancias = await Country.findAll();
      return instancias;
    } catch (error) {
      throw Error(error);
    }
  }
  findOne(id) {
    return "Aca retornamos solo un pais" + id;
  }
  find(name) {
    return "Obtener paises pasados con el query" + name;
  }
}
module.exports = CountryService;
