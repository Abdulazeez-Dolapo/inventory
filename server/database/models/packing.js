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
				targetKey: "coreNumber",
			})
		}
	}

	Packing.init(
		{
			productCode: DataTypes.STRING,
			casePack: DataTypes.INTEGER,
			piecesPerInternalBox: DataTypes.INTEGER,
			boxesPerCase: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Packing",
		}
	)

	return Packing
}
