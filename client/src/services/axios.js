import axios from "axios"

const defaultOptions = {
	baseURL: process.env.REACT_APP_BASE_URL,
}

const axiosInstance = axios.create(defaultOptions)

axiosInstance.interceptors.response.use(
	res => res.data,
	err => {
		throw err.response.data.error
	}
)

export default axiosInstance
