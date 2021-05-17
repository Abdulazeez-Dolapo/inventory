"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Vendors",
			[
				{
					vendor: 62,
					sku: 88582,
					title: "Clamshell Container 9x9 Biodegradable",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					vendor: 90,
					sku: 47228,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					vendor: 70,
					sku: 40457,
					title: "PRE-OPENED POLY BAG 5X12 2MIL 2678 1000/ROLL",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					vendor: 85,
					sku: 29070,
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
		await queryInterface.bulkDelete("Vendors", null, {})
	},
}
