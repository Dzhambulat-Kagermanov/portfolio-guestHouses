import { IRoomsCardAllData } from '@/shared/types'
import axios from 'axios'
import { baseApiURL } from '../urls'

export const getRooms = () =>
	axios.get<IRoomsCardAllData[]>('/rooms', { baseURL: baseApiURL })

export const getRoomsBySlug = (slug: Pick<IRoomsCardAllData, 'slug'>) =>
	axios.get<IRoomsCardAllData>(`/rooms/${slug}`, { baseURL: baseApiURL })

export const patchAvailableRoomsBySlug = (
	slug: Pick<IRoomsCardAllData, 'slug'>,
	newVal: Pick<IRoomsCardAllData, 'availableRooms'>
) =>
	axios.patch<IRoomsCardAllData>(
		`/rooms/${slug}`,
		{
			availableRooms: newVal,
			type: 'availableRooms',
		},
		{ baseURL: baseApiURL }
	)
