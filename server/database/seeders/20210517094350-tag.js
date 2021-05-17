"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Tags",
			[
				{
					productCode: "Core-10000",
					tagFour: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productCode: "SUP-10198",
					tagOne: "Processing",
					tagTwo: "Consumable",
					tagThree: "Box",
					tagFour: 2,
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
		await queryInterface.bulkDelete("Tags", null, {})
	},
}
