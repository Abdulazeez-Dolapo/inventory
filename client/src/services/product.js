import axiosInstance from "./axios"

export const fetchAllProducts = async () => {
	return axiosInstance.get("/products")
}
