"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Vendor, {
				foreignKey: "vendorId",
				as: "vendor",
			})

			this.belongsTo(models.Vendor, {
				foreignKey: "backupVendorId",
				as: "backupVendor",
			})

			this.belongsTo(models.Packing, {
				foreignKey: "coreNumber",
				targetKey: "productCode",
				as: "packing",
			})

			this.belongsTo(models.Tag, {
				foreignKey: "coreNumber",
				targetKey: "productCode",
				as: "tag",
			})

			this.hasMany(models.Location, {
				foreignKey: "productCode",
				sourceKey: "coreNumber",
				as: "locations",
			})

			this.hasMany(models.Note, {
				foreignKey: "productCode",
				sourceKey: "coreNumber",
				as: "notes",
			})
		}
	}

	Product.init(
		{
			coreNumber: DataTypes.STRING,
			internalTitle: DataTypes.STRING,
			vendorId: DataTypes.INTEGER,
			backupVendorId: DataTypes.INTEGER,
			restockable: DataTypes.BOOLEAN,
			hazmat: DataTypes.BOOLEAN,
			active: DataTypes.BOOLEAN,
			moq: DataTypes.INTEGER,
			bufferDays: DataTypes.INTEGER,
			minimumLevel: DataTypes.STRING,
			productUrl: DataTypes.STRING,
			nextOrderNote: DataTypes.STRING,
			ignoreUntil: DataTypes.DATE,
			vendorOrderUnit: DataTypes.ENUM("Case", "Piece"),
			vendorCasePack: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Product",
		}
	)

	return Product
}
