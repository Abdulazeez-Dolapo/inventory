export const isObjectEmpty = object => {
	if (!object) return

	return Object.keys(object).length === 0
}

export const getTotalQuantity = locations => {
	if (!locations) return

	return locations?.reduce(
		(accumulator, currentValue) => accumulator + currentValue.quantity,
		0
	)
}
