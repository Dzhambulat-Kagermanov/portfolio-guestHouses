import { IRoomsCardAllData } from '@/shared/types'
import axios from 'axios'
import { cardsBreakpointUrl } from '../urls/urls'

export const getCards = () => axios.get<IRoomsCardAllData[]>(cardsBreakpointUrl)
export const getCardsBySlug = (slug: string) =>
	getCards()
		.then(res => res.data.find(item => slug === item.slug))
		.catch(() => [])
