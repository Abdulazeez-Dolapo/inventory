"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					coreNumber: "Core-10000",
					internalTitle:
						"Clamshell Container - Earth Brown - 9x9 - 1 Piece",
					vendorId: 62,
					backupVendorId: 90,
					active: true,
					moq: 300,
					bufferDays: 14,
					minimumLevel: "0",
					productUrl:
						"https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg",
					vendorOrderUnit: "Case",
					vendorCasePack: 300,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					coreNumber: "SUP-10198",
					internalTitle: "5 x 12 rollbag for autobagger",
					vendorId: 70,
					backupVendorId: 85,
					active: true,
					moq: 2000,
					bufferDays: 14,
					minimumLevel: "1 case",
					productUrl:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspPmuIKz6SoQ9BFvcXRMCNohtR-YGJ4e5W8W5uK39V2FjscVlCbX6h5fow5qVuBfRoII&usqp=CAU",
					vendorOrderUnit: "Piece",
					nextOrderNote: "$1.92/box",
					vendorCasePack: 300,
					restockable: true,
					hazmat: false,
					ignoreUntil: new Date().toDateString(),
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
		await queryInterface.bulkDelete("Products", null, {})
	},
}
