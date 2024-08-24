import { IReviewsData } from '@/shared/types'
import axios from 'axios'
import { reviewsBreakpointUrl } from '../urls/urls'

export const getReviews = () => axios.get<IReviewsData[]>(reviewsBreakpointUrl)
