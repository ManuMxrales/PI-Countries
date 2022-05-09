const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activities", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        max: 5,
        min: 1,
      },
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    temporada: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
      },
    },
  });
};
