import { ENV } from '@tools/config'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: ENV.NEXT_PUBLIC_API_URL,
})
