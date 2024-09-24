import { IRoomsCardAllData } from '@/shared/types'
import axios from 'axios'
import { baseURL } from '../urls'

export const getRooms = () =>
	axios.get<IRoomsCardAllData[]>('/rooms', { baseURL })

export const getRoomsBySlug = (slug: Pick<IRoomsCardAllData, 'slug'>) =>
	axios.get<IRoomsCardAllData>(`/rooms/${slug}`, { baseURL })
