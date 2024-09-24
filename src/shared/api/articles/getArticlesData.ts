import { IArticlesCardData } from '@/shared/types'
import axios from 'axios'
import { baseURL } from '../urls'

export const getArticles = () =>
	axios.get<IArticlesCardData[]>('/articles', { baseURL })
