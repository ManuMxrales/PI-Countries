const axios = require("axios");
const { Country, Activities } = require("../db");
const { Op } = require("sequelize");

class CountryService {
  constructor() {
    this.getApiCountries();
  }
  async getApiCountries() {
    try {
      const con = await axios.get("https://restcountries.com/v3/all");
      const info = await con.data.map((c) => {
        return {
          id: c.cca3,
          name: c.name.common.toLowerCase(),
          image: c.flags[1],
          continents: Array.isArray(c.continents)
            ? c.continents[0]
            : c.continents,
          capital:
            typeof c.capital === "object"
              ? c.capital[0]
              : "Capital no encontrada",
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      });
      Country.bulkCreate(info);
      return info;
    } catch (error) {
      throw Error(error);
    }
  }
  async getCountries() {
    try {
      const instancias = await Country.findAll({
        include: {
          model: Activities,
        },
      });
      return instancias;
    } catch (error) {
      throw Error(error);
    }
  }

  async find(name) {
    try {
      const instancias = await Country.findAll({
        where: {
          name: { [Op.substring]: name },
        },
        include: {
          model: Activities,
        },
      });
      return instancias.length
        ? instancias
        : "No existe un pais con ese nombre";
    } catch (error) {
      throw Error(error.message);
    }
  }

  async findOne(id) {
    try {
      let realId = id.substring(1);
      const instancias = await Country.findByPk(realId, {
        include: {
          model: Activities,
        },
      });
      return instancias ? instancias : "No existe un pais con ese ID";
    } catch (error) {
      throw Error(error.message);
    }
  }
}
module.exports = CountryService;
