import { IReviewsData } from '@/shared/types'
import axios from 'axios'
import { baseURL } from '../urls'

export const getReviews = () =>
	axios.get<IReviewsData[]>('/reviews', { baseURL })
