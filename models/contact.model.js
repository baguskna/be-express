const Sequelize = require("sequelize");

function contactModel(sequelize) {
  const Contact = sequelize.define(
    "contact",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Contact;
}

module.exports = {
  contactModel,
};