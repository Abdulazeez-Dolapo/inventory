import axiosInstance from "./axios"

export const fetchAllProducts = async () => {
	return axiosInstance.get("/products")
}

export const updateProductQuantity = async (locationId, newQuantity) => {
	return axiosInstance.patch(`/location/${locationId}`, newQuantity)
}

export const fetchSingleProduct = async coreNumber => {
	return axiosInstance.get(`/product/${coreNumber}`)
}
