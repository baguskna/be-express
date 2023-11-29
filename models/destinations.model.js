const Sequelize = require("sequelize");

function destinationsModel(sequelize) {
  const Destinations = sequelize.define(
    "destinations",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      images: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descriptions: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Destinations;
}

module.exports = {
  destinationsModel,
};