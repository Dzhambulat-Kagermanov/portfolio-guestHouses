import { IArticlesCardData } from '@/shared/types'
import axios from 'axios'
import { articleBreakpointUrl } from '../urls/urls'

export const getArticles = () =>
	axios.get<IArticlesCardData[]>(articleBreakpointUrl)
