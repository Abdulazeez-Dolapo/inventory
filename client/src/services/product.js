import axiosInstance from "./axios"

export const fetchAllProducts = async () => {
	return axiosInstance.get("/products")
}

export const updateProductQuantity = async (locationId, newQuantity) => {
	return axiosInstance.patch(`/location/${locationId}`, newQuantity)
}
