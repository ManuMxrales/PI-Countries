const { Country, Activities } = require("../db");
const { Op } = require('sequelize');
class ActivitieService {

    async createActivitie(name, difficulty, duration, season, pais){
        const actividad = await Activities.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season,
            
        });
        pais.forEach(async (p) => {
            let act = await Country.findOne({
                where: {
                    id: p
                }
            })
            await actividad.addCountry(act);
        });
        
        return "Actividad Agregada Exitosamente";
    }
}
module.exports = ActivitieService;