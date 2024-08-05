import { IRoomsCardInfoData } from '@/shared/types/roomsCard'
import { create } from 'zustand'

export interface IRoomsCardInfo extends IRoomsCardInfoData {
	selectedService?: { title: string; price: number }
}

interface IUseRoomsCardData {
	isDataForLoading: boolean
	setConditions: (param: { title: string; description: string }) => void
	setDescription: (param: string) => void
	setRoomImages: (param: string) => void
	setSelectedService: (param: { title: string; price: number }) => void
	setTitle: (param: string) => void
	setServices: (param: { title: string; price: number }) => void
	setResetData: () => void
}

export const useRoomsCardData = create<IUseRoomsCardData & IRoomsCardInfo>(
	(set, get) => ({
		isDataForLoading: false,
		conditions: [],
		description: [],
		roomImages: [],
		services: [],

		setConditions: param =>
			set(state => ({
				conditions: [...state.conditions, param],
			})),
		setDescription: param =>
			set(state => ({ description: [...state.description, param] })),
		setRoomImages: param =>
			set(state => ({ roomImages: [...state.roomImages, param] })),
		setSelectedService: param => set(() => ({ selectedService: param })),
		setTitle: param => set(() => ({ title: param })),
		setServices: param =>
			set(state => ({ services: [...state.services, param] })),
		setResetData: () =>
			set(() => ({
				conditions: [],
				description: [],
				roomImages: [],
				services: [],
				title: undefined,
				selectedService: undefined,
				isDataForLoading: false,
			})),
	})
)
