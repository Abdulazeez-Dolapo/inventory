"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Vendor extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}

	Vendor.init(
		{
			vendor: { type: DataTypes.INTEGER, primaryKey: true },
			title: DataTypes.STRING,
			sku: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Vendor",
		}
	)

	return Vendor
}
