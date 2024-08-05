import { IRoomsCardAllData } from '@/shared/types'
import axios from 'axios'
import { cardsBreakpointUrl } from '../urls/urls'

export const getCards = () => axios.get<IRoomsCardAllData[]>(cardsBreakpointUrl)
