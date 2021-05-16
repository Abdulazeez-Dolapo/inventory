"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Packings", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			productCode: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			casePack: {
				type: Sequelize.INTEGER,
			},
			piecesPerInternalBox: {
				type: Sequelize.INTEGER,
			},
			boxesPerCase: {
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
		await queryInterface.dropTable("Packings")
	},
}
