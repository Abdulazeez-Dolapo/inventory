"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Tags", {
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
			tagOne: {
				type: Sequelize.STRING,
			},
			tagTwo: {
				type: Sequelize.STRING,
			},
			tagThree: {
				type: Sequelize.STRING,
			},
			tagFour: {
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
		await queryInterface.dropTable("Tags")
	},
}
