"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Packing extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Product, {
				foreignKey: "productCode",
				as: "product",
			})
		}
	}

	Packing.init(
		{
			casePack: DataTypes.INTEGER,
			piecesPerInternalBox: DataTypes.INTEGER,
			boxesPerCase: DataTypes.INTEGER,
			productCode: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Packing",
		}
	)

	return Packing
}
