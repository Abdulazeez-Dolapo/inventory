"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Packings",
			[
				{
					productCode: "Core-10000",
					casePack: 13,
					piecesPerInternalBox: 130,
					boxesPerCase: 203,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productCode: "SUP-10198",
					piecesPerInternalBox: 40,
					boxesPerCase: 75,
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
		await queryInterface.bulkDelete("Packings", null, {})
	},
}
