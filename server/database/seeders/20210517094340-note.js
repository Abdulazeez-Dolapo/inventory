"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Notes",
			[
				{
					content: "This is some content for this product",
					productCode: "SUP-10198",
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
		await queryInterface.bulkDelete("Notes", null, {})
	},
}
