"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Product, {
				foreignKey: "productCode",
				targetKey: "coreNumber",
			})
		}
	}

	Location.init(
		{
			warehouse: DataTypes.STRING,
			productCode: DataTypes.STRING,
			location: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Location",
		}
	)

	return Location
}
