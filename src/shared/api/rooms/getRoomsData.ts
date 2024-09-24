import { IRoomsCardAllData } from '@/shared/types'
import axios from 'axios'
import { baseURL } from '../urls'

export const getRooms = () =>
	axios.get<IRoomsCardAllData[]>('/rooms', { baseURL })

export const getRoomsBySlug = (slug: string) =>
	axios.get<IRoomsCardAllData>(`/rooms/${slug}`, { baseURL })

export const patchRoomsBySlug = (
	newAvailableRooms: Pick<IRoomsCardAllData, 'availableRooms'>
) => axios.patch('/rooms', { newAvailableRooms }, { baseURL })
