"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Locations",
			[
				{
					warehouse: "Cores",
					productCode: "Core-10000",
					location: "A50",
					quantity: 125,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					warehouse: "Cores",
					productCode: "Core-10000",
					location: "A57",
					quantity: 1325,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					warehouse: "Cores",
					productCode: "SUP-10198",
					location: "A77",
					quantity: 3000,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					warehouse: "JFN",
					productCode: "SUP-10198",
					location: "10A",
					quantity: 30,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					warehouse: "Pre-processed",
					productCode: "SUP-10198",
					location: "19C",
					quantity: 120,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 */
		await queryInterface.bulkDelete("Locations", null, {})
	},
}
