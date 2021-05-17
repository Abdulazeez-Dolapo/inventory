"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			coreNumber: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.STRING,
			},
			internalTitle: {
				type: Sequelize.STRING,
			},
			vendorId: {
				type: Sequelize.INTEGER,
			},
			backupVendorId: {
				type: Sequelize.INTEGER,
			},
			restockable: {
				type: Sequelize.BOOLEAN,
			},
			hazmat: {
				type: Sequelize.BOOLEAN,
			},
			active: {
				type: Sequelize.BOOLEAN,
			},
			moq: {
				type: Sequelize.INTEGER,
			},
			bufferDays: {
				type: Sequelize.INTEGER,
			},
			minimumLevel: {
				type: Sequelize.STRING,
			},
			productUrl: {
				type: Sequelize.STRING,
			},
			nextOrderNote: {
				type: Sequelize.STRING,
			},
			ignoreUntil: {
				type: Sequelize.DATE,
			},
			vendorOrderUnit: {
				type: Sequelize.ENUM("Case", "Piece"),
			},
			vendorCasePack: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Products")
	},
}
