import { IArticlesCardData } from '@/shared/types'
import axios from 'axios'
import { baseApiURL } from '../urls'

export const getArticles = () =>
	axios.get<IArticlesCardData[]>('/articles', { baseURL: baseApiURL })
