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

			this.hasOne(models.Packing)
			this.belongsTo(models.Packing, {
				targetKey: "productCode",
				foreignKey: "packing",
			})

			this.hasOne(models.Tag)
			this.belongsTo(models.Tag, {
				targetKey: "productCode",
				foreignKey: "tags",
			})

			this.hasMany(models.Location, {
				foreignKey: "productCode",
				as: "locations",
			})

			this.hasMany(models.Note, {
				foreignKey: "productCode",
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
			vendorOrderUnit: DataTypes.STRING,
			vendorCasePack: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Product",
		}
	)

	return Product
}
