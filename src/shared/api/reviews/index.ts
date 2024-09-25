import { IReviewsData } from '@/shared/types'
import axios from 'axios'
import { baseApiURL } from '../urls'

export const getReviews = () =>
	axios.get<IReviewsData[]>('/reviews', { baseURL: baseApiURL })
